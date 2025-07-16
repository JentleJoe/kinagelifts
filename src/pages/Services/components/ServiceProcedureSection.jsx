import { Link } from "react-router-dom";

const ServiceProcedureSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase text-[#1B1B1B]">
            How We Work With You
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            From your first inquiry to ongoing support, we're committed to delivering exceptional 
            elevator and lift solutions. Our streamlined process ensures you get the right solution 
            for your needs, on time and within budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="p-8 rounded-lg text-center bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#1B1B1B] text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#1B1B1B]">
              Discovery & Planning
            </h3>
            <p className="text-gray-600">
              We start with understanding your vision and requirements through detailed 
              consultation, ensuring every aspect of your project is carefully planned.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-8 rounded-lg text-center bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#1B1B1B] text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#1B1B1B]">
              Expert Installation
            </h3>
            <p className="text-gray-600">
              Our skilled technicians handle professional installation with precision, 
              ensuring your elevator or lift system meets all safety standards and performs flawlessly.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-8 rounded-lg text-center bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#1B1B1B] text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#1B1B1B]">
              Ongoing Support
            </h3>
            <p className="text-gray-600">
              We provide comprehensive maintenance and support services to keep your systems 
              running smoothly, backed by our 1-year warranty and expert technical team.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 md:p-12 rounded-lg text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 uppercase">
            Let's Build Your Solution
          </h3>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your space with premium elevator and lift solutions? 
            Let's discuss your project and create something exceptional together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-[#1B1B1B] px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors group"
          >
            Book Your Consultation
            <svg
              className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4 20 16-16m-9 0h9m0 0v9"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcedureSection;
