import { useState } from "react"
import { Quote } from "lucide-react"
import StarRating from "./StarRating"
import { testimonialsData } from "./data/testimonialsData"

const CustomerReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const currentTestimonial = testimonialsData[activeIndex]

  return (
    <section className="py-16 bg-[#F9F9F9] flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg overflow-hidden">
        {/* Testimonial Content */}
        <div className="p-8 md:p-12 text-center">
          <Quote className="w-12 h-12 text-gray-800 mx-auto mb-6" />
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{currentTestimonial.quote}</p>
          <StarRating rating={currentTestimonial.rating} />
        </div>

        {/* Customer Navigation */}
        <div className="bg-[#1B1B1B] flex justify-center items-end relative">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative flex-1 flex flex-col items-center p-4 cursor-pointer transition-all duration-300 ${
                activeIndex === index ? "pt-8" : "pt-4"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mb-2 border-2 border-white"
              />
              <p className="text-white font-semibold text-base text-center">{testimonial.name}</p>
              <p className="text-gray-400 text-sm text-center">{testimonial.title}</p>
              {activeIndex === index && <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews
