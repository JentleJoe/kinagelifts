import ServiceDetailItem from "./ServiceDetailItem"
import { installationServicesData } from "../data/installationServicesData"

const InstallationService = () => {
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Outer container for padding */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] items-end">
          {" "}
          {/* Removed gap-8, changed items-start to items-stretch */}
          {/* Left Column: Service Details (Single White Block) */}
          <div className="bg-white shadow-sm border border-gray-200">
            {/* Header */}
            <div className="bg-[#1B1B1B] text-white py-9 px-6 flex items-center space-x-2 shadow-md">
              {" "}
              {/* Changed justify-between to items-center space-x-2 */}
              <h2 className="text-2xl font-bold uppercase">INSTALLATION</h2>
              <svg
                className="w-6 h-6 -mt-1 -mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </div>
            {/* Service Items */}
            <div className="p-6">
              {installationServicesData.map((service) => (
                <ServiceDetailItem
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  link={service.link}
                />
              ))}
            </div>
          </div>
          {/* Right Column: Image (No extra container, full height) */}
          <div className="flex justify-center lg:justify-end">
            {" "}
            {/* Added h-full */}
            <img
              src="/placeholder.svg?height=600&width=800&text=Steel+Products&bg=cccccc&color=333333"
              alt="Various Steel Products"
              className="w-full object-cover lg:h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstallationService
