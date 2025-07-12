import { useRef } from "react"
import ProductServiceCard from "../../../components/ProductServiceCard"

const ProductServiceSection = ({ title, items = [], showNavigation = false }) => {
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth * 0.8 // Scroll by 80% of container width
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-extrabold text-[#1B1B1B] uppercase mb-8">{title}</h2>

        <div className="relative">
          {showNavigation && (
            <>
              <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-transparent border border-[#1B1B1B] text-[#1B1B1B] hover:bg-gray-100 transition-colors z-10"
                style={{ transform: "translate(-50%, -50%)" }} // Adjust position to be outside padding
                aria-label="Scroll left"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  ></path>
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-transparent border border-[#1B1B1B] text-[#1B1B1B] hover:bg-gray-100 transition-colors z-10"
                style={{ transform: "translate(50%, -50%)" }} // Adjust position to be outside padding
                aria-label="Scroll right"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </>
          )}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-4 no-scrollbar"
          >
            {items && items.length > 0 ? (
              items.map((item) => (
                <ProductServiceCard key={item.id} image={item.image} title={item.title} link={item.link} />
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                No items to display
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductServiceSection
