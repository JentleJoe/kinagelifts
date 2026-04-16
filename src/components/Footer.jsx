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
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-white text-[#1B1B1B] w-12 h-auto flex items-center justify-center hover:bg-gray-200 transition-colors group"
              >
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
                href="https://joshuaoseghale.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative cursor-pointer inline-block px-2 py-1"
                style={{ transition: 'color 0.3s' }}
              >
                <span className="relative font-bold text-white text-sm group-hover:text-blue-400 transition-colors duration-300">
                  Joshua Oseghale
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
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
