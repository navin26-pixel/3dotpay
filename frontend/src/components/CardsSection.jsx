import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Smartphone, CreditCard, Zap, Shield } from 'lucide-react';

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
    <section className="relative bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden min-h-screen flex items-center justify-center">
      
      {/* Background with subtle brand elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Brand color accents */}
        <div className="absolute top-20 right-20 w-48 h-48 bg-[#EB0028]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#EB0028]/3 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Content Area */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] py-12 gap-16">
          
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            
            {/* Physical Card Content */}
            <div className={`transition-all duration-500 ease-out ${
              activeTab === 'physical' 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4 absolute pointer-events-none'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#EB0028] rounded-xl flex items-center justify-center shadow-sm">
                  <CreditCard className="h-5 w-5 text-white" />
                </div>
                <span className="text-slate-700 font-semibold text-base">Physical Cards</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Premium Metal Cards
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                Experience luxury with our metal cards. Accepted worldwide, designed for the crypto elite with enhanced security features.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 bg-[#EB0028]/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-4 w-4 text-[#EB0028]" />
                  </div>
                  <span className="text-sm">Enhanced Security</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 bg-[#EB0028]/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-4 w-4 text-[#EB0028]" />
                  </div>
                  <span className="text-sm">Instant Activation</span>
                </div>
              </div>
              
              <Button className="bg-[#EB0028] text-white hover:bg-[#D10024] rounded-full px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                Order Physical Card
              </Button>
            </div>

            {/* Virtual Card Content */}
            <div className={`transition-all duration-500 ease-out ${
              activeTab === 'virtual' 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4 absolute pointer-events-none'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#EB0028] rounded-xl flex items-center justify-center shadow-sm">
                  <Smartphone className="h-5 w-5 text-white" />
                </div>
                <span className="text-slate-700 font-semibold text-base">Virtual Cards</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Instant Digital Cards
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                Generate virtual cards instantly. Perfect for online shopping, subscriptions, and contactless payments with Apple Pay & Google Wallet.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 bg-[#EB0028]/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-4 w-4 text-[#EB0028]" />
                  </div>
                  <span className="text-sm">Instant Generation</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-8 h-8 bg-[#EB0028]/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-4 w-4 text-[#EB0028]" />
                  </div>
                  <span className="text-sm">Disposable Options</span>
                </div>
              </div>
              
              <Button className="bg-[#EB0028] text-white hover:bg-[#D10024] rounded-full px-8 py-4 text-base font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                Create Virtual Card
              </Button>
            </div>
          </div>

          {/* Card Visuals */}
          <div className="flex-1 flex justify-center lg:justify-end">
            
            {/* Physical Card Visual */}
            <div className={`relative transition-all duration-500 ease-out ${
              activeTab === 'physical' 
                ? 'opacity-100 scale-100 translate-x-0' 
                : 'opacity-0 scale-95 translate-x-8 absolute pointer-events-none'
            }`}>
              
              {/* Card Container */}
              <div className="relative group cursor-pointer">
                
                {/* Card Shadow */}
                <div className="absolute -inset-2 bg-[#EB0028]/10 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 w-72 h-44 border border-slate-200 shadow-lg transform group-hover:scale-105 transition-all duration-300">
                  
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-4">
                    {/* Card Chip */}
                    <div className="w-10 h-7 bg-gradient-to-r from-slate-400 to-slate-300 rounded-md shadow-sm"></div>
                    {/* Contactless Icon */}
                    <div className="w-6 h-6 bg-[#EB0028]/10 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-[#EB0028] rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Card Number */}
                  <div className="text-slate-800 font-mono text-base tracking-widest mb-4">
                    •••• •••• •••• 1234
                  </div>
                  
                  {/* Card Footer */}
                  <div className="flex justify-between items-center">
                    <div className="text-slate-500 text-xs font-medium">
                      CARDHOLDER NAME
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Your Logo Placeholder */}
                      <div className="w-10 h-6 bg-[#EB0028] rounded flex items-center justify-center text-white text-xs font-bold">
                        3DP
                      </div>
                    </div>
                  </div>
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
              
              {/* Card Label */}
              <div className="text-center mt-6">
                <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-sm font-medium border border-slate-200">
                  Premium Metal Card
                </span>
              </div>
            </div>

            {/* Virtual Card Visual */}
            <div className={`relative transition-all duration-500 ease-out ${
              activeTab === 'virtual' 
                ? 'opacity-100 scale-100 translate-x-0' 
                : 'opacity-0 scale-95 translate-x-8 absolute pointer-events-none'
            }`}>
              
              {/* Phone Container */}
              <div className="relative group cursor-pointer">
                
                {/* Phone Shadow */}
                <div className="absolute -inset-2 bg-[#EB0028]/10 rounded-3xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                
                {/* Phone Mockup */}
                <div className="relative bg-slate-800 rounded-3xl p-3 w-64 border-8 border-slate-900 shadow-lg transform group-hover:scale-105 transition-all duration-300">
                  
                  {/* Phone Screen */}
                  <div className="bg-white rounded-xl p-4 h-60">
                    
                    {/* App Header */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-slate-900 text-sm font-semibold">Virtual Card</div>
                      <div className="text-[#EB0028] text-xs">Active</div>
                    </div>
                    
                    {/* Virtual Card */}
                    <div className="bg-gradient-to-r from-[#EB0028] to-[#FF3366] rounded-lg p-4 shadow-sm mb-3">
                      
                      {/* Card Header */}
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-white/80 text-xs">VIRTUAL CARD</div>
                        <div className="w-5 h-3 bg-white/30 rounded"></div>
                      </div>
                      
                      {/* Card Number */}
                      <div className="text-white font-mono text-sm tracking-widest mb-3">
                        •••• •••• •••• 5678
                      </div>
                      
                      {/* Card Footer */}
                      <div className="flex justify-between items-center text-white/70 text-xs">
                        <div>VALID THRU 12/25</div>
                        {/* Your Logo */}
                        <div className="w-7 h-5 bg-white/20 rounded flex items-center justify-center text-white text-xs font-bold">
                          3DP
                        </div>
                      </div>
                    </div>
                    
                    {/* Add to Wallet Buttons */}
                    <div className="flex gap-2">
                      <div className="flex-1 bg-slate-100 rounded-lg py-2 text-center text-slate-700 text-xs font-medium border border-slate-200">
                        Apple Pay
                      </div>
                      <div className="flex-1 bg-slate-100 rounded-lg py-2 text-center text-slate-700 text-xs font-medium border border-slate-200">
                        Google Pay
                      </div>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="w-16 h-1 bg-slate-600 rounded-full mx-auto mt-3"></div>
                </div>
              </div>
              
              {/* Phone Label */}
              <div className="text-center mt-6">
                <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full text-sm font-medium border border-slate-200">
                  Instant Virtual Card
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 border border-slate-200 shadow-lg">
            <button
              onClick={() => handleTabClick('physical')}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'physical'
                  ? 'bg-[#EB0028] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <CreditCard className="h-4 w-4" />
              Physical Cards
            </button>
            <button
              onClick={() => handleTabClick('virtual')}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'virtual'
                  ? 'bg-[#EB0028] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Smartphone className="h-4 w-4" />
              Virtual Cards
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;