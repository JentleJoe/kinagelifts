const Services = () => {
  return (
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

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Installation Services */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                alt="Installation Services"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Installation Services</h3>
                <p className="text-gray-600 mb-4">
                  Professional installation of elevators and lifts with precision and attention to detail. Our experienced team ensures safe and efficient installation that meets all safety standards.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Complete project planning and design</li>
                  <li>• Professional installation team</li>
                  <li>• Quality assurance and testing</li>
                  <li>• Compliance with safety regulations</li>
                  <li>• Post-installation support</li>
                </ul>
              </div>
            </div>

            {/* Maintenance & Repair */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                alt="Maintenance & Repair"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Maintenance & Repair</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive maintenance and repair services to keep your elevators running smoothly. Our preventive maintenance programs help extend equipment life and reduce downtime.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Regular maintenance schedules</li>
                  <li>• 24/7 emergency repair services</li>
                  <li>• Genuine parts and components</li>
                  <li>• Skilled technicians</li>
                  <li>• Preventive maintenance programs</li>
                </ul>
              </div>
            </div>

            {/* Modernization */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                alt="Modernization"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Modernization</h3>
                <p className="text-gray-600 mb-4">
                  Upgrade your existing elevator systems with the latest technology and safety features. Our modernization services can improve performance, energy efficiency, and safety while extending the life of your equipment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Control system upgrades</li>
                    <li>• Safety system enhancements</li>
                    <li>• Energy-efficient motors</li>
                    <li>• Modern interior designs</li>
                  </ul>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Door system improvements</li>
                    <li>• Accessibility features</li>
                    <li>• Smart building integration</li>
                    <li>• Compliance with current codes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;