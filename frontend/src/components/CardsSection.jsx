import React, { useState, useEffect, useRef } from 'react';
import { CreditCard, Smartphone } from 'lucide-react';
import logo from '../images/logoislogo-removebg-preview.png';

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
    if (tab === activeTab) return;
    setActiveTab(tab);
    setUserInteracted(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-purple-950/20"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold mb-4">Fast & Secure Payment</h1>
          <p className="text-xl text-neutral-400">Send and receive money easily using secure digital dollars</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 mb-20">
          {/* Content */}
          <div className="flex-1 max-w-xl">
            {activeTab === 'physical' && (
              <div>
                <h2 className="text-5xl font-bold mb-6">Your Everyday Payment Card</h2>
                <p className="text-2xl text-neutral-300 mb-12 leading-relaxed">
                  Shop anywhere, withdraw cash from ATMs worldwide, and manage your money with our stablecoin-powered physical card.
                </p>
                <button className="bg-white text-black hover:bg-neutral-200 rounded-full px-10 py-5 text-xl font-semibold transition-all shadow-lg hover:shadow-xl">
                  Get Physical Card →
                </button>
              </div>
            )}

            {activeTab === 'virtual' && (
              <div>
                <h2 className="text-5xl font-bold mb-6">Instant Digital Payments</h2>
                <p className="text-2xl text-neutral-300 mb-12 leading-relaxed">
                  Start spending in minutes with instant card creation. Perfect for online subscriptions, shopping, and secure contactless payments.
                </p>
                <button className="bg-white text-black hover:bg-neutral-200 rounded-full px-10 py-5 text-xl font-semibold transition-all shadow-lg hover:shadow-xl">
                  Create Virtual Card →
                </button>
              </div>
            )}
          </div>

          {/* Card Display */}
          <div className="flex-1 flex justify-center">
            {activeTab === 'physical' && (
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur-lg opacity-40"></div>
                <div className="relative bg-black rounded-3xl w-96 h-60 shadow-2xl p-8 flex flex-col justify-between border border-white/20">
                  <div className="flex justify-between items-start">
                    <img 
                      src={logo} 
                      alt="Logo" 
                      className="h-8 w-auto object-contain filter brightness-0 invert"
                    />
                  </div>
                  
                  <div>
                    <div className="text-white text-2xl font-mono tracking-wider mb-6">
                      •••• •••• •••• 4242
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-white/60 text-xs mb-1">CARDHOLDER</div>
                        <div className="text-white font-semibold">JOHN DOE</div>
                      </div>
                      <div>
                        <div className="text-white/60 text-xs mb-1">EXPIRES</div>
                        <div className="text-white font-semibold">12/28</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                          <span className="text-black text-xs font-bold">VISA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'virtual' && (
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600/40 to-red-800/40 rounded-3xl blur-lg opacity-40"></div>
                <div className="relative bg-gradient-to-br from-red-900 to-red-950 rounded-3xl w-96 h-60 shadow-2xl p-8 flex flex-col justify-between border border-red-800/50">
                  <div className="flex justify-between items-start">
                    <img 
                      src={logo} 
                      alt="Logo" 
                      className="h-7 w-auto object-contain filter brightness-0 invert"
                    />
                    <div className="bg-white/20 rounded-full px-4 py-2 text-white text-sm font-semibold border border-white/30">
                      Virtual
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-white text-2xl font-mono tracking-wider mb-6">
                      •••• •••• •••• 8888
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-white/80 text-xs mb-1">CARDHOLDER</div>
                        <div className="text-white font-semibold">DIGITAL WALLET</div>
                      </div>
                      <div>
                        <div className="text-white/80 text-xs mb-1">EXPIRES</div>
                        <div className="text-white font-semibold">12/25</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                          <span className="text-red-600 text-xs font-bold">VISA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center space-x-4 mt-12">
          <button
            className={`flex items-center space-x-2 px-6 py-3 rounded-full text-lg font-semibold transition-all ${activeTab === 'physical' ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
            onClick={() => handleTabClick('physical')}
          >
            <CreditCard size={20} />
            <span>Physical Card</span>
          </button>
          <button
            className={`flex items-center space-x-2 px-6 py-3 rounded-full text-lg font-semibold transition-all ${activeTab === 'virtual' ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
            onClick={() => handleTabClick('virtual')}
          >
            <Smartphone size={20} />
            <span>Virtual Card</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;