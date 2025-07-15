import FeatureDisplayCard from "./FeatureDisplayCard"
import { featuresData } from "../data/featuresData"

const Features = () => {
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-anton font-extrabold text-[#1B1B1B] leading-tight mb-16 normal-case">Features</h2>

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
