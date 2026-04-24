const prefetchServicesPage = () => import('../pages/Services/Services')
const prefetchServicesData = () => import('../pages/Services/data/installationMaintenanceData')

let hasPrefetched = false
let inFlightPrefetch

const firstSrcFromSrcSet = (srcSet) => {
  if (!srcSet || typeof srcSet !== 'string') {
    return undefined
  }

  const [firstCandidate] = srcSet.split(',')
  if (!firstCandidate) {
    return undefined
  }

  const [src] = firstCandidate.trim().split(' ')
  return src
}

const imageUrlFromPictureObject = (image) => {
  if (!image || typeof image !== 'object') {
    return undefined
  }

  return (
    image.img?.src
    || firstSrcFromSrcSet(image.sources?.webp)
    || firstSrcFromSrcSet(image.sources?.avif)
    || firstSrcFromSrcSet(image.sources?.jpeg)
    || firstSrcFromSrcSet(image.sources?.jpg)
    || image.src
  )
}

const warmImage = (src) => {
  if (!src || typeof window === 'undefined') {
    return
  }

  const img = new Image()
  img.decoding = 'async'
  img.src = src
}

export const prefetchServicesRouteAssets = () => {
  if (hasPrefetched) {
    return Promise.resolve()
  }

  if (inFlightPrefetch) {
    return inFlightPrefetch
  }

  inFlightPrefetch = (async () => {
    await prefetchServicesPage()

    // Warm a couple of above-the-fold images used on Services sections.
    const dataModule = await prefetchServicesData()
    const images = [
      dataModule.installationData?.[0]?.image,
      dataModule.maintenanceData?.[0]?.image,
    ]

    images
      .map(imageUrlFromPictureObject)
      .filter(Boolean)
      .forEach(warmImage)
  })()
    .catch(() => {})
    .finally(() => {
      hasPrefetched = true
      inFlightPrefetch = undefined
    })

  return inFlightPrefetch
}
