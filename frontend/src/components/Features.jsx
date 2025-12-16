import React, { useState, useEffect, useRef } from 'react';

// Reliable image URLs - using Pexels for better availability
const featuresData = [
  {
    id: 1,
    title: "Global Payout",
    subtitle: "Send Crypto, Receive Local Currency",
    description: "Experience hassle-free sending. Every transaction protected, every recipient just moments away.",
    phoneImage: "https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=600&h=1200&fit=crop",
    icon: "🌍",
  },
  {
    id: 2,
    title: "Multi-Currency Wallet",
    subtitle: "Bridging Crypto and Everyday Life",
    description: "Instantly switch between Crypto and Local Currency. Jump straight into action and access your funds easily.",
    phoneImage: "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=600&h=1200&fit=crop",
    icon: "💳",
  },
  {
    id: 3,
    title: "Credit & Collateral",
    subtitle: "Unlock Your Financial Power",
    description: "Access instant funds using your crypto as collateral, with flexible repayment options and zero traditional credit checks.",
    phoneImage: "https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg?auto=compress&cs=tinysrgb&w=600&h=1200&fit=crop",
    icon: "🔐",
  },
  {
    id: 4,
    title: "Stake & Earn",
    subtitle: "Grow Your Assets, Effortlessly",
    description: "Put your crypto to work with daily rewards. Our secure staking platform allows you to passively grow your portfolio.",
    phoneImage: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600&h=1200&fit=crop",
    icon: "📈",
  },
  {
    id: 5,
    title: "Swap & Convert",
    subtitle: "Zero-Friction Crypto Conversions",
    description: "Convert your assets or move funds in and out on the go, with competitive, transparent rates and minimal friction.",
    phoneImage: "https://images.pexels.com/photos/4497581/pexels-photo-4497581.jpeg?auto=compress&cs=tinysrgb&w=600&h=1200&fit=crop",
    icon: "🔄",
  },
  {
    id: 6,
    title: "P2P Marketplace",
    subtitle: "Peer-to-Peer, Powered By Security",
    description: "Connect directly with others to trade stablecoins and local currency. Enjoy secure, low-cost peer-to-peer trading.",
    phoneImage: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600&h=1200&fit=crop",
    icon: "🤝",
  },
];

const ACCENT_RED = "#D00000";

// Fallback image in case Pexels is blocked
const FALLBACK_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='1200' viewBox='0 0 600 1200'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0%25' x2='100%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23333'/%3E%3Cstop offset='100%25' stop-color='%23000'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='1200' fill='url(%23a)'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle'%3E3dotpay%3C/text%3E%3Ctext x='50%25' y='55%25' font-family='Arial' font-size='16' fill='%23ccc' text-anchor='middle'%3EFeature Preview%3C/text%3E%3C/svg%3E";

const ScrollPhoneStickyAnimation = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState({});
  
  const containerRef = useRef(null);
  const stickyRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const observerRef = useRef(null);

  const currentFeature = featuresData[activeSection] || featuresData[0];

  // Handle image loading errors
  const handleImageError = (featureId) => {
    setImageErrors(prev => ({ ...prev, [featureId]: true }));
  };

  // Get image URL with fallback
  const getImageUrl = (feature) => {
    if (imageErrors[feature.id]) {
      return FALLBACK_IMAGE;
    }
    return feature.phoneImage;
  };

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || isMobile) return;
      
      const container = containerRef.current;
      const scrollTop = window.pageYOffset;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      if (containerHeight > 0) {
        const sectionHeight = containerHeight / featuresData.length;
        const scrollWithinContainer = Math.max(0, scrollTop - containerTop);
        const currentSection = Math.min(
          featuresData.length - 1,
          Math.max(0, Math.floor((scrollWithinContainer + viewportHeight * 0.5) / sectionHeight))
        );
        
        if (currentSection !== activeSection && currentSection >= 0 && currentSection < featuresData.length) {
          setIsScrolling(true);
          setActiveSection(currentSection);
          
          if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
          }
          
          scrollTimeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
          }, 400);
        }
      }
    };

    if (!isMobile) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleScroll);
      
      handleScroll();
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeSection, isMobile]);

  const handleSectionClick = (index) => {
    const container = containerRef.current;
    if (container) {
      const sectionHeight = container.offsetHeight / featuresData.length;
      const targetScroll = container.offsetTop + (sectionHeight * index);
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  // If mobile, don't render the sticky scroll version
  if (isMobile) {
    return <ScrollPhoneMobile />;
  }

  return (
    <section 
      ref={containerRef}
      className={`relative hidden md:block my-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ height: `${100 * featuresData.length}vh` }}
    >
      {/* Sticky container */}
      <div 
        ref={stickyRef}
        className="sticky top-0 h-screen overflow-hidden"
      >
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #999 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Main content container */}
        <div className="container-1080 relative h-full flex items-center justify-between gap-28 px-4">
          {/* Left side - Content */}
          <div className="w-full lg:w-1/2 max-w-[550px]">
            <div className={`transition-all duration-700 ease-out ${
              isScrolling ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0 delay-150'
            }`}>
              {currentFeature && (
                <>
                  {/* Feature indicator */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="text-2xl">{currentFeature.icon}</div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-500 tracking-widest uppercase">
                      FEATURE 0{activeSection + 1} / 0{featuresData.length}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className="text-lg font-semibold tracking-tight sm:text-xl mb-2"
                    style={{ color: ACCENT_RED }}
                  >
                    {currentFeature.title}
                  </h3>
                  
                  {/* Subtitle with intentional animation */}
                  <h2 className="my-8 text-3xl lg:text-[48px] font-semibold leading-tight">
                    <span 
                      className="inline-block transition-all duration-700"
                      style={{ 
                        opacity: isScrolling ? 0 : 1, 
                        transform: isScrolling ? "translateY(10px)" : "translateY(0)" 
                      }}
                    >
                      {currentFeature.subtitle}
                    </span>
                  </h2>
                  
                  {/* Description */}
                  <p className="text-xl leading-normal text-gray-700 mb-10">
                    {currentFeature.description}
                  </p>
                  
                  {/* Clean button */}
                  <button
                    className="group bg-foreground mt-6 inline-block cursor-pointer rounded-full px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
                    style={{ backgroundColor: ACCENT_RED }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Learn more
                      <svg 
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                    <span className="sr-only">{currentFeature.title}</span>
                  </button>
                </>
              )}
              
              {/* Section indicators */}
              <div className="mt-16 flex items-center gap-6">
                <div className="flex gap-2">
                  {featuresData.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer relative group ${
                        index === activeSection 
                          ? 'w-8' 
                          : 'w-2 hover:w-3'
                      }`}
                      onClick={() => handleSectionClick(index)}
                      style={{
                        backgroundColor: index === activeSection ? ACCENT_RED : '#E5E7EB',
                      }}
                    >
                      <div className="absolute -top-2 -bottom-2 -left-1 -right-1 cursor-pointer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  {activeSection + 1} / {featuresData.length}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Phone */}
          <div className="hidden lg:flex items-center justify-center w-1/2">
            <div className="relative w-[355px] h-[730px]">
              {/* Phone Shell - Using CSS instead of image */}
              <div className="absolute inset-0 z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black rounded-[50px] border-[10px] border-gray-900 shadow-2xl" style={{
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                }} />
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl" />
                {/* Home button */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-2 border-gray-700" />
              </div>
              
              {/* Phone Screen */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[316px] h-[689px] rounded-[40px] overflow-hidden bg-gray-900">
                  {/* Image with clean fade and subtle zoom */}
                  <div 
                    key={currentFeature.id}
                    className="absolute inset-0 transition-all duration-700 ease-out"
                    style={{ 
                      opacity: isScrolling ? 0 : 1, 
                      transform: isScrolling ? "scale(1.05)" : "scale(1)" 
                    }}
                  >
                    <img
                      src={getImageUrl(currentFeature)}
                      alt={currentFeature.title}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(currentFeature.id)}
                    />
                  </div>
                  
                  {/* Overlay to ensure text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        .container-1080 {
          max-width: 1080px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};

// Clean Mobile version
const ScrollPhoneMobile = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (featureId) => {
    setImageErrors(prev => ({ ...prev, [featureId]: true }));
  };

  const getImageUrl = (feature) => {
    if (imageErrors[feature.id]) {
      return FALLBACK_IMAGE;
    }
    return feature.phoneImage;
  };

  const handlePrev = () => {
    setActiveSection(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveSection(prev => Math.min(featuresData.length - 1, prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  const currentFeature = featuresData[activeSection] || featuresData[0];

  return (
    <section 
      className="block md:hidden my-10 px-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Phone container */}
        <div className="relative py-12 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="relative w-[280px] h-[560px] mx-auto">
            {/* CSS Phone Frame */}
            <div className="absolute inset-0 z-10">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-black rounded-[40px] border-[8px] border-gray-900 shadow-xl" />
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-lg" />
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-2 border-gray-700" />
            </div>
            
            <div className="relative z-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[245px] h-[535px] rounded-[30px] overflow-hidden bg-gray-900">
                  <img
                    src={getImageUrl(currentFeature)}
                    alt={currentFeature.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={() => handleImageError(currentFeature.id)}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Progress dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {featuresData.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeSection 
                    ? 'w-6 bg-red-600' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-8 pt-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{currentFeature.icon}</div>
              <div className="text-xs font-semibold text-gray-500 tracking-widest uppercase">
                FEATURE 0{activeSection + 1} / 0{featuresData.length}
              </div>
            </div>
          </div>
          
          <h3 
            className="text-xl font-semibold tracking-tight mb-2"
            style={{ color: ACCENT_RED }}
          >
            {currentFeature.title}
          </h3>
          
          <h2 className="text-2xl font-semibold leading-tight mb-4">
            {currentFeature.subtitle}
          </h2>
          
          <p className="text-base leading-relaxed text-gray-700 mb-6">
            {currentFeature.description}
          </p>
          
          {/* Button */}
          <button
            className="w-full rounded-full px-6 py-4 text-base font-medium text-white transition-all duration-300 hover:scale-[1.02]"
            style={{ backgroundColor: ACCENT_RED }}
          >
            Learn more
          </button>
          
          {/* Navigation buttons */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePrev}
              disabled={activeSection === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                activeSection === 0 
                  ? 'opacity-50 cursor-not-allowed text-gray-400' 
                  : 'text-red-600'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </button>
            
            <div className="flex gap-2">
              {featuresData.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`text-lg transition-all duration-300 ${
                    index === activeSection 
                      ? 'opacity-100' 
                      : 'opacity-30 hover:opacity-70'
                  }`}
                >
                  {feature.icon}
                </button>
              ))}
            </div>
            
            <button
              onClick={handleNext}
              disabled={activeSection === featuresData.length - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                activeSection === featuresData.length - 1
                  ? 'opacity-50 cursor-not-allowed text-gray-400' 
                  : 'text-red-600'
              }`}
            >
              Next
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <button 
              className="px-4 py-2 bg-red-600 text-white rounded-lg"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const ScrollPhoneAnimation = () => {
  return (
    <ErrorBoundary>
      <ScrollPhoneStickyAnimation />
    </ErrorBoundary>
  );
};

export default ScrollPhoneAnimation;