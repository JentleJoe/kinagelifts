const ResponsiveImage = ({
  image,
  alt,
  className,
  pictureClassName = 'block',
  sizes = '100vw',
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  ...imgProps
}) => {
  const isObjectImage = image && typeof image === 'object'

  // Support both imagetools picture output and legacy responsive object shapes.
  const avifSrcSet = isObjectImage ? image.sources?.avif || image.avif : undefined
  const webpSrcSet = isObjectImage ? image.sources?.webp || image.webp : undefined
  const jpegSrcSet = isObjectImage
    ? image.sources?.jpeg || image.sources?.jpg || image.jpeg || image.jpg
    : undefined

  const fallbackSrc = isObjectImage
    ? image.img?.src || image.fallback || image.src || image.jpeg || image.jpg
    : image

  const fallbackWidth = isObjectImage ? image.img?.w || image.width : undefined
  const fallbackHeight = isObjectImage ? image.img?.h || image.height : undefined

  if (!isObjectImage) {
    return (
      <img
        src={fallbackSrc || '/placeholder.svg'}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        {...imgProps}
      />
    )
  }

  return (
    <picture className={pictureClassName}>
      {avifSrcSet && <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />}
      {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />}
      {jpegSrcSet && <source type="image/jpeg" srcSet={jpegSrcSet} sizes={sizes} />}
      <img
        src={fallbackSrc || '/placeholder.svg'}
        srcSet={jpegSrcSet}
        sizes={sizes}
        width={fallbackWidth}
        height={fallbackHeight}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        {...imgProps}
      />
    </picture>
  )
}

export default ResponsiveImage
