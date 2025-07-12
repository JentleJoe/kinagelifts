import Hero from './components/Hero';
import ProductServiceSection from './components/ProductsServiceSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import CustomerReviews from './components/CustomerReviews';
import FAQSection from './components/FAQSection';
import WhyChooseUs from './components/WhyChooseUs';

const Home = () => {
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
      <ProductServiceSection 
        title="Our Services" 
        items={servicesData} 
        showNavigation={true} 
      />
      <Achievements />
      <CustomerReviews />
      <FAQSection />
      <WhyChooseUs />
      <Services />
      <Testimonials />
    </>
  );
};

export default Home;
