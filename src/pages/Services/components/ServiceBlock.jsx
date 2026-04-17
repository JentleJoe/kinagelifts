import ResponsiveImage from "../../../components/ResponsiveImage"

const ServiceBlock = ({ title, description, image, icon: Icon, layout }) => {
  const isImageLeft = layout === "image-left"

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
      {/* Text Content - Always first on mobile */}
      <div className={`bg-white p-8 flex flex-col justify-center ${isImageLeft ? "md:order-2" : "md:order-1"}`}>
        <div className="flex items-center space-x-4 mb-4">
          <Icon className="w-8 h-8 text-[#1B1B1B]" />
          <h3 className="text-2xl font-bold text-[#1B1B1B]">{title}</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
      
      {/* Image - Always second on mobile */}
      <div className={`h-full ${isImageLeft ? "md:order-1" : "md:order-2"}`}>
        <ResponsiveImage
          image={image}
          alt={title}
          className="w-full h-64 object-cover"
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}

export default ServiceBlock
