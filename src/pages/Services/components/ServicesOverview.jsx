const ServicesOverview = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 uppercase text-[#1B1B1B]">
            Comprehensive Elevator Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            With 10 years of experience and direct partnerships with leading manufacturers 
            from Turkey, Japan, and China, we provide complete elevator and lift solutions 
            backed by our 1-year warranty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Key Benefit 1 */}
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#1B1B1B] text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#1B1B1B]">
              Quality Guaranteed
            </h3>
            <p className="text-gray-600">
              Direct factory access and international partnerships ensure premium quality 
              with competitive pricing and reliable performance.
            </p>
          </div>

          {/* Key Benefit 2 */}
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#1B1B1B] text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#1B1B1B]">
              Expert Installation
            </h3>
            <p className="text-gray-600">
              Professional installation services with skilled technicians ensuring 
              safety compliance and optimal performance from day one.
            </p>
          </div>

          {/* Key Benefit 3 */}
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-[#1B1B1B] text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75c0-.203-.006-.405-.018-.606M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 .33.015.658.045.982M12 2.25a9.75 9.75 0 016.697 2.697c.3.3.3.787 0 1.086L12 12.75l-6.697-6.697a.75.75 0 010-1.086A9.75 9.75 0 0112 2.25z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#1B1B1B]">
              Ongoing Support
            </h3>
            <p className="text-gray-600">
              Comprehensive maintenance services for all elevator brands with 
              1-year warranty coverage and responsive technical support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
