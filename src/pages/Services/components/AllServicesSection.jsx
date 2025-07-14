import { useState } from "react"
import ServiceBlock from "./ServiceBlock"
import { installationData, maintenanceData } from "../data/installationMaintenanceData"

const AllServicesSection = () => {
  const [activeTab, setActiveTab] = useState("installation") // 'installation' or 'maintenance'

  const currentServices = activeTab === "installation" ? installationData : maintenanceData

  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation Buttons */}
        <div className="flex flex-col items-center mb-12">
          {" "}
          {/* Added flex flex-col items-center for centering */}
          {/* "All Services:" Heading */}
          <h2 className="text-2xl font-bold text-[#1B1B1B] mb-4">All Services:</h2>
          <div className="flex space-x-4">
            {" "}
            {/* Removed justify-center from here, now handled by parent */}
            <button
              className={`px-8 py-3 font-semibold text-lg transition-colors ${
                activeTab === "installation"
                  ? "bg-[#1B1B1B] text-white"
                  : "bg-transparent text-[#1B1B1B] border border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("installation")}
            >
              Installation
            </button>
            <button
              className={`px-8 py-3 font-semibold text-lg transition-colors ${
                activeTab === "maintenance"
                  ? "bg-[#1B1B1B] text-white"
                  : "bg-transparent text-[#1B1B1B] border border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("maintenance")}
            >
              Maintenance
            </button>
          </div>
        </div>

        {/* Service Details Content */}
        <div className="space-y-8">
          {currentServices.map((service) => (
            <ServiceBlock
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              icon={service.icon}
              layout={service.layout}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllServicesSection
