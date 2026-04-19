import path from 'node:path'
import { access, mkdir, readFile, rm, unlink, writeFile } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import { prerenderRoutes } from '../prerender.routes.mjs'

const distDir = path.resolve(process.cwd(), 'dist')
const ssrOutDir = path.resolve(process.cwd(), 'dist-ssr')
const ssrEntryPath = path.join(ssrOutDir, 'entry-server.js')
const skipMarkerFile = path.join(distDir, '.prerender-skip.json')
const defaultPrerenderMode = 'strict'
const prerenderMode = (process.env.PRERENDER_MODE || defaultPrerenderMode).toLowerCase()

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
    'No SSR entry bundle found',
    'render is not a function',
    'Cannot find module',
  ].some((snippet) => errorText.includes(snippet))
}

try {
  await clearSkipMarker()

  if (prerenderMode === 'off') {
    await skipPrerender('PRERENDER_MODE=off')
    process.exitCode = 0
  } else {
    try {
      await access(ssrEntryPath)
    } catch {
      throw new Error(`No SSR entry bundle found at ${ssrEntryPath}. Run npm run build:ssr first.`)
    }

    const serverEntryUrl = pathToFileURL(ssrEntryPath).href
    const serverModule = await import(`${serverEntryUrl}?v=${Date.now()}`)
    const renderRoute = serverModule.render

    if (typeof renderRoute !== 'function') {
      throw new Error('SSR entry render is not a function.')
    }

    const templatePath = path.join(distDir, 'index.html')
    const templateHtml = await readFile(templatePath, 'utf8')

    for (const route of prerenderRoutes) {
      const appHtml = await renderRoute(route)
      const outputPath = routeToOutputPath(route)
      const renderedHtml = templateHtml.replace(
        /<div id="root">[\s\S]*?<\/div>/,
        `<div id="root">${appHtml}</div>`,
      )

      await mkdir(path.dirname(outputPath), { recursive: true })
      await writeFile(outputPath, renderedHtml, 'utf8')

      console.log(`Prerendered ${route} -> ${outputPath}`)
    }

    console.log(`Completed prerendering for ${prerenderRoutes.length} routes.`)
  }
} catch (error) {
  if (isRecoverableAutoModeError(error)) {
    const reason = `Auto mode fallback: ${error?.message || 'SSR prerender artifacts unavailable'}`
    await skipPrerender(reason)
    process.exitCode = 0
  } else {
    console.error('Prerender failed:', error)
    process.exitCode = 1
  }
} finally {
  await rm(ssrOutDir, { recursive: true, force: true })
}
