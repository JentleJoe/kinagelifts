const NavTooltip = ({ children, title, description, isVisible }) => {
  return (
    <div className="relative">
      {children}
      {isVisible && (
        <div className="fixed top-[90px] left-0 right-0 z-40 bg-[#F9F9F9] py-12 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-end">
            {/* Left Column: Title */}
            <div className="w-[45%] pr-8">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#1B1B1B] leading-tight uppercase">{title}</h2>
            </div>

            {/* Right Column: Description */}
            <div className="w-1/2 pl-8">
              <p className="text-md text-[#1B1B1B] leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavTooltip
