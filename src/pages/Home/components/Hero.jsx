const Hero = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat w-full"
      style={{
        backgroundImage:
          "url('/placeholder.svg?height=1080&width=1920&text=Dark+Industrial+Background&bg=1a1a1a&color=666')",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
        maxWidth: "100vw",
        width: "100vw",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              YOUR TRUSTED PARTNER IN <span className="block">PREMIUM STEEL SOLUTIONS</span>
            </h1>

            {/* Decorative Line */}
            <div className="w-16 h-1 bg-white mb-8"></div>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-12 max-w-2xl">
              With over 10 years of experience, KinageLifts delivers high-quality elevator and escalator solutions through direct partnerships with Turkish, Japanese, and Chinese manufacturers.
            </p>

            {/* CTA Button */}
            <button className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-3 group">
              <span>ENQUIRE NOW</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 20 16-16m-9 0h9m0 0v9"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
