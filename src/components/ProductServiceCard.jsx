import { Link } from 'react-router-dom';
import ResponsiveImage from './ResponsiveImage';

const ProductServiceCard = ({ image, title, link }) => {
  return (
    <div className="flex-none w-[280px] sm:w-[300px] md:w-[320px] bg-white shadow-sm overflow-hidden flex flex-col">
      <div className="w-full h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden">
        <ResponsiveImage
          image={image}
          alt={title}
          pictureClassName="block w-full h-full"
          className="w-full h-full object-cover"
          sizes="(max-width: 639px) 280px, (max-width: 767px) 300px, 320px"
        />
      </div>
      <div className="flex">
        <div className="flex-1 p-3 sm:p-4 flex items-center">
          <h3 className="text-base sm:text-lg font-semibold text-[#1B1B1B] truncate">{title}</h3>
        </div>
        <Link
          to={link}
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
        </Link>
      </div>
    </div>
  )
}

export default ProductServiceCard
