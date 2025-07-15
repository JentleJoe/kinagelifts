const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="relative bg-white p-6 pt-16 shadow-sm border border-gray-200">
      <div className="absolute -top-8 left-6 w-20 h-20 bg-[#1B1B1B] flex items-center justify-center">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-xl font-bold text-[#1B1B1B] mb-4">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  )
}

export default FeatureCard
