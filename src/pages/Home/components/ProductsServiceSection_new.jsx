import { useRef, useState, useEffect } from "react"
import ProductServiceCard from "../../../components/ProductServiceCard"

const ProductServiceSection = ({ title, items = [], showNavigation = false }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(3)

  // Calculate cards per page based on viewport width
  const updateCardsPerPage = () => {
    if (window.innerWidth >= 1024) {
      setCardsPerPage(3) // Desktop: 3 cards
    } else if (window.innerWidth >= 768) {
      setCardsPerPage(2) // Tablet: 2 cards
    } else {
      setCardsPerPage(1) // Mobile: 1 card
    }
  }

  useEffect(() => {
    updateCardsPerPage()
    window.addEventListener('resize', updateCardsPerPage)
    return () => window.removeEventListener('resize', updateCardsPerPage)
  }, [])

  const totalPages = Math.ceil(items.length / cardsPerPage)
  const canScrollLeft = currentPage > 0
  const canScrollRight = currentPage < totalPages - 1

  const scroll = (direction) => {
    if (direction === "left" && canScrollLeft) {
      setCurrentPage(prev => prev - 1)
    } else if (direction === "right" && canScrollRight) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const getCurrentPageItems = () => {
    const startIndex = currentPage * cardsPerPage
    return items.slice(startIndex, startIndex + cardsPerPage)
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1B1B1B] uppercase mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-[#1B1B1B] mx-auto"></div>
        </div>

        {/* Content Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          {showNavigation && totalPages > 1 && (
            <div className="hidden lg:block">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-14 h-14 rounded-full border-2 transition-all duration-300 z-20 ${
                  canScrollLeft 
                    ? 'bg-white border-[#1B1B1B] text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-white shadow-lg hover:shadow-xl' 
                    : 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
                }`}
                aria-label="Scroll left"
              >
                <svg
                  className="w-6 h-6 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-14 h-14 rounded-full border-2 transition-all duration-300 z-20 ${
                  canScrollRight 
                    ? 'bg-white border-[#1B1B1B] text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-white shadow-lg hover:shadow-xl' 
                    : 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
                }`}
                aria-label="Scroll right"
              >
                <svg
                  className="w-6 h-6 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Cards Container */}
          <div className="overflow-hidden">
            {items && items.length > 0 ? (
              <div
                className="transition-all duration-500 ease-in-out"
                key={currentPage} // Force re-render for smooth transitions
              >
                <div className={`grid gap-6 ${
                  cardsPerPage === 1 ? 'grid-cols-1 justify-items-center' :
                  cardsPerPage === 2 ? 'grid-cols-2' :
                  'grid-cols-3'
                }`}>
                  {getCurrentPageItems().map((item, index) => (
                    <div
                      key={item.id}
                      className="transform transition-all duration-300 hover:scale-105"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <ProductServiceCard 
                        image={item.image} 
                        title={item.title} 
                        link={item.link} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center w-full py-20">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">No items to display</p>
                </div>
              </div>
            )}
          </div>

          {/* Page Indicators */}
          {showNavigation && totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1B1B1B] ${
                      currentPage === index 
                        ? 'bg-gray-100' 
                        : 'bg-transparent hover:bg-gray-100'
                    }`}
                    aria-label={`Go to page ${index + 1}`}
                  >
                    <span
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentPage === index
                          ? 'bg-[#1B1B1B] scale-110'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ProductServiceSection
