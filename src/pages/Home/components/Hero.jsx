import { useState, useEffect } from "react"
import escalatorImg from '../../../assets/escalator.png';
import webmVideo from '../../../assets/herovideo.webm';
import mp4Video from '../../../assets/herovideo.mp4';

const phrases = [
  "ELEVATOR SOLUTIONS",
  "ESCALATOR SYSTEMS", 
  "VERTICAL MOBILITY"
]

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const currentPhrase = phrases[currentIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = isDeleting ? 500 : 2000

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentPhrase) {
        // Pause at end of phrase
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && displayedText === "") {
        // Move to next phrase
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % phrases.length)
      } else {
        // Type or delete character
        setDisplayedText((prev) => {
          if (isDeleting) {
            return prev.slice(0, -1)
          } else {
            return currentPhrase.slice(0, prev.length + 1)
          }
        })
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayedText, currentIndex, isDeleting])

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster={escalatorImg}
        aria-label="Elevator and escalator video background"
      >
        <source src={webmVideo} type="video/webm" />
        <source src={mp4Video} type="video/mp4" />
      </video>
      {/* Fallback image for browsers that do not support video */}
      <img
        src={escalatorImg}
        alt="Escalator placeholder"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ display: 'none' }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Main Headline with Typing Effect */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              YOUR TRUSTED PARTNER IN{" "}
              <span className="block">
                {displayedText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
              </span>
            </h1>

            {/* Decorative Line with Animation */}
            <div className="w-16 h-1 bg-white mb-8 animate-pulse"></div>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-12 max-w-2xl">
              With over 10 years of experience, KinageLifts delivers high-quality elevator and escalator solutions through direct partnerships with Turkish, Japanese, and Chinese manufacturers.
            </p>

            {/* Enhanced CTA Button */}
            <button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-black px-8 py-4 font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-3 group hover:shadow-lg transform hover:scale-105"
            >
              <span>ENQUIRE NOW</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
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

      {/* Custom CSS for fade-in animation */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out 1s forwards;
        }
      `}</style>
    </div>
  )
}

export default Hero
