import React from 'react';
import phoneImage from '../images/photo_2025-12-15_15-13-38.jpg';

const ACCENT_RED = '#CF051D';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <div className="py-16 lg:py-0">
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight">
              Move money<br />without borders
            </h1>

            {/* Subtext */}
            <div className="mb-12">
              <p className="text-xl text-gray-700 mb-8 max-w-xl">
                Send crypto, receive local currency instantly.
                <br />
                No bank delays. No hidden fees.
              </p>
            </div>

            {/* CTA */}
            <button 
              className="px-6 py-4 rounded-full text-lg font-medium text-white leading-[13px] hover:opacity-80 transition-opacity"
              style={{ 
                backgroundColor: ACCENT_RED
              }}
            >
              Pay with stablecoins
            </button>
          </div>

          {/* Right: App preview */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative" style={{ width: '300px', height: '600px' }}>
              {/* Phone frame */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-black shadow-xl border-8 border-black">
                {/* Screen */}
                <div className="absolute inset-2 rounded-[2rem] overflow-hidden bg-black">
                  {/* App screenshot */}
                  <img 
                    src={phoneImage} 
                    alt="App interface" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if no image
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  
                  {/* Fallback UI */}
                  <div 
                    className="w-full h-full hidden p-6 flex flex-col justify-between"
                    style={{
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                      display: 'none'
                    }}
                  >
                    <div className="text-white/60 text-sm">Balance</div>
                    <div className="text-white text-3xl font-bold">$12,450</div>
                    <div className="text-white/40 text-sm">Available to send</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Subtle column divider (large screens only) */}
        <div className="hidden lg:block absolute left-1/2 top-1/4 bottom-1/4 w-px bg-gray-100 transform -translate-x-1/2"></div>
      </div>
    </section>
  );
};

export default Hero;