import React, { useEffect, useRef, useState } from 'react';

const ACCENT_RED = '#CC0317';

const benefits = [
  {
    id: 1,
    title: "Global Transfers",
    description: "Send crypto, receive local currency anywhere. Works in seconds.",
    metric: "12 seconds",
    metricLabel: "Avg settlement",
  },
  {
    id: 2,
    title: "Multi-Currency",
    description: "Hold crypto and fiat in one place. Switch instantly.",
    metric: "42",
    metricLabel: "Currencies supported",
  },
  {
    id: 3,
    title: "Crypto Credit",
    description: "Borrow against your assets without selling position.",
    metric: "80%",
    metricLabel: "Max LTV",
  },
  {
    id: 4,
    title: "Staking Rewards",
    description: "Earn on your digital assets while you hold.",
    metric: "5.8%",
    metricLabel: "Avg APY",
  },
];

const Benefits = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress: 0 when section top at viewport bottom, 1 when section bottom at viewport top
      const progress = Math.max(0, Math.min(1, 
        (-rect.top) / (rect.height - windowHeight)
      ));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for fade-in
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

  // Calculate card transform based on scroll progress
  const getCardTransform = (index) => {
    // Phase 1: Initial state (0-0.3 scroll)
    if (scrollProgress < 0.3) {
      return 'translateX(0)';
    }
    
    // Phase 2: Moving period (0.3-0.7 scroll)
    if (scrollProgress < 0.7) {
      const moveProgress = (scrollProgress - 0.3) / 0.4;
      
      // Alternating directions: even moves left, odd moves right
      const distance = 120; // pixels to move
      const direction = index % 2 === 0 ? -1 : 1; // even: left, odd: right
      
      return `translateX(${direction * distance * moveProgress}px)`;
    }
    
    // Phase 3: Final position (0.7+ scroll)
    const distance = 120;
    const direction = index % 2 === 0 ? -1 : 1;
    return `translateX(${direction * distance}px)`;
  };

  // Calculate card opacity
  const getCardOpacity = (index) => {
    // Cards appear in sequence as you scroll
    const cardThreshold = 0.2 + (index * 0.1);
    return scrollProgress > cardThreshold ? 1 : 0;
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-32"
      style={{ 
        minHeight: '150vh',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.8s ease-out'
      }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Built to move money
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Infrastructure for modern transactions. No complexity.
          </p>
        </div>

        {/* Horizontal scroll container */}
        <div ref={containerRef} className="relative w-full">
          {/* Cards container - single row */}
          <div className="flex justify-center gap-8 px-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-lg overflow-hidden"
                style={{
                  transform: getCardTransform(index),
                  opacity: getCardOpacity(index),
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-out',
                  transitionDelay: `${index * 0.1}s`,
                }}
              >
                <div className="p-8">
                  {/* Number - subtle */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-400 font-medium">
                      0{index + 1}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Metric - numbers first */}
                  <div className="pt-6 border-t border-gray-100">
                    <div className="flex items-baseline gap-2">
                      <div className="text-2xl font-bold text-slate-900">
                        {benefit.metric}
                      </div>
                      <div className="text-sm text-gray-500">
                        {benefit.metricLabel}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accent bar */}
                <div 
                  className="h-1 w-full"
                  style={{ backgroundColor: ACCENT_RED }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-12 px-4">
          <div className="text-sm text-gray-500">
            Scroll to see motion
          </div>
        </div>
      </div>

      {/* Bottom section - appears after scroll */}
      <div 
        className="relative bg-white pt-32 px-4"
        style={{
          opacity: scrollProgress > 0.8 ? 1 : 0,
          transform: scrollProgress > 0.8 ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 0.6s ease-out'
        }}
      >
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="text-sm text-gray-500 mb-2">
              ACCESS
            </div>
            <div className="text-xl font-medium text-slate-900">
              Get started with $10 minimum
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
            />
            <button 
              className="px-6 py-3 font-medium rounded-lg hover:opacity-90 transition-opacity"
              style={{ 
                backgroundColor: ACCENT_RED,
                color: 'white'
              }}
            >
              Open wallet
            </button>
          </div>
          
          <div className="text-xs text-gray-400 text-center mt-4">
            No commitments. Cancel anytime.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;