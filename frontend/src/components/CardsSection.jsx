import React, { useState, useEffect, useRef } from 'react';
import { CreditCard, Smartphone, Check, ArrowDown } from 'lucide-react';
import logo from '../images/logoislogo-removebg-preview.png';

const ACCENT_RED = '#CC0317';

const CardsSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const progress = Math.max(0, Math.min(1, 
        (-rect.top) / (rect.height - windowHeight)
      ));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Card transforms
  const getCardTransform = () => {
    if (scrollProgress < 0.65) {
      const stageProgress = scrollProgress / 0.65;
      
      // Gentle rotation: 0° → 12°
      const rotateY = 12 * stageProgress;
      
      // Minimal scale down: 1 → 0.9
      const scale = 1 - (0.1 * stageProgress);
      
      return { scale, rotateY };
    }
    
    return { scale: 0.9, rotateY: 12 };
  };

  // Title opacity
  const getTitleOpacity = () => {
    if (scrollProgress < 0.2) return 0;
    if (scrollProgress < 0.4) return 1;
    if (scrollProgress < 0.55) {
      return 1 - ((scrollProgress - 0.4) / 0.15);
    }
    return 0;
  };

  // Content opacity
  const getContentOpacity = () => {
    if (scrollProgress < 0.65) return 0;
    const contentProgress = (scrollProgress - 0.65) / 0.35;
    return Math.min(1, contentProgress * 1.5);
  };

  const cardTransform = getCardTransform();
  const titleOpacity = getTitleOpacity();
  const contentOpacity = getContentOpacity();

  return (
    <section 
      ref={sectionRef}
      className="relative bg-black text-white"
      style={{ 
        minHeight: '200vh',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.8s ease-out'
      }}
    >
      {/* Stage 1: Card dominates (sticky) */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="w-full h-full relative">
          {/* Title appears briefly */}
          <div 
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center w-full px-6 z-10"
            style={{ 
              opacity: titleOpacity,
              transition: 'opacity 0.4s ease-out'
            }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Your card
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              One product, two ways to spend
            </p>
          </div>

          {/* Layer 1: Centering ONLY */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Layer 2: Animation ONLY */}
            <div
              style={{
                width: '65vw',
                maxWidth: '820px',
                height: '420px',
                transform: `
                  scale(${cardTransform.scale})
                  rotateY(${cardTransform.rotateY}deg)
                `,
                transformStyle: 'preserve-3d',
                perspective: '1200px',
                transition: 'transform 0.2s linear',
              }}
            >
              {/* Layer 3: Card UI */}
              <div className="w-full h-full bg-black rounded-3xl shadow-2xl p-8 flex flex-col justify-between border border-white/20">
                {/* Logo */}
                <div className="flex justify-between items-start">
                  <img 
                    src={logo} 
                    alt="Logo" 
                    className="h-12 w-auto object-contain filter brightness-0 invert"
                  />
                </div>
                
                {/* Card number */}
                <div className="text-white text-3xl font-mono tracking-wider mb-8">
                  •••• •••• •••• 4242
                </div>
                
                {/* Card details */}
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-white/60 text-sm mb-2">Expires</div>
                    <div className="text-white text-xl font-semibold">12/28</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/60 text-sm mb-2">CVV</div>
                    <div className="text-white text-xl font-semibold">•••</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-16 h-10 bg-white rounded flex items-center justify-center">
                      <span className="text-black font-bold">VISA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          {scrollProgress < 0.1 && (
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="flex flex-col items-center">
                <div className="text-white/50 text-sm tracking-wider mb-2">SCROLL</div>
                <ArrowDown className="w-5 h-5 text-white/40 animate-bounce" />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stage 2: Content appears below */}
      <div className="relative bg-black pt-20 pb-32">
        <div 
          className="max-w-6xl mx-auto px-6"
          style={{
            opacity: contentOpacity,
            transform: `translateY(${contentOpacity > 0 ? 0 : 40}px)`,
            transition: 'all 0.8s ease-out'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Virtual Card */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Virtual Card</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: ACCENT_RED }} />
                  <p className="text-white/90">Create instantly. No waiting.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: ACCENT_RED }} />
                  <p className="text-white/90">Secure online payments only.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: ACCENT_RED }} />
                  <p className="text-white/90">Set spending limits per card.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="text-sm text-white/60 mb-2">Minimum balance</div>
                <div className="text-xl font-semibold">$10</div>
              </div>

              <button 
                className="w-full py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
                style={{ 
                  backgroundColor: ACCENT_RED,
                  color: 'white'
                }}
              >
                Create virtual card
              </button>
            </div>

            {/* Physical Card */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Physical Card</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: ACCENT_RED }} />
                  <p className="text-white/90">Global spending anywhere.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: ACCENT_RED }} />
                  <p className="text-white/90">Chip and contactless payments.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: ACCENT_RED }} />
                  <p className="text-white/90">Delivered to your address.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="text-sm text-white/60 mb-2">Minimum balance</div>
                <div className="text-xl font-semibold">$100</div>
              </div>

              <button 
                className="w-full py-4 bg-white text-black rounded-xl font-medium hover:bg-gray-100 transition-colors"
              >
                Order physical card
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <div className="text-white/60">
              Choose based on your needs. Both work together.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;