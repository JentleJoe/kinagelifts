const ContactFormSection = () => {
  return (
    <>
      {/* Contact Form Header */}
      <section className="py-16 bg-[#1B1B1B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 uppercase">
            Get In Touch With Us Today
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Ready to discuss your elevator or escalator project? Choose your preferred way to reach us and get expert advice within minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Instant response</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Expert consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Free estimates</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-8 sm:py-12 lg:py-16 bg-[#F9F9F9] flex justify-center items-center">
      <div className="w-full max-w-7xl mx-4 sm:mx-6 lg:mx-8 bg-white shadow-lg grid grid-cols-1 lg:grid-cols-2 rounded-lg lg:rounded-none overflow-hidden">
        {/* Left Column: Map */}
        <div className="relative h-[400px] lg:h-auto min-h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4496068814456!2d7.424853173838958!3d9.020715588778598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a4f5c3b5f3b%3A0x1234567890abcdef!2sEfab%20Estate%202%20Lifecamp%20Gwarimpa%20District%2C%20Zuba%20Garki%20Rd%2C%20Abuja%20900108%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KinageLifts Location - Efab Estate 2 Lifecamp Gwarimpa District, Abuja"
          ></iframe>
        </div>

        {/* Right Column: Contact Options */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-[#1B1B1B] mb-2 uppercase">Contact Us</h2>
          <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">Choose your preferred way to reach us</p>
          
          <div className="space-y-6">
            {/* WhatsApp Option */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 hover:bg-gray-100 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-700 text-white p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">WhatsApp</h3>
                    <p className="text-sm sm:text-base text-gray-600">Get instant response</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 sm:text-right">
                  <a 
                    href="https://wa.me/2348103664912" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors font-semibold text-sm text-center sm:text-left"
                  >
                    +234 810 366 4912
                  </a>
                  <a 
                    href="https://wa.me/2347067285046" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors font-semibold text-sm text-center sm:text-left"
                  >
                    +234 706 728 5046
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Call Option */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 hover:bg-gray-100 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-700 text-white p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">Phone Call</h3>
                    <p className="text-sm sm:text-base text-gray-600">Direct conversation</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 sm:text-right">
                  <a 
                    href="tel:+2348103664912" 
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors font-semibold text-sm text-center sm:text-left"
                  >
                    +234 810 366 4912
                  </a>
                  <a 
                    href="tel:+2347067285046" 
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors font-semibold text-sm text-center sm:text-left"
                  >
                    +234 706 728 5046
                  </a>
                </div>
              </div>
            </div>

            {/* Email Option */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-6 hover:bg-gray-100 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="bg-gray-700 text-white p-3 rounded-full flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">Email</h3>
                    <p className="text-sm sm:text-base text-gray-600">Send detailed inquiry</p>
                  </div>
                </div>
                <div className="flex flex-col sm:text-right">
                  <a 
                    href="mailto:kinagelifts@gmail.com" 
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors font-semibold text-sm text-center sm:text-left break-all"
                  >
                    kinagelifts@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Business Address */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">Visit Our Office</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Efab Estate 2 Lifecamp Gwarimpa District<br />
              Zuba Garki Rd, Abuja 900108<br />
              Federal Capital Territory, Nigeria
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactFormSection
