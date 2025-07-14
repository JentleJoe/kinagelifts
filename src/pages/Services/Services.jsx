import InstallationService from "./components/InstallationService";
import MaintenanceService from "./components/MaintenanceService";
import AllServicesSection from "./components/AllServicesSection";

const Services = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 uppercase">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Complete elevator and lift services from installation to maintenance
              </p>
            </div>
          </div>
        </section>
      <InstallationService />
      <MaintenanceService />
      <AllServicesSection />
      </div>
    </>
  );
};

export default Services;