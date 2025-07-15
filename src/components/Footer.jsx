import { MessageCircle, Phone, Mail } from "lucide-react"
import { footerProducts, footerMenu } from "../data/footerLinks"

const Footer = () => {
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
              Experience industrial excellence with IAL. Our precision-engineered tapes elevate performance across diverse
              sectors. Contact us for customized solutions and join the journey of sealing success with IAL.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-gray-300">
            <a href="tel:12001544864" className="flex items-center space-x-2 hover:text-white transition-colors">
              <MessageCircle className="w-5 h-5" />
              <span>1200 154 4864</span>
            </a>
            <a href="tel:48122638745" className="flex items-center space-x-2 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              <span>4812 263 8745</span>
            </a>
            <a
              href="mailto:apexsteel@gmail.com"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>apexsteel@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Newsletter & Navigation Links */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Newsletter */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-gray-300 leading-relaxed text-sm mb-6">
              Join our community and be part of the journey toward sustainable luxury living. Fill out the form below to
              subscribe
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
                  <a href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </a>
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
                  <a href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
