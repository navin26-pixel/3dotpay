import React, { useState } from 'react';

// Defining the features array outside the component to prevent re-creation on render
const featuresData = [
  {
    title: "Global Payout",
    subtitle: "Send Crypto, Receive Local Currency",
    description:
      "Experience hassle-free sending. Every transaction is protected, every recipient just moments away, facilitating seamless cross-border transfers.",
    phoneImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop",
  },
  {
    title: "Multi-Currency Wallet",
    subtitle: "Bridging Crypto and Everyday Life",
    description:
      "Instantly switch between Crypto and Local Currency. Jump straight into action and access your funds easily and securely from a single interface.",
    phoneImage:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=800&fit=crop",
  },
  {
    title: "Credit & Collateral",
    subtitle: "Unlock Your Financial Power",
    description:
      "Access instant funds using your crypto as collateral, with flexible repayment options and zero traditional credit checks. Fast, private, and efficient.",
    phoneImage:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=800&fit=crop",
  },
  {
    title: "Stake & Earn",
    subtitle: "Grow Your Assets, Effortlessly",
    description:
      "Put your crypto to work with daily rewards. Our secure staking platform allows you to passively grow your portfolio with competitive APYs.",
    phoneImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=800&fit=crop",
  },
  {
    title: "Swap & Convert",
    subtitle: "Zero-Friction Crypto Conversions",
    description:
      "Convert your assets or move funds in and out on the go, with competitive, transparent rates and minimal friction. Instant execution guaranteed.",
    phoneImage:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=800&fit=crop",
  },
  {
    title: "P2P Marketplace",
    subtitle: "Peer-to-Peer, Powered By Security",
    description:
      "Connect directly with others to trade stablecoins and local currency. Enjoy secure, low-cost peer-to-peer trading with real-time settlement and escrow protection.",
    phoneImage:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=800&fit=crop",
  },
];

const ACCENT_RED = "#D00000"; // Deep Crimson for a professional feel
const LIGHT_RED = "#FFDEDE"; // Light red for hover background/highlights

const ScrollPhoneAnimation = () => {
  const [activeSection, setActiveSection] = useState(1);

  const handleDotClick = (index) => {
    setActiveSection(index);
  };

  const currentFeature = featuresData[activeSection];

  return (
    <section
      data-testid="features-section"
      className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center font-inter"
    >
      {/* Subtle background element (optional noise/gradient) */}
      <div className="absolute inset-0 opacity-10">
        {/* Subtle gradient from center for depth */}
        <div className="absolute top-1/2 left-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-color-gray-50)_0%,_var(--tw-color-white)_50%)] transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl min-h-screen mx-auto items-center relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Left Side - Content */}
        <div className="py-12 flex flex-col justify-center relative">
          <div className="max-w-xl transition-all duration-700 ease-in-out">
            <div className="text-xs sm:text-sm font-semibold text-gray-500 mb-4 tracking-widest uppercase">
              FEATURE 0{activeSection + 1} / 0{featuresData.length}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
              {currentFeature.title}
            </h2>
            <h3
              className="text-lg sm:text-xl lg:text-2xl font-medium mb-4"
              style={{ color: ACCENT_RED }}
            >
              {currentFeature.subtitle}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
              {currentFeature.description}
            </p>
            <button
              data-testid="feature-get-started-button"
              className="group text-white border-none px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] flex items-center gap-3"
              style={{
                backgroundColor: ACCENT_RED,
                boxShadow: `0 15px 30px -10px ${ACCENT_RED}55`,
              }}
            >
              Get Started Now
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
              </svg>
            </button>

            {/* Pager/Section Indicator */}
            <div className="mt-8 flex items-center gap-4 sm:gap-6">
              <div className="flex gap-2">
                {featuresData.map((_, index) => (
                  <div
                    key={index}
                    data-testid={`feature-indicator-${index}`}
                    className={`h-1 rounded-full cursor-pointer transition-all duration-500 ${
                      index === activeSection
                        ? "bg-red-700 w-8 sm:w-10"
                        : "bg-gray-300 hover:bg-gray-400 w-2"
                    }`}
                    style={{
                      backgroundColor:
                        index === activeSection ? ACCENT_RED : undefined,
                    }}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-gray-500 font-medium select-none">
                {activeSection + 1} / {featuresData.length}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Clean Phone Display */}
        <div className="flex items-center justify-center py-12">
          <div className="relative w-64 sm:w-72 lg:w-80 h-[420px] sm:h-[520px]">
            <div className="relative w-full h-full">
              {/* Phone Shell: Cleaner drop shadow, no rotation */}
              <img
                src="https://staticsource1.redotpay.com/web/img/home/v3/phone-shell.webp?t=1763006556389"
                alt="Phone"
                className="w-full h-full object-contain drop-shadow-2xl relative z-10"
                style={{ filter: `drop-shadow(0 25px 25px ${ACCENT_RED}1A)` }}
              />

              {/* Phone Screen */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[88%] h-[95%] rounded-[40px] overflow-hidden z-0 bg-black">
                <img
                  src={currentFeature.phoneImage}
                  alt={currentFeature.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 sm:p-6">
                  <span className="text-white text-base sm:text-lg font-bold">
                    {currentFeature.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Progress Bar at the bottom (hidden on very small screens) */}
      <div
        className="hidden sm:block absolute bottom-0 left-0 w-full h-1 z-20"
        style={{ backgroundColor: LIGHT_RED }}
      >
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{
            width: `${((activeSection + 1) / featuresData.length) * 100}%`,
            backgroundColor: ACCENT_RED,
          }}
        />
      </div>
    </section>
  );
};

export default ScrollPhoneAnimation;
