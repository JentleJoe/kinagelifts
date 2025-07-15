import { achievementsData } from "./data/achievementsData"

const Achievements = () => {
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Column: Text and Stats */}
        <div className="lg:pr-8">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B1B1B] leading-tight mb-6 uppercase">
            FOR THE LAST 10 YEARS WE HAVE HELPED COUNTLESS BUSINESSES WITH OUR PRODUCTS & SERVICES
          </h2>
          <p className="text-lg text-[#1B1B1B] leading-relaxed mb-12">
            At KinageLifts, we are dedicated to delivering high-quality elevator and escalator solutions to meet the
            diverse needs of businesses across industries.
          </p>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {achievementsData.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <item.icon className="w-10 h-10 text-[#1B1B1B] flex-none" />
                <div>
                  <p className="text-2xl font-bold text-[#1B1B1B]">{item.value}</p>
                  <p className="text-base text-[#1B1B1B]">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
              alt="Professional elevator technician working on modern lift system"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
