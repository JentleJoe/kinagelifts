import { Star } from "lucide-react"

const StarRating = ({ rating }) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    stars.push(<Star key={i} className={`w-5 h-5 ${i <= rating ? "text-gray-800 fill-gray-800" : "text-gray-400"}`} />)
  }
  return <div className="flex space-x-1">{stars}</div>
}

export default StarRating
