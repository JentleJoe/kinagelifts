import Features from "./components/Features";
import ContactFormSection from "../../components/ContactFormSection";

const Products = () => {
  return (
    <div className="min-h-screen ">
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

      {/* Products Features */}    
      <Features />
      {/* Contact Form */}
      <ContactFormSection />
    </div>
  );
};

export default Products;