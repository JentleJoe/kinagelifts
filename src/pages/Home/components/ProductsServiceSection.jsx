import { useRef, useState, useEffect } from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import ProductServiceCard from "../../../components/ProductServiceCard"

const CarouselComponent = Carousel?.default ?? Carousel

const ProductServiceSection = ({ title, items = [], showNavigation = false }) => {
  const carouselRef = useRef(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [isClient, setIsClient] = useState(false)

  // Update items per view based on window size
  useEffect(() => {
    const updateItemsPerView = () => {
      const newItemsPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
      
      // Reset current slide when viewport changes to prevent indicator issues
      if (newItemsPerView !== itemsPerView) {
        setCurrentPage(0);
      }
      
      setItemsPerView(newItemsPerView);
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [itemsPerView])

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Responsive breakpoints for react-multi-carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  }

  // Helper function to calculate and update current page
  const updateCurrentPage = (slideIndex) => {
    if (items.length <= itemsPerView) {
      setCurrentPage(0);
      return;
    }
    
    // Simple approach: cycle through pages smoothly
    const totalPages = Math.ceil(items.length / itemsPerView);
    let newPage = Math.floor(slideIndex / itemsPerView) % totalPages;
    
    // Ensure page is always positive
    if (newPage < 0) {
      newPage = totalPages + newPage;
    }
    
    setCurrentPage(newPage);
  }

  const getTotalPages = () => {
    return Math.ceil(items.length / itemsPerView);
  }

  // Check if progress indicator should be shown
  const shouldShowProgress = () => {
    return items.length > itemsPerView;
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
          {items && items.length > 0 ? (
            <>
              {/* Navigation Arrows - Positioned over the carousel */}
              {showNavigation && (
                <div className="hidden md:block">
                  <button
                    onClick={() => carouselRef.current?.previous()}
                    className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 bg-white/90 border-[#1B1B1B] text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 z-30 backdrop-blur-sm"
                    aria-label="Previous slide"
                  >
                    <svg
                      className="w-4 h-4 lg:w-5 lg:h-5 mx-auto"
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
                    onClick={() => carouselRef.current?.next()}
                    className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 bg-white/90 border-[#1B1B1B] text-[#1B1B1B] hover:bg-[#1B1B1B] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 z-30 backdrop-blur-sm"
                    aria-label="Next slide"
                  >
                    <svg
                      className="w-4 h-4 lg:w-5 lg:h-5 mx-auto"
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

              {isClient ? (
                <CarouselComponent
                  ref={carouselRef}
                  responsive={responsive}
                  autoPlay={true}
                  autoPlaySpeed={4000}
                  infinite={true}
                  pauseOnHover={true}
                  swipeable={true}
                  draggable={true}
                  showDots={false}
                  customLeftArrow={null}
                  customRightArrow={null}
                  dotListClass="hidden"
                  arrows={false}
                  containerClass="carousel-container"
                  itemClass="px-3"
                  customTransition="transform 500ms ease-in-out"
                  beforeChange={(nextSlide) => {
                    updateCurrentPage(nextSlide);
                  }}
                  afterChange={(slideIndex) => {
                    updateCurrentPage(slideIndex);
                  }}
                >
                  {items.map((item, index) => (
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
                </CarouselComponent>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.slice(0, 3).map((item, index) => (
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
              )}

              {/* Universal Progress Indicator - Shows when not all items are visible */}
              {showNavigation && isClient && shouldShowProgress() && (
                <div className="block">
                  <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: getTotalPages() }).map((_, index) => {
                      const isActive = index === currentPage;
                      return (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isActive 
                              ? 'bg-[#1B1B1B] scale-125' 
                              : 'bg-gray-300'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </>
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
      </div>

      {/* Custom CSS for carousel styling */}
      <style>{`
        .carousel-container .react-multi-carousel-list {
          padding: 20px 0;
        }
        
        .carousel-container .react-multi-carousel-item {
          display: flex;
          justify-content: center;
        }
        
        .carousel-container .react-multi-carousel-track {
          padding: 0;
        }
      `}</style>
    </section>
  )
}

export default ProductServiceSection
