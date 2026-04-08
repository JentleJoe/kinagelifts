import { useState, useEffect, useCallback } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import StarRating from "./StarRating"
import { testimonialsData } from "./data/testimonialsData"

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [autoPlay, setAutoPlay] = useState(true)
  const currentTestimonial = testimonialsData[activeIndex]

  const handleTransition = useCallback((newIndex) => {
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setActiveIndex(newIndex)
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, 300)
  }, [isTransitioning])

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return
    
    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % testimonialsData.length
      handleTransition(nextIndex)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(timer)
  }, [activeIndex, autoPlay, handleTransition])

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % testimonialsData.length
    handleTransition(nextIndex)
  }

  const handlePrevious = () => {
    const prevIndex = (activeIndex - 1 + testimonialsData.length) % testimonialsData.length
    handleTransition(prevIndex)
  }

  const handleDotClick = (index) => {
    handleTransition(index)
  }

  return (
    <section className="py-16 bg-[#F9F9F9] flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg overflow-hidden rounded-lg">
        {/* Navigation Arrows */}
        <div className="relative">
          <button
            onClick={handlePrevious}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Show previous customer review"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={handleNext}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            aria-label="Show next customer review"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Testimonial Content */}
          <div className={`p-8 md:p-12 text-center transition-all duration-300 ${
            isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
          }`}>
            <div className="mb-6">
              <Quote className="w-12 h-12 text-gray-800 mx-auto animate-pulse" />
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6 min-h-[80px] flex items-center justify-center">
              {currentTestimonial.quote}
            </p>
            
            <div className="mb-4">
              <StarRating rating={currentTestimonial.rating} />
            </div>
            
            <p className="text-gray-500 text-sm">
              Review {activeIndex + 1} of {testimonialsData.length}
            </p>
          </div>
        </div>

        {/* Customer Navigation */}
        <div className="bg-[#1B1B1B] flex justify-center items-end relative">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative flex-1 flex flex-col items-center p-4 cursor-pointer transition-all duration-300 hover:bg-gray-800 ${
                activeIndex === index ? "pt-6 bg-gray-800" : "pt-4"
              }`}
              onClick={() => handleDotClick(index)}
              onMouseEnter={() => setAutoPlay(false)}
              onMouseLeave={() => setAutoPlay(true)}
            >
              <p className={`text-white font-semibold text-base text-center transition-all duration-300 ${
                activeIndex === index ? 'text-white' : 'text-gray-300'
              }`}>
                {testimonial.name}
              </p>
              {activeIndex === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white animate-pulse"></div>
              )}
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center py-4 space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-[#1B1B1B] scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to customer review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews
