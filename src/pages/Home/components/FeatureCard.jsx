import { useState } from "react"

const FeatureCard = ({ icon: Icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative bg-white p-6 pt-16 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-[#1B1B1B] transform hover:-translate-y-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Icon Container */}
      <div className={`absolute -top-8 left-6 w-20 h-20 bg-[#1B1B1B] flex items-center justify-center transition-all duration-300 ${
        isHovered ? 'transform scale-110 shadow-lg' : ''
      }`}>
        <Icon className={`w-10 h-10 text-white transition-all duration-300 ${
          isHovered ? 'transform rotate-12' : ''
        }`} />
      </div>

      {/* Content with Animations */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-[#1B1B1B] mb-4 group-hover:text-[#333] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Subtle background animation */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-0 transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : ''
      }`} />
    </div>
  )
}

export default FeatureCard
