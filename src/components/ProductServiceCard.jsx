const ProductServiceCard = ({ image, title, link }) => {
  return (
    <div className="flex-none w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] bg-white shadow-sm overflow-hidden flex flex-col">
      <div className="w-full h-[220px] sm:h-[240px] md:h-[260px] overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-3 sm:p-4 flex justify-between items-center">
        <h3 className="text-base sm:text-lg font-semibold text-[#1B1B1B] truncate mr-2">{title}</h3>
        <a
          href={link}
          className="flex-none w-8 h-8 sm:w-10 sm:h-10 bg-[#1B1B1B] text-white flex items-center justify-center hover:bg-gray-700 transition-colors group"
          aria-label={`Learn more about ${title}`}
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" // Slanted arrow effect
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7V17"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default ProductServiceCard
