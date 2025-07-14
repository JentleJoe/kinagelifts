const ServiceBlock = ({ title, description, image, icon: Icon, layout }) => {
  const isImageLeft = layout === "image-left"

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 items-stretch ${
        isImageLeft ? "md:grid-flow-col" : "md:grid-flow-col-dense"
      }`}
    >
      {isImageLeft ? (
        <>
          {/* Image on Left */}
          <div className="h-full">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover" />
          </div>
          {/* Text on Right */}
          <div className="bg-white p-8 flex flex-col justify-center">
            <div className="flex items-center space-x-4 mb-4">
              <Icon className="w-8 h-8 text-[#1B1B1B]" />
              <h3 className="text-2xl font-bold text-[#1B1B1B]">{title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>
        </>
      ) : (
        <>
          {/* Text on Left */}
          <div className="bg-white p-8 flex flex-col justify-center">
            <div className="flex items-center space-x-4 mb-4">
              <Icon className="w-8 h-8 text-[#1B1B1B]" />
              <h3 className="text-2xl font-bold text-[#1B1B1B]">{title}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>
          {/* Image on Right */}
          <div className="h-full">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover" />
          </div>
        </>
      )}
    </div>
  )
}

export default ServiceBlock
