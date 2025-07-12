import FeatureCard from "./FeatureCard"
import { whyChooseUsData } from "./data/whyChooseUsData"

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Headline & Description */}
        <div className="lg:pr-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#1B1B1B] leading-tight mb-6 uppercase">
            WHY CHOOSE US
          </h2>
          <p className="text-lg text-[#1B1B1B] leading-relaxed">
            At ApexSteel Inc., we understand that choosing the right steel supplier is crucial for the success of your
            projects. Here are the reasons why ApexSteel Inc. stands out as your preferred partner in the steel industry
          </p>
        </div>

        {/* Right Column: Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyChooseUsData.map((feature) => (
            <FeatureCard key={feature.id} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
