import ServiceDetailItem from "./ServiceDetailItem"
import { installationServicesData } from "../data/installationServicesData"
import ResponsiveImage from "../../../components/ResponsiveImage"
import { sectionImages } from "../../../assets/sectionImageCatalog"

const InstallationService = () => {
  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Outer container for padding */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] items-end">
          {/* Left Column: Service Details (Single White Block) - Always first on mobile */}
          <div className="bg-white shadow-sm border border-gray-200 lg:order-1">
            {/* Header */}
            <div className="bg-[#1B1B1B] text-white py-9 px-7 flex items-center space-x-2 shadow-md">
              <h2 className="text-5xl font-heading font-bold uppercase">INSTALLATION</h2>
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
            <div className="p-6">
              {installationServicesData.map((service) => (
                <ServiceDetailItem
                  key={service.id}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
          {/* Right Column: Image (No extra container, full height) - Always second on mobile */}
          <div className="flex justify-center lg:justify-end lg:order-2">
            <ResponsiveImage
              image={sectionImages.installation2}
              alt="Modern Glass Elevator Installation"
              className="w-full object-cover lg:h-[872px]"
              sizes="(max-width: 1023px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstallationService
