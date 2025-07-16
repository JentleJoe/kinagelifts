import { useState } from "react"

const ContactFormSection = () => {
  const [message, setMessage] = useState("")
  const maxChars = 200 // Increased from 40 for more realistic message length

  const handleMessageChange = (e) => {
    if (e.target.value.length <= maxChars) {
      setMessage(e.target.value)
    }
  }

  return (
    <>
      {/* Contact Form Header */}
      <section className="py-16 bg-[#1B1B1B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 uppercase">
            Get Your Free Quote Today
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Fill out the form below and our experts will get back to you within 24 hours with a personalized quote for your elevator or escalator project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Free consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>24-hour response</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>No obligation</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-16 bg-[#F9F9F9] flex justify-center items-center">
      <div className="w-full max-w-7xl bg-white shadow-lg grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column: Map */}
        <div className="relative h-[400px] lg:h-auto min-h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9090239000003!2d-0.1277583!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26967%3A0x2567d777ee2f7b0!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }} // Dark/grayscale style
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location on Google Maps"
          ></iframe>
          {/* Map Controls Overlay (Visual only, iframe handles actual interaction) */}
          <div className="absolute bottom-4 right-4 flex flex-col space-y-2 z-10">
            <button className="w-8 h-8 bg-black text-white flex items-center justify-center text-xl font-bold">
              +
            </button>
            <button className="w-8 h-8 bg-black text-white flex items-center justify-center text-xl font-bold">
              -
            </button>
          </div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-black text-white flex items-center justify-center text-xs z-10">
            <img
              src="/placeholder.svg?height=32&width=32&text=Map&bg=000000&color=ffffff"
              alt="Map thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Enquiry Form */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#1B1B1B] mb-8 uppercase">MAKE AN ENQUIRY</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[#1B1B1B] mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="w-full py-2 border-b border-gray-300 focus:border-[#1B1B1B] focus:outline-none text-[#1B1B1B] placeholder-gray-500 bg-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-[#1B1B1B] mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  className="w-full py-2 border-b border-gray-300 focus:border-[#1B1B1B] focus:outline-none text-[#1B1B1B] placeholder-gray-500 bg-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1B1B1B] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full py-2 border-b border-gray-300 focus:border-[#1B1B1B] focus:outline-none text-[#1B1B1B] placeholder-gray-500 bg-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1B1B1B] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="w-full py-2 border-b border-gray-300 focus:border-[#1B1B1B] focus:outline-none text-[#1B1B1B] placeholder-gray-500 bg-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#1B1B1B] mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                rows="4"
                value={message}
                onChange={handleMessageChange}
                className="w-full py-2 border-b border-gray-300 focus:border-[#1B1B1B] focus:outline-none text-[#1B1B1B] placeholder-gray-500 bg-transparent resize-none"
              ></textarea>
              <div className="text-right text-sm text-gray-500 mt-1">
                {message.length}/{maxChars}
              </div>
            </div>

            <button className="bg-[#1B1B1B] text-white px-8 py-4 font-semibold hover:bg-gray-700 transition-colors flex items-center space-x-3 group">
              <span>SEND NOW</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 20 16-16m-9 0h9m0 0v9"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactFormSection
