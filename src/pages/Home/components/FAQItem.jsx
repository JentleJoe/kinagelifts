import { Plus, Minus } from "lucide-react"

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300 last:border-b-0">
      <button
        className={`flex justify-between items-center w-full py-4 px-6 text-[#1B1B1B] text-lg font-medium hover:bg-white transition-colors focus:outline-none text-left ${
          isOpen ? "bg-white" : "bg-transparent"
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s/g, "-").toLowerCase()}`}
      >
        <span className="text-left">{question}</span>
        {isOpen ? <Minus className="w-6 h-6 flex-none" /> : <Plus className="w-6 h-6 flex-none" />}
      </button>
      {isOpen && (
        <div
          id={`faq-answer-${question.replace(/\s/g, "-").toLowerCase()}`}
          className="bg-white p-6 text-gray-700 leading-relaxed text-left"
        >
          {answer}
        </div>
      )}
    </div>
  )
}

export default FAQItem
