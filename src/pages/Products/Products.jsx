const Products = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 uppercase">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive elevator and lift solutions for every need
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Passenger Elevators */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                alt="Passenger Elevators"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Passenger Elevators</h3>
                <p className="text-gray-600 mb-4">
                  Modern, efficient passenger elevators designed for comfort and safety in residential and commercial buildings.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Smooth operation and quiet performance</li>
                  <li>• Energy-efficient technology</li>
                  <li>• Customizable interior designs</li>
                  <li>• Advanced safety features</li>
                </ul>
              </div>
            </div>

            {/* Freight Elevators */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                alt="Freight Elevators"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Freight Elevators</h3>
                <p className="text-gray-600 mb-4">
                  Heavy-duty freight elevators built to handle substantial loads with reliability and durability.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• High load capacity</li>
                  <li>• Robust construction</li>
                  <li>• Industrial-grade components</li>
                  <li>• Minimal maintenance requirements</li>
                </ul>
              </div>
            </div>

            {/* Escalators */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                alt="Escalators"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Escalators</h3>
                <p className="text-gray-600 mb-4">
                  Premium escalators designed for high-traffic areas with smooth operation and modern aesthetics.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• High passenger capacity</li>
                  <li>• Energy-efficient motors</li>
                  <li>• Safety sensors and features</li>
                  <li>• Sleek design options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;