import Hero from './components/Hero';
import ProductServiceSection from './components/ProductsServiceSection';
import Achievements from './components/Achievements';
import CustomerReviews from './components/CustomerReviews';
import FAQSection from './components/FAQSection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactFormSection from '../../components/ContactFormSection';
import FloatingCTA from '../../components/FloatingCTA';

const Home = () => {
  // Function to scroll to contact form
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Sample data for elevators/lifts
  const productsData = [
    {
      id: 1,
      title: "Passenger Elevators",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      link: "/products/passenger-elevators"
    },
    {
      id: 2,
      title: "Freight Elevators",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      link: "/products/freight-elevators"
    },
    {
      id: 3,
      title: "Escalators",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      link: "/products/escalators"
    },
    {
      id: 4,
      title: "Dumbwaiters",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      link: "/products/dumbwaiters"
    }
  ];

  const servicesData = [
    {
      id: 1,
      title: "Installation Services",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      link: "/services/installation"
    },
    {
      id: 2,
      title: "Maintenance & Repair",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      link: "/services/maintenance"
    },
    {
      id: 3,
      title: "Modernization",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      link: "/services/modernization"
    }
  ];

  return (
    <>
      <Hero />
      
      <ProductServiceSection 
        title="Our Products" 
        items={productsData} 
        showNavigation={true} 
      />
      
      {/* CTA Section after Products */}
      <section className="py-16 bg-[#1B1B1B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 uppercase">
            Ready to Transform Your Building?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your elevator or escalator project. Our experts are ready to help you choose the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-[#1B1B1B] px-8 py-4 font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-3 group"
            >
              <span>GET FREE QUOTE</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
            <a href="tel:+1234567890" className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-[#1B1B1B] transition-colors flex items-center space-x-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>CALL NOW</span>
            </a>
          </div>
        </div>
      </section>
      
      <ProductServiceSection 
        title="Our Services" 
        items={servicesData} 
        showNavigation={true} 
      />
      
      {/* Subtle CTA Section after Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-[#1B1B1B] uppercase">
              Need Professional Installation or Maintenance?
            </h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Our certified technicians provide complete installation and ongoing maintenance services to keep your elevators and escalators running smoothly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button 
                onClick={scrollToContact}
                className="bg-[#1B1B1B] text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2 group"
              >
                <span>LEARN MORE</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              <a href="/services" className="text-[#1B1B1B] hover:text-gray-600 transition-colors font-semibold flex items-center space-x-2">
                <span>View All Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Achievements />
      
      {/* CTA Section after Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-[#1B1B1B] uppercase">
              Join 500+ Satisfied Customers
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the KinageLifts difference with our 1-year warranty and 10+ years of industry expertise. Schedule your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={scrollToContact}
                className="bg-[#1B1B1B] text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-3 group"
              >
                <span>SCHEDULE CONSULTATION</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </button>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Free consultation</span> • <span className="font-semibold">No obligation</span> • <span className="font-semibold">Expert advice</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CustomerReviews />
      <FAQSection />
      <WhyChooseUs />
      
      {/* Final CTA Section before Contact */}
      <section className="py-16 bg-[#1B1B1B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 uppercase">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote and let us help you find the perfect elevator or escalator solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-[#1B1B1B] px-8 py-4 font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-3 group"
            >
              <span>GET INSTANT QUOTE</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </button>
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Free estimates</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>1-year warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Expert support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ContactFormSection />
      <FloatingCTA />
    </>
  );
};

export default Home;
