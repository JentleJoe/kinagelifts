import { MessageCircle, Phone, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { footerProducts, footerServices, footerMenu } from "../data/footerLinks"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1B1B1B] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex flex-col mb-4 lg:mb-10">
              {/* Logo */}
              <div className="w-8 h-8 flex items-center justify-center mr-2">
                <svg
                  className="w-full h-full text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6" />
                  <path d="m21 12-6-3-6 3-6-3" />
                </svg>
              </div>
            <h3 className="text-2xl font-bold">KinageLifts</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8">
              Experience vertical mobility excellence with KinageLifts. We specialize in elevator and escalator solutions, 
              from importation and installation to maintenance and modernization. Contact us for customized mobility systems 
              that enhance accessibility and convenience in modern infrastructures.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-gray-300">
            <a href="https://wa.me/2348119051471" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>+234 811 905 1471</span>
            </a>
            <a href="tel:+2348103664912" className="flex items-center space-x-2 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              <span>+234 810 366 4912</span>
            </a>
            <a
              href="mailto:kinagelifts@gmail.com"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>kinagelifts@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Newsletter & Navigation Links */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Newsletter */}
          <div className="md:col-span-3">
            <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-gray-300 leading-relaxed text-sm mb-6">
              Stay updated with the latest elevator and escalator solutions, maintenance tips, and industry news. Subscribe to our newsletter for exclusive updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-grow bg-[#2A2A2A] text-white py-3 px-4 focus:outline-none border border-gray-700 focus:border-white transition-colors placeholder-gray-500"
              />
              <button className="bg-white text-[#1B1B1B] w-12 h-auto flex items-center justify-center hover:bg-gray-200 transition-colors group">
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 20 16-16m-9 0h9m0 0v9"></path>
                </svg>
              </button>
            </form>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerProducts.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Menu</h4>
            <ul className="space-y-3">
              {footerMenu.map((item) => (
                <li key={item.label}>
                  <Link to={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-gray-800 mt-12 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="flex items-center space-x-1 mb-4 md:mb-0">
              <span className="text-gray-400 transition-colors duration-300 font-medium">Built by</span>
              
              {/* Make the entire animation container clickable */}
              <a 
                href="https://peakbrand.agency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative float-animation cursor-pointer inline-block"
              >
                {/* Animated background glow with rainbow effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse rainbow-filter"></div>
                
                {/* Multiple floating sparkles with different animations */}
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100" style={{animation: 'sparkle-bounce 2s infinite 0.1s'}}></div>
                <div className="absolute -top-3 right-3 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-300" style={{animation: 'sparkle-bounce 2s infinite 0.3s'}}></div>
                <div className="absolute -bottom-2 left-5 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-500" style={{animation: 'sparkle-bounce 2s infinite 0.5s'}}></div>
                <div className="absolute -bottom-3 -right-2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-700" style={{animation: 'sparkle-bounce 2s infinite 0.7s'}}></div>
                <div className="absolute top-1 right-8 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200" style={{animation: 'sparkle-bounce 2s infinite 0.2s'}}></div>
                <div className="absolute bottom-1 left-12 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-600" style={{animation: 'sparkle-bounce 2s infinite 0.6s'}}></div>
                
                {/* Main content with enhanced styling */}
                <div className="relative flex items-center space-x-2 px-4 py-3 rounded-xl border border-transparent group-hover:border-white/30 transition-all duration-500 group-hover:bg-white/10 group-hover:backdrop-blur-sm heartbeat-animation">
                  <div className="relative overflow-hidden text-white font-bold text-lg hover:text-transparent bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 transition-all duration-500 flex items-center space-x-2 glow-text">
                    {/* Multiple sliding underlines for depth */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                    <span className="absolute bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-right delay-200"></span>
                    
                    {/* Enhanced text with individual character animations */}
                    <span className="relative shimmer-text">
                      {"peakbrand.agency".split("").map((char, index) => (
                        <span 
                          key={index}
                          className="inline-block group-hover:animate-bounce transition-all duration-300 wiggle"
                          style={{ 
                            animationDelay: `${index * 80}ms`,
                            animationDuration: '0.8s',
                            transformOrigin: 'center bottom'
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                    
                    {/* Enhanced arrow with multiple effects */}
                    <svg 
                      className="w-5 h-5 transform transition-all duration-700 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-45 group-hover:scale-125 rainbow-filter" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2.5" 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        className="group-hover:animate-pulse"
                      />
                    </svg>
                    
                    {/* Enhanced shooting star effect */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                      <div className="absolute top-1/2 -left-full w-6 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-y-1/2 rotate-45 group-hover:left-full transition-all duration-1200 ease-out"></div>
                      <div className="absolute top-1/3 -left-full w-4 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent transform -translate-y-1/2 rotate-45 group-hover:left-full transition-all duration-1400 ease-out delay-100"></div>
                    </div>
                  </div>
                  
                  {/* Enhanced magic elements */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ml-2 flex items-center space-x-1">
                    <svg className="w-5 h-5 text-yellow-400 animate-spin" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.5 5.6L10 7L8.6 4.5L10 2L7.5 3.4L5 2L6.4 4.5L5 7L7.5 5.6ZM19.5 15.4L22 14L20.6 16.5L22 19L19.5 17.6L17 19L18.4 16.5L17 14L19.5 15.4ZM22 2L20.6 4.5L22 7L19.5 5.6L17 7L18.4 4.5L17 2L19.5 3.4L22 2ZM13.34 12.78L15.78 10.34L13.66 8.22L11.22 10.66L13.34 12.78ZM14.37 7.29L16.71 9.63C17.1 10.02 17.1 10.65 16.71 11.04L11.04 16.71C10.65 17.1 10.02 17.1 9.63 16.71L7.29 14.37C6.9 13.98 6.9 13.35 7.29 12.96L12.96 7.29C13.35 6.9 13.98 6.9 14.37 7.29Z"/>
                    </svg>
                    <span className="text-xs text-yellow-400 animate-pulse font-bold">✨</span>
                  </div>
                </div>
                
                {/* Multiple pulsing ring effects */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 group-hover:animate-ping border-2 border-white pointer-events-none"></div>
                <div className="absolute inset-1 rounded-xl opacity-0 group-hover:opacity-30 group-hover:animate-ping border border-blue-400 delay-150 pointer-events-none"></div>
                <div className="absolute inset-2 rounded-xl opacity-0 group-hover:opacity-20 group-hover:animate-ping border border-purple-400 delay-300 pointer-events-none"></div>
              </a>
            </div>
            <p className="transition-all duration-300 hover:text-white">&copy; {currentYear} KinageLifts. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
