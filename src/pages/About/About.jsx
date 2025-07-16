import FloatingCTA from "../../components/FloatingCTA";

const About = () => {
  return (
    <>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 uppercase">
              About KinageLifts
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Your trusted partner in premium vertical transportation solutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900 uppercase">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed">
                  With 10 years of dedicated experience in the elevator and lift industry, KinageLifts has established itself as a trusted provider of premium vertical transportation solutions. Our success is built on strong partnerships with leading manufacturers from Turkey, Japan, and China, giving us direct access to quality equipment and ensuring swift resolution of any technical issues.
                </p>
                <p className="text-lg leading-relaxed">
                  We specialize in the complete lifecycle of elevator solutions - from importation and distribution to professional installation and ongoing maintenance. Our comprehensive services cover elevators, escalators, moving walkways, dumb waiters, and chair lifts for residential, commercial, and industrial applications.
                </p>
                <p className="text-lg leading-relaxed">
                  What truly sets KinageLifts apart is our unwavering commitment to customer satisfaction. We provide comprehensive maintenance services for all elevator brands, not just our own installations. Our 1-year installation warranty demonstrates our confidence in our workmanship - if any equipment fault occurs within the first year, we provide free repairs at no additional cost.
                </p>
                <p className="text-lg leading-relaxed">
                  Our direct factory partnerships enable us to offer competitive pricing without compromising on quality, while our experienced technical team ensures every installation meets the highest safety standards and performance requirements.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="lg:order-first">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern elevator installation"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-[#1B1B1B] uppercase">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that drive our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="p-8 rounded-lg bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-[#1B1B1B] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1B1B1B]">Premium Quality</h3>
              <p className="text-gray-600">
                Direct partnerships with top manufacturers from Turkey, Japan, and China ensure we deliver only the highest quality elevator and lift solutions.
              </p>
            </div>

            {/* Safety */}
            <div className="p-8 rounded-lg bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-[#1B1B1B] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1B1B1B]">Safety Excellence</h3>
              <p className="text-gray-600">
                Every installation and maintenance service prioritizes safety, ensuring all systems meet international safety standards and regulations.
              </p>
            </div>

            {/* Service */}
            <div className="p-8 rounded-lg bg-white shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-[#1B1B1B] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#1B1B1B]">Comprehensive Service</h3>
              <p className="text-gray-600">
                From consultation and installation to ongoing maintenance and support, we provide complete lifecycle services for all elevator brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-[#1B1B1B] uppercase">
              Why Choose KinageLifts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our proven track record and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1B1B1B] mb-2">10+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1B1B1B] mb-2">3</div>
              <div className="text-gray-600">International Partnerships</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1B1B1B] mb-2">1 Year</div>
              <div className="text-gray-600">Installation Warranty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#1B1B1B] mb-2">24/7</div>
              <div className="text-gray-600">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 uppercase">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your elevator and lift requirements. Our expert team is ready to provide you with a comprehensive solution tailored to your needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-[#1B1B1B] px-8 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors group"
          >
            Get Your Free Consultation
            <svg
              className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4 20 16-16m-9 0h9m0 0v9"></path>
            </svg>
          </a>
        </div>
      </section>
      </div>
      <FloatingCTA />
    </>
  );
};

export default About;
