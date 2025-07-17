import { Link } from 'react-router-dom';
import Hero from './components/Hero';
import ProductServiceSection from './components/ProductsServiceSection';
import Achievements from './components/Achievements';
import CustomerReviews from './components/CustomerReviews';
import FAQSection from './components/FAQSection';
import WhyChooseUs from './components/WhyChooseUs';
import ContactFormSection from '../../components/ContactFormSection';
import FloatingCTA from '../../components/FloatingCTA';

// Import local assets
import movingWalkway from '../../assets/movingWalkway.png';
import stairlift from '../../assets/stairlift.png';
import elevator from '../../assets/elevator.png';
import freightElevator from '../../assets/freightElevator.png';
import escalator from '../../assets/escalator.png';
import dumbwaiters from '../../assets/dumbwaiters.png';
import maintenance from '../../assets/maintenance.png';
import maintenance2 from '../../assets/maintenance2.png';
import installation from '../../assets/installation.png';
import modernization from '../../assets/modernization.png';
import installation2 from '../../assets/installation2.png';

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
      image: elevator,
      link: "/products?category=elevators"
    },
    {
      id: 2,
      title: "Freight Elevators",
      image: freightElevator,
      link: "/products?category=elevators"
    },
    {
      id: 3,
      title: "Escalators",
      image: escalator,
      link: "/products?category=escalators"
    },
    {
      id: 4,
      title: "Dumbwaiters",
      image: dumbwaiters,
      link: "/products?category=specialized"
    },
    {
      id: 5,
      title: "Moving Walkways",
      image: movingWalkway,
      link: "/products?category=escalators"
    },
    {
      id: 6,
      title: "Stairlifts",
      image: stairlift,
      link: "/products?category=specialized"
    }
  ];

  const servicesData = [
    {
      id: 1,
      title: "Installation Services",
      image: installation,
      link: "/services"
    },
    {
      id: 2,
      title: "Maintenance & Repair",
      image: maintenance2,
      link: "/services"
    },
    {
      id: 3,
      title: "Modernization",
      image: modernization,
      link: "/services"
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
      
      {/* View All Products CTA */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            to="/products" 
            className="inline-flex items-center space-x-2 text-[#1B1B1B] hover:text-gray-600 transition-colors font-semibold text-lg"
          >
            <span>View All Products</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </Link>
        </div>
      </section>
      
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
            <a href="tel:+2348103664912" className="border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-[#1B1B1B] transition-colors flex items-center space-x-3">
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
              <Link to="/services" className="text-[#1B1B1B] hover:text-gray-600 transition-colors font-semibold flex items-center space-x-2">
                <span>View All Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Achievements statsImage={maintenance} />

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
      <FAQSection faqImage={installation2} />
      <WhyChooseUs />
      
      {/* Final CTA Section before Contact */}
      <section className="py-16 bg-[#1B1B1B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 uppercase">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote. Choose WhatsApp for instant response or call us directly to discuss your elevator and escalator needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/2348119051471" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 font-semibold hover:bg-green-600 transition-colors flex items-center space-x-3 group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>CHAT ON WHATSAPP</span>
            </a>
            <button 
              onClick={scrollToContact}
              className="bg-white text-[#1B1B1B] px-8 py-4 font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-3 group"
            >
              <span>VIEW ALL CONTACT OPTIONS</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
      
      <ContactFormSection />
      <FloatingCTA />
    </>
  );
};

export default Home;
