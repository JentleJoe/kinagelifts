import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import NavTooltip from "./NavTooltip"
import { navigationData } from "../data/navigationData"

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      const scrollThreshold = 100 // Start hiding after 100px of scroll
      
      if (currentScrollY < scrollThreshold) {
        // Always show navbar when near the top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        // Scrolling down - hide navbar
        setIsVisible(false)
        setIsMobileMenuOpen(false) // Close mobile menu when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  const handleMouseEnter = (index) => {
    setHoveredItem(index)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-20 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center mr-3">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6m0 6v6" />
                <path d="m21 12-6-3-6 3-6-3" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">KinageLifts</h3>
          </Link>
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
          <button onClick={toggleMobileMenu} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-black bg-opacity-20 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navigationData.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block px-3 py-2 text-white hover:text-gray-300 transition-colors font-medium"
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link 
              to="/contact" 
              className="block w-full border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition-colors font-medium text-center"
              onClick={closeMobileMenu}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
