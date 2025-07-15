import { useState } from "react"
import FAQItem from "./FAQItem"
import { faqData } from "../../../data/faqData"
import { Grid3x3, LayoutGrid } from "lucide-react" // Reusing icons from achievements

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: FAQ Accordion */}
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#1B1B1B] leading-tight mb-8 uppercase text-left">
            YOUR QUESTIONS ANSWERED: FAQS ABOUT STEEL PRODUCTS AND SERVICES
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={faq.id} className="border border-gray-300 rounded-sm overflow-hidden">
                <FAQItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleItemClick(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image and Stats */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Modern Glass Elevator in Corporate Building"
              className="w-full h-[400px] lg:h-[550px] lg:w-[500px] object-cover"
            />
          </div>
          {/* Overlaid Stats */}
          <div className="absolute -bottom-12 right-0 flex space-x-4">
            <div className="bg-[#1B1B1B] p-4 flex flex-col items-center text-white text-center w-32 h-32 justify-center">
              <Grid3x3 className="w-8 h-8 mb-2" />
              <p className="text-xl font-bold">500+</p>
              <p className="text-sm">Steel Produced</p>
            </div>
            <div className="bg-[#1B1B1B] p-4 flex flex-col items-center text-white text-center w-32 h-32 justify-center">
              <LayoutGrid className="w-8 h-8 mb-2" />
              <p className="text-xl font-bold">12,322</p>
              <p className="text-sm">Factories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
