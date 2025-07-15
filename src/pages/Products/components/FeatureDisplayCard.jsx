const FeatureDisplayCard = ({ id, icon: Icon, title, description }) => {
  return (
    <div className="relative w-full flex flex-col items-center h-full">
      {/* Icon Container */}
      <div className="absolute left-6 -top-10 w-20 h-20 bg-[#1B1B1B] flex items-center justify-center z-10">
        <Icon className="w-10 h-10 text-white" />
      </div>
      {/* Card Content */}
      <div className="bg-transparent hover:bg-white shadow-sm border border-gray-200 pt-16 pb-6 px-6 w-full h-full flex flex-col justify-between transition-colors duration-300">
        <div className="text-left">
          <h3 className="text-xl font-bold text-[#1B1B1B] mb-4">
            {id}. {title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default FeatureDisplayCard
