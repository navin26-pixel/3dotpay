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
          <h1 className="text-6xl font-bold mb-4">Your Payment Cards</h1>
          <p className="text-xl text-neutral-400">Choose the perfect card for every situation</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 mb-20">
          {/* Content */}
          <div className="flex-1 max-w-xl">
            {activeTab === 'physical' && (
              <div>
                <h2 className="text-5xl font-bold mb-6">Spend Freely Everywhere</h2>
                <p className="text-xl text-neutral-300 mb-8">
                  Use your card anywhere in the world. Contactless payments, chip & PIN security, and instant notifications.
                </p>
                <button className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-4 text-lg font-semibold transition-all">
                  Get Physical Card →
                </button>
              </div>
            )}

            {activeTab === 'virtual' && (
              <div>
                <h2 className="text-5xl font-bold mb-6">Secure Online Payments</h2>
                <p className="text-xl text-neutral-300 mb-8">
                  Create virtual cards instantly for online shopping. Enhanced security with spending limits you control.
                </p>
                <button className="bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-4 text-lg font-semibold transition-all">
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
                  {/* Logo */}
                  <div className="flex justify-between items-start">
                    <img 
                      src={logo} 
                      alt="Logo" 
                      className="h-8 w-auto object-contain filter brightness-0 invert"
                    />
                  </div>
                  
                  {/* Card Details */}
                  <div>
                    <div className="text-white text-2xl font-mono tracking-wider mb-6">
                      •••• •••• •••• 4242
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-white/60 text-xs mb-1">Experi</div>
                        <div className="text-white font-semibold">12/28</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white/60 text-xs mb-1">CVV</div>
                        <div className="text-white font-semibold">•••</div>
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
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl blur-lg opacity-40"></div>
                <div className="relative bg-[#EB0028] rounded-2xl w-96 h-48 shadow-2xl p-6 flex flex-col justify-between">
                  {/* Logo */}
                  <div className="flex justify-between items-start">
                    <img 
                      src={logo} 
                      alt="Logo" 
                      className="h-7 w-auto object-contain filter brightness-0 invert"
                    />
                    <div className="bg-white/20 rounded px-2 py-1 text-white text-xs font-semibold inline-block">
                      Virtual
                    </div>
                  </div>
                  
                  {/* Card Details */}
                  <div>
                    <div className="text-white text-xl font-mono tracking-wider mb-4">
                      •••• •••• •••• 8888
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-white/80 text-xs mb-1">EXPIRES</div>
                        <div className="text-white font-semibold">12/25</div>
                      </div>
                      <div className="text-right">
                        <div className="text-white/80 text-xs mb-1">CVV</div>
                        <div className="text-white font-semibold">•••</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                          <span className="text-[#EB0028] text-xs font-bold">VISA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4">
          <button 
            onClick={() => handleTabClick('physical')} 
            className={`px-8 py-4 rounded-full font-semibold transition-all ${
              activeTab === 'physical' 
                ? 'bg-white text-black' 
                : 'border-2 border-white/30 text-white hover:border-white/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Physical Cards
            </div>
          </button>
          <button 
            onClick={() => handleTabClick('virtual')} 
            className={`px-8 py-4 rounded-full font-semibold transition-all ${
              activeTab === 'virtual' 
                ? 'bg-white text-black' 
                : 'border-2 border-white/30 text-white hover:border-white/50'
            }`}
          >
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5" />
              Virtual Cards
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;