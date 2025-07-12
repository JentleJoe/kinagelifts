import { useState } from "react"
import { Link } from "react-router-dom"
import NavTooltip from "./NavTooltip"
import { navigationData } from "../data/navigationData"

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  const handleMouseEnter = (index) => {
    setHoveredItem(index)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v6m0 6v6" />
              <path d="m21 12-6-3-6 3-6-3" />
            </svg>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationData.map((item, index) => (
            <NavTooltip
              key={item.label}
              title={item.title}
              description={item.description}
              isVisible={hoveredItem === index}
            >
              <Link
                to={item.href}
                className="text-white hover:text-gray-300 transition-colors font-medium relative py-2"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.label}
              </Link>
            </NavTooltip>
          ))}
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition-colors font-medium inline-block"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
