import { access, readFile } from 'node:fs/promises'
import path from 'node:path'
import { prerenderRoutes } from '../prerender.routes.mjs'

const distDir = path.resolve(process.cwd(), 'dist')
const skipMarkerFile = path.join(distDir, '.prerender-skip.json')

const getSkipMarker = async () => {
  try {
    const markerContent = await readFile(skipMarkerFile, 'utf8')
    return JSON.parse(markerContent)
  } catch (error) {
    if (error?.code === 'ENOENT') {
      return null
    }

    throw error
  }
}

const skipMarker = await getSkipMarker()

if (skipMarker?.skipped) {
  const reason = skipMarker.reason || 'No reason provided'
  console.warn(`Skipping prerender verification because prerender was skipped (${reason}).`)
  process.exit(0)
}

const routeToOutputPath = (route) => {
  if (route === '/') {
    return path.join(distDir, 'index.html')
  }

  return path.join(distDir, route.replace(/^\//, ''), 'index.html')
}

const missingRoutes = []
const invalidRoutes = []

for (const route of prerenderRoutes) {
  const outputPath = routeToOutputPath(route)

  try {
    await access(outputPath)
    const html = await readFile(outputPath, 'utf8')

    if (!html.includes('<div id="root">')) {
      invalidRoutes.push({ route, outputPath, reason: 'Missing root mount element' })
      continue
    }

    if (html.includes('<div id="root"></div>')) {
      invalidRoutes.push({ route, outputPath, reason: 'Root element is empty' })
      continue
    }

    if (!html.includes('type="module"')) {
      invalidRoutes.push({ route, outputPath, reason: 'Missing hydration module script' })
    }
  } catch {
    missingRoutes.push({ route, outputPath })
  }
}

if (missingRoutes.length || invalidRoutes.length) {
  if (missingRoutes.length) {
    console.error('Missing prerendered route files:')
    for (const item of missingRoutes) {
      console.error(`- ${item.route} -> ${item.outputPath}`)
    }
  }

  if (invalidRoutes.length) {
    console.error('Invalid prerendered route files:')
    for (const item of invalidRoutes) {
      console.error(`- ${item.route} -> ${item.outputPath} (${item.reason})`)
    }
  }

  process.exit(1)
}

console.log(`Verified prerendered HTML for ${prerenderRoutes.length} routes.`)
