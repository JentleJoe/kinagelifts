import { Plus, Minus } from "lucide-react"

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`mb-4 border border-gray-300 rounded-sm overflow-hidden transition-colors duration-300 ${
        isOpen ? "bg-white" : "bg-transparent" // Default is transparent, active is white
      }`}
    >
      <button
        className={`flex justify-between items-center w-full py-4 px-6 text-[#1B1B1B] text-lg font-medium hover:bg-white transition-colors focus:outline-none text-left ${
          isOpen ? "bg-white" : "bg-transparent" // Default is transparent, active is white
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`accordion-answer-${question.replace(/\s/g, "-").toLowerCase()}`}
      >
        <span className="text-left">{question}</span>
        {isOpen ? <Minus className="w-6 h-6 flex-none" /> : <Plus className="w-6 h-6 flex-none" />}
      </button>
      {isOpen && (
        <div
          id={`accordion-answer-${question.replace(/\s/g, "-").toLowerCase()}`}
          className="p-6 text-gray-700 leading-relaxed text-left"
        >
          {answer}
        </div>
      )}
    </div>
  )
}

export default AccordionItem
