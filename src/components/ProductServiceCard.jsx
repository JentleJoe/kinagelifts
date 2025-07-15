const ProductServiceCard = ({ image, title, link }) => {
  return (
    <div className="flex-none w-[280px] h-[280px] sm:w-[300px] sm:h-[300px] md:w-[320px] md:h-[320px] bg-white shadow-sm overflow-hidden flex flex-col">
      <div className="w-full h-[220px] sm:h-[240px] md:h-[260px] overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex">
        <div className="flex-1 p-3 sm:p-4 flex items-center">
          <h3 className="text-base sm:text-lg font-semibold text-[#1B1B1B] truncate">{title}</h3>
        </div>
        <a
          href={link}
          className="flex-none bg-[#1B1B1B] text-white flex items-center justify-center hover:bg-gray-700 transition-colors group px-3 sm:px-4"
          aria-label={`Learn more about ${title}`}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2 22 20-20m-11 0h11m0 0v11"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default ProductServiceCard
