const ServiceDetailItem = ({ title, description, link }) => {
  return (
    <div className="py-6 border-b border-gray-200 last:border-b-0">
      <h3 className="text-xl font-bold text-[#1B1B1B] mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
      <a
        href={link}
        className="inline-flex items-center space-x-2 text-[#1B1B1B] border border-gray-800 px-4 py-2 hover:bg-gray-50 transition-colors group" // Changed border-gray-300 to border-gray-800
      >
        <span>LEARN MORE</span>
        <svg
          className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </a>
    </div>
  )
}

export default ServiceDetailItem
