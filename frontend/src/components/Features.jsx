import React, { useRef, useEffect, useState, useCallback } from 'react';

// Defining the features array outside the component to prevent re-creation on render
const featuresData = [
  {
    title: "Global Payout",
    subtitle: "Send Crypto, Receive Local Currency",
    description: "Experience hassle-free sending. Every transaction is protected, every recipient just moments away, facilitating seamless cross-border transfers.",
    phoneImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop"
  },
  {
    title: "Multi-Currency Wallet", 
    subtitle: "Bridging Crypto and Everyday Life",
    description: "Instantly switch between Crypto and Local Currency. Jump straight into action and access your funds easily and securely from a single interface.",
    phoneImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=800&fit=crop"
  },
  {
    title: "Credit & Collateral",
    subtitle: "Unlock Your Financial Power", 
    description: "Access instant funds using your crypto as collateral, with flexible repayment options and zero traditional credit checks. Fast, private, and efficient.",
    phoneImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=800&fit=crop"
  },
  {
    title: "Stake & Earn",
    subtitle: "Grow Your Assets, Effortlessly",
    description: "Put your crypto to work with daily rewards. Our secure staking platform allows you to passively grow your portfolio with competitive APYs.",
    phoneImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop"
  },
  {
    title: "Swap & Convert",
    subtitle: "Zero-Friction Crypto Conversions",
    description: "Convert your assets or move funds in and out on the go, with competitive, transparent rates and minimal friction. Instant execution guaranteed.",
    phoneImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=800&fit=crop"
  },
  {
    title: "P2P Marketplace",
    subtitle: "Peer-to-Peer, Powered By Security", 
    description: "Connect directly with others to trade stablecoins and local currency. Enjoy secure, low-cost peer-to-peer trading with real-time settlement and escrow protection.",
    phoneImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=800&fit=crop"
  }
];

const ACCENT_RED = '#D00000'; // Deep Crimson for a professional feel
const LIGHT_RED = '#FFDEDE'; // Light red for hover background/highlights

const ScrollPhoneAnimation = () => {
  const sectionRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isInSection, setIsInSection] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  // Smooth scroll to section
  const scrollToSection = useCallback((index) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    // Determine direction for animation purposes
    setScrollDirection(index > activeSection ? 'down' : 'up');
    setActiveSection(index);

    // Timeout to re-enable scrolling after CSS transition completes
    setTimeout(() => {
      setIsScrolling(false);
    }, 700); // Matches animation duration
  }, [activeSection, isScrolling]);

  // Handle wheel scroll
  const handleWheel = useCallback((e) => {
    if (!isInSection || isScrolling) return;

    e.preventDefault();
    
    const delta = Math.sign(e.deltaY);
    
    if (delta > 0) {
      // Scroll down
      if (activeSection < featuresData.length - 1) {
        scrollToSection(activeSection + 1);
      } else {
        // Allow natural scroll out of the section
        setIsScrolling(true);
        setTimeout(() => {
          setIsInSection(false);
          setIsScrolling(false);
        }, 300);
      }
    } else {
      // Scroll up
      if (activeSection > 0) {
        scrollToSection(activeSection - 1);
      } else {
        // Allow natural scroll out of the section
        setIsScrolling(true);
        setTimeout(() => {
          setIsInSection(false);
          setIsScrolling(false);
        }, 300);
      }
    }
  }, [isInSection, isScrolling, activeSection, scrollToSection]);

  // Handle keyboard navigation (Arrows and 1-6 keys)
  const handleKeyDown = useCallback((e) => {
    if (!isInSection || isScrolling) return;

    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      if (activeSection < featuresData.length - 1) {
        scrollToSection(activeSection + 1);
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      if (activeSection > 0) {
        scrollToSection(activeSection - 1);
      }
    } else if (e.key >= '1' && e.key <= featuresData.length.toString()) {
      e.preventDefault();
      const sectionIndex = parseInt(e.key) - 1;
      scrollToSection(sectionIndex);
    }
  }, [isInSection, isScrolling, activeSection, scrollToSection]);

  // Check if section is in view (using a simple bounding box check)
  const checkSectionPosition = useCallback(() => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight * 0.7 && rect.bottom >= window.innerHeight * 0.3;
    
    if (isVisible && !isInSection) {
      setIsInSection(true);
      // Reset to first section when entering
      setActiveSection(0); 
    } else if (!isVisible && isInSection) {
      setIsInSection(false);
    }
  }, [isInSection]);

  // Touch handling for mobile (swiping)
  const [touchStart, setTouchStart] = useState(0);
  
  const handleTouchStart = useCallback((e) => {
    if (!isInSection) return;
    setTouchStart(e.touches[0].clientY);
  }, [isInSection]);

  const handleTouchMove = useCallback((e) => {
    if (!isInSection || isScrolling) return;
    
    const touchEnd = e.touches[0].clientY;
    const diff = touchStart - touchEnd;

    // Minimum swipe distance threshold
    if (Math.abs(diff) > 50) { 
      e.preventDefault(); // Prevent standard page scroll within the section
      if (diff > 0) { // Swipe up = Scroll Down
        if (activeSection < featuresData.length - 1) {
          scrollToSection(activeSection + 1);
        }
      } else { // Swipe down = Scroll Up
        if (activeSection > 0) {
          scrollToSection(activeSection - 1);
        }
      }
      setTouchStart(touchEnd); // Reset touch start position
    }
  }, [isInSection, isScrolling, touchStart, activeSection, scrollToSection]);

  // Effect for setting up event listeners
  useEffect(() => {
    const currentSection = sectionRef.current;
    
    window.addEventListener('scroll', checkSectionPosition, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    
    // Add scroll/touch listeners only to the section when present
    if (currentSection) {
      currentSection.addEventListener('wheel', handleWheel, { passive: false });
      currentSection.addEventListener('touchstart', handleTouchStart, { passive: true });
      currentSection.addEventListener('touchmove', handleTouchMove, { passive: false });
    }
    
    checkSectionPosition(); // Initial check

    return () => {
      window.removeEventListener('scroll', checkSectionPosition);
      window.removeEventListener('keydown', handleKeyDown);
      
      if (currentSection) {
        currentSection.removeEventListener('wheel', handleWheel);
        currentSection.removeEventListener('touchstart', handleTouchStart);
        currentSection.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [checkSectionPosition, handleKeyDown, handleWheel, handleTouchStart, handleTouchMove]);

  return (
    <section 
      ref={sectionRef}
      // Clean white background for a professional look
      className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center font-inter"
    >
      {/* Subtle background element (optional noise/gradient) */}
      <div className="absolute inset-0 opacity-10">
          {/* Subtle gradient from center for depth */}
          <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-color-gray-50)_0%,_var(--tw-color-white)_50%)] transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl min-h-screen mx-auto items-center relative z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Left Side - Content */}
        <div className="py-12 flex flex-col justify-center relative">
          <div 
            key={activeSection}
            // Transition using opacity and subtle Y-shift for smoothness
            className={`max-w-xl transition-all duration-700 ease-in-out ${
              isScrolling ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="text-xs sm:text-sm font-semibold text-gray-500 mb-4 tracking-widest uppercase">
              FEATURE 0{activeSection + 1} / 0{featuresData.length}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              {featuresData[activeSection].title}
            </h2>
            {/* Subtitle uses the red accent */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium" style={{ color: ACCENT_RED }}>
              {featuresData[activeSection].subtitle}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-md mt-4">
              {featuresData[activeSection].description}
            </p>
            <button 
              className="group text-white border-none px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex items-center gap-3"
              style={{ backgroundColor: ACCENT_RED, boxShadow: `0 15px 30px -10px ${ACCENT_RED}55` }}
            >
              Get Started Now
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12H19M19 12L12 5M19 12L12 19"/>
              </svg>
            </button>
          </div>

          {/* Modern Pager/Section Indicator */}
          <div className="absolute left-8 lg:left-16 bottom-10 flex items-center gap-6">
            <div className="flex gap-2">
              {featuresData.map((_, index) => (
                <div 
                  key={index}
                  className={`h-1 rounded-full cursor-pointer transition-all duration-500 ${
                    index === activeSection 
                      // Active: wider, red accent
                      ? 'bg-red-700 w-8' 
                      // Inactive: narrow, gray
                      : 'bg-gray-300 hover:bg-gray-400 w-2'
                  }`}
                  style={{ backgroundColor: index === activeSection ? ACCENT_RED : undefined }}
                  onClick={() => scrollToSection(index)}
                />
              ))}
            </div>
            <div className="text-sm text-gray-500 font-medium select-none">
              {activeSection + 1} / {featuresData.length}
            </div>
          </div>
        </div>

        {/* Right Side - Clean Phone Display */}
        <div className="flex items-center justify-center h-full p-8">
          <div className="relative w-72 lg:w-80 h-[600px]">
            <div className="relative w-full h-full">
              {/* Phone Shell: Cleaner drop shadow, no rotation */}
              <img 
                src="https://staticsource1.redotpay.com/web/img/home/v3/phone-shell.webp?t=1763006556389"
                alt="Phone"
                className="w-full h-full object-contain drop-shadow-2xl relative z-10"
                style={{ filter: `drop-shadow(0 25px 25px ${ACCENT_RED}1A)` }} // Subtle red drop shadow
              />
              
              {/* Phone Screen with subtle image transition */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[88%] h-[95%] rounded-[40px] overflow-hidden z-0 bg-black">
                <img
                  key={featuresData[activeSection].phoneImage} // Key forces remount/animation
                  src={featuresData[activeSection].phoneImage}
                  alt={featuresData[activeSection].title}
                  // Apply custom animation class based on scroll direction
                  className={`w-full h-full object-cover transition-none ${
                    scrollDirection === 'down' 
                      ? 'animate-phone-slide-up' 
                      : scrollDirection === 'up'
                      ? 'animate-phone-slide-down'
                      : 'animate-phone-fade-in' // Default state when entering section
                  }`}
                />
                {/* Subtle bottom label on the screen */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <span className="text-white text-lg font-bold">
                        {featuresData[activeSection].title}
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Progress Bar at the bottom (optional but good for long sections) */}
      {isInSection && (
        <div className="absolute bottom-0 left-0 w-full h-1 z-20" style={{ backgroundColor: LIGHT_RED }}>
          <div 
            className="h-full transition-all duration-500 ease-out"
            style={{ 
              width: `${((activeSection + 1) / featuresData.length) * 100}%`,
              backgroundColor: ACCENT_RED
            }}
          ></div>
        </div>
      )}

      {/* Custom, professional animations */}
      <style jsx>{`
        @keyframes phoneFadeIn {
            from { opacity: 0.8; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes phoneSlideUp {
          from { opacity: 0; transform: translateY(15%); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes phoneSlideDown {
          from { opacity: 0; transform: translateY(-15%); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-phone-fade-in {
            animation: phoneFadeIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .animate-phone-slide-up {
          animation: phoneSlideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Smooth easing */
        }
        
        .animate-phone-slide-down {
          animation: phoneSlideDown 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        /* Utility for radial gradient background */
        .bg-radial-gradient {
            background-image: radial-gradient(ellipse at center, var(--tw-color-gray-50) 0%, var(--tw-color-white) 50%);
        }

      `}</style>
    </section>
  );
};

export default ScrollPhoneAnimation;