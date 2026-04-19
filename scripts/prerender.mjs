import { spawn } from 'node:child_process'
import path from 'node:path'
import { access, mkdir, unlink, writeFile } from 'node:fs/promises'
import puppeteer from 'puppeteer-core'
import { prerenderRoutes } from '../prerender.routes.mjs'

const distDir = path.resolve(process.cwd(), 'dist')
const skipMarkerFile = path.join(distDir, '.prerender-skip.json')
const previewHost = '127.0.0.1'
const previewPort = Number(process.env.PRERENDER_PORT || 4173)
const previewBaseUrl = `http://${previewHost}:${previewPort}`
const previewStartupTimeoutMs = 30000
const previewPollIntervalMs = 250
const pageNavigationTimeoutMs = 45000
const renderStabilizationTimeoutMs = 20000
const defaultPrerenderMode = 'strict'
const prerenderMode = (process.env.PRERENDER_MODE || defaultPrerenderMode).toLowerCase()
const browserExecutableCandidates = [
  process.env.PRERENDER_BROWSER_PATH,
  process.env.PUPPETEER_EXECUTABLE_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/mnt/c/Program Files/Google/Chrome/Application/chrome.exe',
  '/mnt/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/usr/bin/chromium',
  '/opt/google/chrome/chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
]

if (!Array.isArray(prerenderRoutes) || prerenderRoutes.length === 0) {
  throw new Error('No routes configured for prerendering.')
}

if (!['strict', 'auto', 'off'].includes(prerenderMode)) {
  throw new Error(
    `Invalid PRERENDER_MODE "${prerenderMode}". Expected one of: strict, auto, off.`,
  )
}

const routeToOutputPath = (route) => {
  if (route === '/') {
    return path.join(distDir, 'index.html')
  }

  return path.join(distDir, route.replace(/^\//, ''), 'index.html')
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const clearSkipMarker = async () => {
  try {
    await unlink(skipMarkerFile)
  } catch (error) {
    if (error?.code !== 'ENOENT') {
      throw error
    }
  }
}

const writeSkipMarker = async (reason) => {
  await mkdir(distDir, { recursive: true })

  const payload = {
    skipped: true,
    mode: prerenderMode,
    reason,
    timestamp: new Date().toISOString(),
  }

  await writeFile(skipMarkerFile, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
}

const skipPrerender = async (reason) => {
  await writeSkipMarker(reason)
  console.warn(`[prerender] Skipping prerender (${reason}).`)
}

const isRecoverableAutoModeError = (error) => {
  if (prerenderMode !== 'auto') {
    return false
  }

  const errorText = `${error?.message || ''}\n${error?.stack || ''}`

  return [
    'No local browser executable found',
    'Failed to launch the browser process',
    'error while loading shared libraries',
    'cannot open shared object file',
    'libnss3.so',
  ].some((snippet) => errorText.includes(snippet))
}

const waitForPreviewReady = async (proc) => {
  const start = Date.now()

  while (Date.now() - start < previewStartupTimeoutMs) {
    if (proc.exitCode !== null) {
      throw new Error(`Vite preview exited early with code ${proc.exitCode}.`)
    }

    try {
      const response = await fetch(previewBaseUrl, {
        method: 'GET',
        redirect: 'manual',
        cache: 'no-store',
        signal: AbortSignal.timeout(5000),
      })

      if (response.status >= 200 && response.status < 500) {
        return
      }
    } catch {
      // Keep polling until timeout.
    }

    await delay(previewPollIntervalMs)
  }

  throw new Error('Timed out waiting for Vite preview server to start.')
}

const killPreviewProcess = async (proc) => {
  if (!proc || proc.killed || proc.exitCode !== null) {
    return
  }

  proc.kill('SIGTERM')

  await Promise.race([
    new Promise((resolve) => proc.once('exit', resolve)),
    delay(5000),
  ])

  if (proc.exitCode === null) {
    proc.kill('SIGKILL')
  }
}

const resolveBrowserExecutable = async () => {
  for (const candidate of browserExecutableCandidates) {
    if (!candidate) {
      continue
    }

    try {
      await access(candidate)
      return candidate
    } catch {
      // Try next candidate.
    }
  }

  return undefined
}

const createPreviewProcess = () =>
  spawn(
    process.execPath,
    [
      path.resolve(process.cwd(), 'node_modules/vite/bin/vite.js'),
      'preview',
      '--host',
      previewHost,
      '--port',
      `${previewPort}`,
      '--strictPort',
    ],
    {
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', 'pipe'],
    },
  )

let browser
let previewProcess

try {
  await clearSkipMarker()

  if (prerenderMode === 'off') {
    await skipPrerender('PRERENDER_MODE=off')
    process.exitCode = 0
  } else {
    previewProcess = createPreviewProcess()

    previewProcess.stdout.on('data', (chunk) => {
      process.stdout.write(chunk)
    })

    previewProcess.stderr.on('data', (chunk) => {
      process.stderr.write(chunk)
    })

    await waitForPreviewReady(previewProcess)

    const executablePath = await resolveBrowserExecutable()

    if (!executablePath) {
      const message =
        'No local browser executable found. Set PRERENDER_BROWSER_PATH to a Chrome/Edge executable path.'

      if (prerenderMode === 'auto') {
        await skipPrerender(message)
        process.exitCode = 0
      } else {
        throw new Error(message)
      }
    } else {
      browser = await puppeteer.launch({
        headless: true,
        executablePath,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
      })

      console.log(`Using browser executable: ${executablePath}`)

      for (const route of prerenderRoutes) {
        const page = await browser.newPage()
        await page.setViewport({ width: 1366, height: 768 })

        await page.setRequestInterception(true)
        page.on('request', (request) => {
          const requestUrl = request.url()
          const isLocalRequest = requestUrl.startsWith(previewBaseUrl)

          if (request.resourceType() === 'media') {
            request.abort()
            return
          }

          if (!isLocalRequest && request.resourceType() !== 'document') {
            request.abort()
            return
          }

          request.continue()
        })

        const url = `${previewBaseUrl}${route}`
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: pageNavigationTimeoutMs })
        await page.waitForSelector('#root > *', { timeout: renderStabilizationTimeoutMs })
        await page.evaluate(
          () =>
            new Promise((resolve) => {
              requestAnimationFrame(() => requestAnimationFrame(resolve))
            }),
        )

        const html = await page.content()
        const outputPath = routeToOutputPath(route)

        await mkdir(path.dirname(outputPath), { recursive: true })
        await writeFile(outputPath, `<!doctype html>\n${html}`, 'utf8')

        await page.close()
        console.log(`Prerendered ${route} -> ${outputPath}`)
      }

      console.log(`Completed prerendering for ${prerenderRoutes.length} routes.`)
    }
  }
} catch (error) {
  if (isRecoverableAutoModeError(error)) {
    const reason = `Auto mode fallback: ${error?.message || 'Browser runtime unavailable'}`
    await skipPrerender(reason)
    process.exitCode = 0
  } else {
    console.error('Prerender failed:', error)
    process.exitCode = 1
  }
} finally {
  if (browser) {
    await browser.close()
  }

  await killPreviewProcess(previewProcess)
}
