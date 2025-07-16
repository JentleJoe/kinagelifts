import FeatureDisplayCard from "./FeatureDisplayCard"
import { featuresData } from "../data/featuresData"

const Features = () => {
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B1B1B] mb-4 uppercase">
            Quality You Can Trust
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every product we offer is carefully selected and certified to meet the highest standards of quality, safety, and performance
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {featuresData.map((feature, index) => (
            <FeatureDisplayCard
              key={index} // Using index for unique key, id for display
              id={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
