import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';

const CardsSection = () => {
  const [activeTab, setActiveTab] = useState('physical');
  const [userInteracted, setUserInteracted] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!userInteracted) {
      intervalRef.current = setInterval(() => {
        setActiveTab(prev => prev === 'physical' ? 'virtual' : 'physical');
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [userInteracted]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setUserInteracted(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <section className="relative bg-white overflow-hidden min-h-screen flex items-center justify-center">
      
      {/* Background Videos */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 transition-opacity duration-700 ${
          activeTab === 'physical' ? 'opacity-100' : 'opacity-0'
        }`}>
          <video 
            muted 
            playsInline 
            autoPlay 
            loop 
            className="w-full h-full object-cover"
            aria-hidden="true"
          >
            <source 
              src="https://assets.revolut.com/published-assets-v3/5b4c4cc6-f5e3-4013-abb9-02ed70191f31/79c359d8-7025-4121-924b-b7880f97bcf4.mp4" 
              type="video/mp4" 
            />
          </video>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className={`absolute inset-0 transition-opacity duration-700 ${
          activeTab === 'virtual' ? 'opacity-100' : 'opacity-0'
        }`}>
          <video 
            muted 
            playsInline 
            autoPlay 
            loop 
            className="w-full h-full object-cover"
            aria-hidden="true"
          >
            <source 
              src="https://assets.revolut.com/published-assets-v3/94a4cf97-5819-45b0-8219-b7b16e94ecac/959ae3c2-0d48-4c3e-a30e-2defda91b1f0.mp4" 
              type="video/mp4" 
            />
          </video>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Content Area */}
        <div className="flex flex-col min-h-[80vh] justify-between py-12">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            
            {/* Physical Card Content */}
            <div className={`transition-all duration-700 ${
              activeTab === 'physical' 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8 absolute pointer-events-none'
            }`}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Physical cards for everyday spending
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-xl">
                Spend your stablecoins anywhere Visa and Mastercard are accepted. Use it for shopping, travel, and subscriptions—all with one secure card.
              </p>
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl">
                Apply for Card
              </Button>
            </div>

            {/* Virtual Card Content */}
            <div className={`transition-all duration-700 ${
              activeTab === 'virtual' 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8 absolute pointer-events-none'
            }`}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Virtual cards for instant payments
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-10 leading-relaxed max-w-xl">
                Create and add virtual cards to Apple Pay or Google Wallet instantly. Perfect for online shopping and contactless payments.
              </p>
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl">
                Open Virtual Account
              </Button>
            </div>
          </div>

          {/* Spacer to push tabs down */}
          <div className="flex-grow"></div>

          {/* Tab Navigation - Positioned much lower */}
          <div className="mt-auto pb-20 sm:pb-24 lg:pb-28">
            <div className="flex justify-center">
              <div className="bg-white/15 backdrop-blur-md rounded-full p-1.5 border border-white/30 shadow-2xl">
                <button
                  onClick={() => handleTabClick('physical')}
                  className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeTab === 'physical'
                      ? 'bg-black text-white shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Physical cards
                </button>
                <button
                  onClick={() => handleTabClick('virtual')}
                  className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeTab === 'virtual'
                      ? 'bg-black text-white shadow-lg'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Virtual cards
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;