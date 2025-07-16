import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productsData } from '../data/productsData';

const ProductShowcase = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('elevators');
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  // Initialize category from URL params
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && productsData[categoryParam]) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  const categories = Object.keys(productsData);
  const currentCategory = productsData[activeCategory];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveSubcategory(null);
    // Update URL params
    setSearchParams({ category });
  };

  const handleSubcategoryClick = (subcategoryId) => {
    setActiveSubcategory(activeSubcategory === subcategoryId ? null : subcategoryId);
  };

  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Navigation */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1B1B1B] mb-8 text-center uppercase">
            Our Product Categories
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#1B1B1B] text-white shadow-lg'
                    : 'bg-gray-100 text-[#1B1B1B] hover:bg-gray-200'
                }`}
              >
                {productsData[category].category}
              </button>
            ))}
          </div>
        </div>

        {/* Category Overview */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#1B1B1B] mb-4 uppercase">
                {currentCategory.category}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {currentCategory.description}
              </p>
              <button
                onClick={scrollToContact}
                className="bg-[#1B1B1B] text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
              >
                <span>GET QUOTE FOR THIS CATEGORY</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
            <div className="relative">
              <img
                src={currentCategory.image}
                alt={currentCategory.category}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Subcategories */}
        <div className="space-y-8">
          {currentCategory.subcategories.map((subcategory) => (
            <div
              key={subcategory.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Subcategory Header */}
              <div
                className="bg-gray-50 p-6 cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSubcategoryClick(subcategory.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={subcategory.image}
                      alt={subcategory.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="text-xl font-heading font-bold text-[#1B1B1B] uppercase">
                        {subcategory.name}
                      </h4>
                      <p className="text-gray-600">{subcategory.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">
                      {subcategory.products.length} Products
                    </span>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        activeSubcategory === subcategory.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Products List */}
              {activeSubcategory === subcategory.id && (
                <div className="p-6 bg-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {subcategory.products.map((product, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                      >
                        <h5 className="text-lg font-bold text-[#1B1B1B] mb-2">
                          {product.name}
                        </h5>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <div className="space-y-2">
                          <h6 className="font-semibold text-[#1B1B1B] text-sm">Key Features:</h6>
                          <ul className="space-y-1">
                            {product.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={scrollToContact}
                          className="mt-4 w-full bg-[#1B1B1B] text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors text-sm font-semibold"
                        >
                          REQUEST QUOTE
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-[#1B1B1B] text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 uppercase">
            Ready to Purchase?
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your specific needs and receive a personalized quote for any of our products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/2348103664912"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 font-semibold hover:bg-green-600 transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>CHAT ON WHATSAPP</span>
            </a>
            <button
              onClick={scrollToContact}
              className="bg-white text-[#1B1B1B] px-6 py-3 font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <span>VIEW ALL CONTACTS</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
