import React, { useRef, useEffect, useState } from 'react';
import { CreditCard, Zap, Shield, Globe, Wallet, ArrowLeftRight } from 'lucide-react';
import { features } from '../mockData';

const iconMap = {
  CreditCard,
  Zap,
  Shield,
  Globe,
  Wallet,
  ArrowLeftRight
};

const Features = () => {
  const sectionRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);

  // Mock images for each feature - replace with your actual images
  const featureImages = [
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop', // Custom cards
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop', // Virtual card
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop', // Security
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', // Global
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop', // Multi-currency
    'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=600&h=400&fit=crop' // Low fees
  ];

  // Mobile app interface data
  const cryptoData = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$43,250', change: '+2.3%', trend: 'up' },
    { symbol: 'ETH', name: 'Ethereum', price: '$2,850', change: '+1.7%', trend: 'up' },
    { symbol: 'SOL', name: 'Solana', price: '$102', change: '+5.2%', trend: 'up' },
    { symbol: 'USDT', name: 'Tether', price: '$1.00', change: '0.0%', trend: 'stable' },
    { symbol: 'USDC', name: 'USD Coin', price: '$1.00', change: '0.0%', trend: 'stable' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureElements = entry.target.querySelectorAll('.feature-item');
            featureElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
              }, index * 200);
            });
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

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-100 mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-700 font-medium text-sm">Why Choose 3dotpay</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Built for the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Future of Money
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Experience next-generation financial tools designed for the crypto era. 
            Secure, fast, and borderless—just like your digital assets.
          </p>
        </div>

        {/* Mobile App Preview + Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mobile App Preview */}
          <div className="relative">
            <div className="sticky top-24">
              {/* Mobile Device Frame */}
              <div className="relative mx-auto w-80 h-[600px] bg-slate-900 rounded-[2.5rem] border-[14px] border-slate-900 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                
                {/* Screen Content */}
                <div className="relative w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] overflow-hidden">
                  {/* App Header */}
                  <div className="pt-12 px-6 pb-4 bg-gradient-to-r from-red-500 to-pink-600">
                    <div className="flex items-center justify-between text-white">
                      <h3 className="text-xl font-bold">3dotpay Wallet</h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm">Live</span>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm mt-1">Your crypto, your control</p>
                  </div>

                  {/* Crypto Prices List */}
                  <div className="p-4 space-y-3">
                    {cryptoData.map((crypto, index) => (
                      <div
                        key={crypto.symbol}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                              <span className="font-bold text-sm">{crypto.symbol}</span>
                            </div>
                            <div>
                              <div className="font-semibold">{crypto.name}</div>
                              <div className="text-white/60 text-sm">{crypto.price}</div>
                            </div>
                          </div>
                          <div className={`text-sm font-semibold ${
                            crypto.trend === 'up' ? 'text-green-400' : 
                            crypto.trend === 'down' ? 'text-red-400' : 'text-white/60'
                          }`}>
                            {crypto.change}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Transaction Preview */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-white/60">Recent Transaction</span>
                      <span className="text-green-400 text-sm">Completed</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                          <CreditCard className="w-4 h-4" />
                        </div>
                        <span>Card Payment</span>
                      </div>
                      <span className="font-semibold">-$45.99</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-red-500 to-pink-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <div
                  key={index}
                  className="feature-item opacity-0 transform translate-y-8 transition-all duration-500"
                >
                  <div className="group relative bg-white rounded-2xl p-8 border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-red-100">
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                        {Icon && <Icon className="h-8 w-8 text-white" />}
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full border border-slate-200 flex items-center justify-center">
                        <span className="text-xs font-bold text-red-600">{index + 1}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {feature.description}
                    </p>

                    {/* Hover Indicator */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-pink-600 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Feature Showcase */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-100">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-red-700 font-medium text-sm">Feature {index + 1}</span>
                </div>
                <h3 className="text-4xl font-bold text-slate-900 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                    {iconMap[feature.icon] && React.createElement(iconMap[feature.icon], { className: "h-6 w-6 text-white" })}
                  </div>
                  <span className="text-lg font-semibold text-slate-700">
                    Included with 3dotpay
                  </span>
                </div>
              </div>

              {/* Image/Visual Content */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <img
                    src={featureImages[index]}
                    alt={feature.title}
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
                  
                  {/* Floating Card Elements for Customizable Cards */}
                  {index === 0 && (
                    <>
                      <div className="absolute -top-4 -right-4 w-32 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-2xl transform rotate-12 animate-float"></div>
                      <div className="absolute -bottom-4 -left-4 w-28 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-2xl transform -rotate-6 animate-float delay-1000"></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-16 border-t border-slate-200/60">
          <p className="text-slate-600 text-lg mb-6">
            Ready to experience the future of payments?
          </p>
          <button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            Start Your Journey
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-10px) rotate(12deg); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Features;