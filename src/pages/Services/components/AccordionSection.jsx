import { useState } from "react"
import AccordionItem from "./AccordionItem"
import { faqData } from "../../../data/faqData"

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-[#F9F9F9] flex justify-center">
      <div className="w-full max-w-3xl lg:max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        {/* Removed the "Close" button */}

        {/* Accordion Items */}
        <div className="mt-0">
          {" "}
          {/* Removed margin-top as close button is gone */}
          {faqData.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AccordionSection
