import ServiceDetailItem from "./ServiceDetailItem"
import { maintenanceServicesData } from "../data/maintenanceServicesData"
import maintenance from "../../../assets/maintenance.png"

const MaintenanceService = () => {
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] items-end">
          {/* Service Details (Single White Block) - Always first on mobile */}
          <div className="bg-white shadow-sm border border-gray-200 lg:order-2">
            {/* Header */}
            <div className="bg-[#1B1B1B] text-white py-9 px-7 flex items-center space-x-2 shadow-md">
              <h2 className="text-5xl font-heading font-bold uppercase">MAINTENANCE</h2>
              <svg
                className="w-14 h-16 -mt-1 -mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m4 20 16-16m-9 0h9m0 0v9"></path>
              </svg>
            </div>
            {/* Service Items */}
            <div className="p-7">
              {maintenanceServicesData.map((service) => (
                <ServiceDetailItem
                  key={service.id}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
          {/* Image - Always second on mobile */}
          <div className="flex justify-center lg:justify-start lg:order-1">
            <img
              src={maintenance}
              alt="Elevator Maintenance and Repair"
              className="w-full object-cover lg:h-[880px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MaintenanceService
