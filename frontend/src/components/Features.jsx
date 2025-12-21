import React, { useState, useEffect, useRef } from 'react';

const featuresData = [
  {
    id: 1,
    title: "Get paid globally",
    subtitle: "No borders, no waiting",
    description: "Send crypto anywhere, receive local currency instantly.",
    dataLine: "Avg payout time: 12 seconds • Fees: 0.3%",
    icon: "→",
    phoneUI: {
      balance: "$12,430",
      currency: "USD",
      action: "SEND",
      chartData: [30, 40, 35, 50, 49, 60, 70],
      countries: ["US", "EU", "UK", "JP", "IN", "BR"]
    }
  },
  {
    id: 2,
    title: "Hold money in any currency",
    subtitle: "Switch instantly, trade freely",
    description: "One wallet, multiple currencies. Jump straight into action.",
    dataLine: "Supported currencies: 42 • Zero conversion fees",
    icon: "↔",
    phoneUI: {
      balance: "₿0.35",
      currency: "BTC",
      action: "SWAP",
      chartData: [70, 60, 65, 55, 75, 80, 85],
      countries: ["BTC", "ETH", "SOL", "USDC", "EUR", "USD"]
    }
  },
  {
    id: 3,
    title: "Use crypto without selling",
    subtitle: "Borrow against your assets",
    description: "Access instant funds using your crypto as collateral.",
    dataLine: "Max LTV: 80% • Rates from 3.2% APY",
    icon: "⚡",
    phoneUI: {
      balance: "$8,500",
      currency: "CREDIT",
      action: "BORROW",
      chartData: [20, 25, 30, 35, 40, 45, 50],
      countries: ["LOAN", "COLLATERAL", "INTEREST", "TERM"]
    }
  },
  {
    id: 4,
    title: "Earn while you sleep",
    subtitle: "Passive income made simple",
    description: "Put your crypto to work with daily rewards.",
    dataLine: "Avg APY: 5.8% • Compounding daily",
    icon: "📈",
    phoneUI: {
      balance: "$1,240",
      currency: "REWARDS",
      action: "STAKE",
      chartData: [10, 20, 25, 30, 40, 55, 75],
      countries: ["DAY 1", "DAY 7", "DAY 30", "DAY 90"]
    }
  },
  {
    id: 5,
    title: "Swap in seconds",
    subtitle: "Zero-friction conversions",
    description: "Convert assets on the go with transparent rates.",
    dataLine: "Spread: 0.1% • Slippage: <0.5%",
    icon: "🔄",
    phoneUI: {
      balance: "Ξ2.1",
      currency: "ETH",
      action: "SWAP",
      chartData: [45, 48, 52, 49, 51, 53, 55],
      countries: ["ETH/USDC", "BTC/ETH", "SOL/USD", "MATIC"]
    }
  },
  {
    id: 6,
    title: "Trade with people nearby",
    subtitle: "Peer-to-peer, powered by security",
    description: "Connect directly with others to trade stablecoins.",
    dataLine: "Success rate: 99.8% • Escrow protected",
    icon: "🤝",
    phoneUI: {
      balance: "$3,750",
      currency: "P2P",
      action: "TRADE",
      chartData: [60, 55, 65, 70, 75, 80, 85],
      countries: ["BUY", "SELL", "ESCROW", "RELEASE"]
    }
  },
];

const ACCENT_COLOR = "#000000";
const SECONDARY_COLOR = "#666666";

const ScrollPhoneStickyAnimation = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const phoneRef = useRef(null);
  const [uiState, setUiState] = useState(featuresData[0].phoneUI);

  const currentFeature = featuresData[activeSection];

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle scroll with snap effect
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const scrollProgress = -rect.top / (rect.height - viewportHeight);
      const newSection = Math.max(
        0,
        Math.min(
          featuresData.length - 1,
          Math.floor(scrollProgress * featuresData.length)
        )
      );

      if (newSection !== activeSection) {
        setActiveSection(newSection);
        // Animate UI state change
        setUiState(prev => {
          const next = featuresData[newSection].phoneUI;
          return {
            ...prev,
            ...next,
            // Add animation trigger
            _animate: Date.now()
          };
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, isMobile]);

  // Auto-advance for demo effect
  useEffect(() => {
    if (isMobile) return;
    
    const interval = setInterval(() => {
      if (document.hasFocus()) {
        setActiveSection(prev => (prev + 1) % featuresData.length);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isMobile]);

  if (isMobile) {
    return <ScrollPhoneMobile />;
  }

  return (
    <div 
      ref={containerRef}
      className="relative bg-white"
      style={{ height: `${featuresData.length * 100}vh` }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Technical grid background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(90deg, ${ACCENT_COLOR} 1px, transparent 1px),
                linear-gradient(${ACCENT_COLOR} 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Main content */}
        <div className="relative h-full flex items-center px-8 md:px-16 lg:px-24 xl:px-32">
          
          {/* Left column: Feature list */}
          <div className="w-64 mr-16 z-10">
            <div className="mb-12">
              <div className="text-sm font-mono text-gray-500 mb-2">FEATURES</div>
              <div className="h-px w-16 bg-gray-300" />
            </div>

            <div className="space-y-8">
              {featuresData.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => {
                    const targetScroll = (index / featuresData.length) * 
                      (containerRef.current.offsetHeight - window.innerHeight);
                    window.scrollTo({
                      top: containerRef.current.offsetTop + targetScroll,
                      behavior: 'smooth'
                    });
                  }}
                  className="block text-left group transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-1">
                    <div 
                      className={`font-mono text-sm transition-all duration-300 ${
                        index === activeSection 
                          ? 'text-black font-bold' 
                          : 'text-gray-400'
                      }`}
                    >
                      0{index + 1}
                    </div>
                    <div 
                      className={`w-8 h-px transition-all duration-300 ${
                        index === activeSection 
                          ? 'bg-black' 
                          : 'bg-gray-300'
                      }`}
                    />
                  </div>
                  <div 
                    className={`text-lg font-medium transition-all duration-300 ${
                      index === activeSection 
                        ? 'text-black' 
                        : 'text-gray-500 group-hover:text-gray-700'
                    }`}
                  >
                    {feature.title}
                  </div>
                  {index === activeSection && (
                    <div className="mt-2 text-sm text-gray-500 font-light">
                      {feature.dataLine.split(' • ')[0]}
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="text-sm text-gray-500 font-mono mb-4">LIVE STATS</div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Active users</span>
                  <span className="font-mono">42,189</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Volume 24h</span>
                  <span className="font-mono">$4.2M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Avg fee</span>
                  <span className="font-mono">0.3%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center column: Phone */}
          <div className="flex-1 flex items-center justify-center" ref={phoneRef}>
            <div className="relative" style={{ width: '340px', height: '680px' }}>
              {/* Phone shell - monochrome, technical */}
              <div 
                className="absolute inset-0 rounded-[3rem]"
                style={{
                  background: '#000000',
                  border: '12px solid #000000',
                  boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.1)',
                }}
              >
                {/* Screen */}
                <div className="absolute inset-4 rounded-[2.5rem] overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
                  {/* App UI */}
                  <div className="h-full flex flex-col p-6">
                    {/* Status bar */}
                    <div className="flex justify-between items-center mb-8">
                      <div className="text-white/60 text-sm font-mono">9:41</div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="w-3 h-1 rounded-full" style={{ 
                            backgroundColor: i <= 3 ? '#ffffff' : '#ffffff40'
                          }} />
                        ))}
                      </div>
                    </div>

                    {/* Balance display */}
                    <div className="mb-8">
                      <div className="text-white/40 text-sm font-mono mb-2">BALANCE</div>
                      <div className="flex items-baseline">
                        <div 
                          key={`balance-${uiState._animate}`}
                          className="text-4xl font-bold text-white animate-count-up"
                          style={{ 
                            animationDuration: '0.8s',
                            animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        >
                          {uiState.balance}
                        </div>
                        <div 
                          key={`currency-${uiState._animate}`}
                          className="ml-2 text-white/60 font-mono animate-fade-slide"
                        >
                          {uiState.currency}
                        </div>
                      </div>
                    </div>

                    {/* Mini chart */}
                    <div className="mb-8">
                      <div className="flex items-end h-16 gap-px">
                        {uiState.chartData.map((value, i) => (
                         <div
  key={i}
  className="flex-1 animate-bar-grow"
  style={{
    backgroundColor: ACCENT_COLOR,
    opacity: 0.3 + (i / uiState.chartData.length) * 0.7,
    height: `${value}%`,
    animationDelay: `${i * 0.05}s`,
    animationDuration: '0.6s'
  }}
/>
                        ))}
                      </div>
                    </div>

                    {/* Action button */}
                    <div className="mb-12">
                      <div 
                        key={`action-${uiState._animate}`}
                        className="inline-flex items-center justify-center w-full py-4 rounded-xl text-white font-medium tracking-wide animate-button-change"
                        style={{ backgroundColor: ACCENT_COLOR }}
                      >
                        {uiState.action}
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Countries/currencies tags */}
                    <div className="flex-1">
                      <div className="text-white/40 text-sm font-mono mb-3">AVAILABLE</div>
                      <div className="flex flex-wrap gap-2">
                        {uiState.countries.map((tag, i) => (
                       <div
                  key={i}
                className="px-3 py-1.5 rounded-lg text-sm font-mono animate-tag-appear"
                   style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                    color: '#ffffff',
                      border: '1px solid rgba(255,255,255,0.1)',
                  animationDelay: `${i * 0.1}s`
                      }}
                        >               
                       {tag}
                     </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom nav */}
                    <div className="flex justify-between items-center pt-6 border-t border-white/10">
                      {['Home', 'Trade', 'Earn', 'Pay'].map((item, i) => (
                        <button
                          key={item}
                          className={`text-sm font-medium ${i === 1 ? 'text-white' : 'text-white/40'}`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical labels */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-mono text-gray-500">
                LIVE DEMO • PROTOTYPE v3.2
              </div>
              <div className="absolute -bottom-8 left-0 right-0 text-center text-xs font-mono text-gray-400">
                {activeSection + 1} / {featuresData.length} • SCROLL
              </div>
            </div>
          </div>

          {/* Right column: Content */}
          <div className="w-96 ml-16 z-10">
            <div className="mb-12">
              <div className="text-sm font-mono text-gray-500 mb-2">USE CASE</div>
              <div className="h-px w-16 bg-gray-300" />
            </div>

            <div 
              key={`content-${activeSection}`}
              className="animate-content-switch"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="text-3xl">{currentFeature.icon}</div>
              </div>

              {/* Title */}
              <h1 className="text-5xl font-bold text-black mb-4 leading-tight">
                {currentFeature.title}
              </h1>

              {/* Subtitle */}
              <h2 className="text-2xl text-gray-700 mb-6 font-light">
                {currentFeature.subtitle}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {currentFeature.description}
              </p>

              {/* Data line */}
              <div className="mb-10">
                <div className="text-sm font-mono text-gray-500 mb-2">PERFORMANCE</div>
                <div className="flex flex-wrap gap-4">
                  {currentFeature.dataLine.split(' • ').map((item, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-sm font-mono"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack */}
              <div className="mb-10">
                <div className="text-sm font-mono text-gray-500 mb-3">TECH STACK</div>
                <div className="flex flex-wrap gap-2">
                  {['Web3.js', 'React', 'Node', 'PostgreSQL', 'Redis', 'AWS'].map((tech) => (
                    <div
                      key={tech}
                      className="px-3 py-1.5 rounded-md text-sm font-mono"
                      style={{
                        backgroundColor: 'rgba(0,0,0,0.03)',
                        color: SECONDARY_COLOR,
                        border: '1px solid rgba(0,0,0,0.1)'
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <button className="w-full py-4 bg-black text-white font-medium rounded-xl hover:opacity-90 transition-opacity duration-300">
                  Try this feature →
                </button>
                <button className="w-full py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors duration-300">
                  View API docs
                </button>
              </div>

              {/* Next feature hint */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Next up:</span>
                  <span className="font-medium">
                    {featuresData[(activeSection + 1) % featuresData.length].title}
                  </span>
                  <button
                    onClick={() => {
                      const nextIndex = (activeSection + 1) % featuresData.length;
                      const targetScroll = (nextIndex / featuresData.length) * 
                        (containerRef.current.offsetHeight - window.innerHeight);
                      window.scrollTo({
                        top: containerRef.current.offsetTop + targetScroll,
                        behavior: 'smooth'
                      });
                    }}
                    className="text-black hover:opacity-70 transition-opacity"
                  >
                    Skip →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing statement */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-lg text-gray-600 max-w-2xl">
          You don't need six apps. You need one that actually works.
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeSlide {
          from {
            opacity: 0;
            transform: translateX(-5px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes barGrow {
          from {
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes buttonChange {
          0% {
            opacity: 0.5;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes tagAppear {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contentSwitch {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-count-up {
          animation: countUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-fade-slide {
          animation: fadeSlide 0.6s ease-out forwards;
        }

        .animate-bar-grow {
          animation: barGrow 0.6s ease-out forwards;
        }

        .animate-button-change {
          animation: buttonChange 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-tag-appear {
          animation: tagAppear 0.3s ease-out forwards;
        }

        .animate-content-switch {
          animation: contentSwitch 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

const ScrollPhoneMobile = () => {
  const [activeSection, setActiveSection] = useState(0);
  const currentFeature = featuresData[activeSection];

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <div className="text-sm font-mono text-gray-500 mb-2">FEATURES</div>
          <div className="h-px w-12 bg-gray-300" />
        </div>

        {/* Feature selector */}
        <div className="mb-8">
          <select
            value={activeSection}
            onChange={(e) => setActiveSection(Number(e.target.value))}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium"
          >
            {featuresData.map((feature, index) => (
              <option key={feature.id} value={index}>
                {feature.title}
              </option>
            ))}
          </select>
        </div>

        {/* Content */}
        <div className="mb-8">
          <div className="mb-4">
            <div className="text-2xl">{currentFeature.icon}</div>
          </div>
          
          <h1 className="text-3xl font-bold text-black mb-3">
            {currentFeature.title}
          </h1>
          
          <h2 className="text-xl text-gray-700 mb-4">
            {currentFeature.subtitle}
          </h2>
          
          <p className="text-gray-600 mb-6">
            {currentFeature.description}
          </p>
          
          <div className="mb-6">
            <div className="text-xs font-mono text-gray-500 mb-2">PERFORMANCE</div>
            <div className="flex flex-wrap gap-2">
              {currentFeature.dataLine.split(' • ').map((item, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 rounded-md bg-gray-50 border border-gray-200 text-xs font-mono"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phone preview */}
        <div className="relative mx-auto mb-8" style={{ width: '280px', height: '560px' }}>
          <div className="absolute inset-0 rounded-[2rem] bg-black overflow-hidden">
            <div className="h-full p-4 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="text-white/60 text-xs font-mono">9:41</div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-2 h-1 rounded-full bg-white/60" />
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-white/40 text-xs font-mono mb-1">BALANCE</div>
                <div className="flex items-baseline">
                  <div className="text-2xl font-bold text-white">
                    {currentFeature.phoneUI.balance}
                  </div>
                  <div className="ml-2 text-white/60 text-sm font-mono">
                    {currentFeature.phoneUI.currency}
                  </div>
                </div>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white/40 text-sm mb-2">PREVIEW</div>
                  <div className="text-white text-lg">{currentFeature.phoneUI.action}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full py-4 bg-black text-white font-medium rounded-xl mb-4">
          Try this feature
        </button>
        
        <button className="w-full py-3 border border-gray-300 text-gray-700 font-medium rounded-xl">
          View API docs
        </button>

        {/* Final statement */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <div className="text-gray-600">
            You don't need six apps. You need one that actually works.
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ScrollPhoneAnimation() {
  return <ScrollPhoneStickyAnimation />;
}