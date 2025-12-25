import React, { useEffect, useState } from 'react';
import { features } from '../mockData';

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Phone screen images that match your features
  const phoneScreens = [
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=280&h=560&fit=crop', // Customizable Crypto Cards
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=280&h=560&fit=crop', // Instant Virtual Cards
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=280&h=560&fit=crop', // Multi-Device Security
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=280&h=560&fit=crop', // Global Acceptance
    'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=280&h=560&fit=crop', // Multi-Currency Support
    'https://images.unsplash.com/photo-1556155092-490a1ba16284?w=280&h=560&fit=crop' // Low-Fee Transactions
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = document.getElementById('features-scroll-section');
      
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollProgress = (scrollY - sectionTop) / (sectionHeight - windowHeight);
        const newIndex = Math.min(Math.floor(scrollProgress * features.length), features.length - 1);
        
        if (newIndex >= 0) {
          setActiveIndex(newIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="features-scroll-section" className="relative hidden md:block" style={{ height: `${features.length * 100}vh` }}>
      
      {/* Fixed Phone Container */}
      <div className="sticky top-0 h-screen flex items-center justify-end pr-40">
        <div className="relative flex h-[300px] w-[150px] lg:h-[600px] lg:w-[300px] items-center justify-center">
          {/* Phone Shell */}
          <img 
            src="https://staticsource1.redotpay.com/web/img/home/v3/phone-shell.webp"
            className="absolute inset-0 z-10 h-full w-full object-contain"
            alt="3dotpay Mobile App" 
          />
          
          {/* Phone Screen */}
          <div className="relative h-[280px] w-[140px] overflow-hidden rounded-[18px] lg:h-[560px] lg:w-[280px] bg-gray-100">
            <img 
              src={phoneScreens[activeIndex]} 
              className="absolute h-full w-full object-cover transition-opacity duration-500"
              alt={features[activeIndex]?.title || 'Feature'}
            />
          </div>
        </div>
      </div>

      {/* Scrollable Text Sections */}
      {features.map((feature, index) => (
        <div 
          key={index}
          className="absolute top-0 left-0 w-full h-screen flex items-center"
          style={{ top: `${index * 100}vh` }}
        >
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              
              {/* Text Content - Left Side */}
              <div className="max-w-2xl">
                <div className="space-y-8">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-100">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-700 font-medium text-sm">
                      {feature.title.split(' ')[0]}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                    {feature.title}
                  </h2>

                  {/* Description */}
                  <p className="text-xl text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Button */}
                  <button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-4 text-lg font-semibold transition-colors">
                    Learn more
                  </button>
                </div>
              </div>

              {/* Empty Space for Phone */}
              <div className="h-[300px] w-[150px] lg:h-[600px] lg:w-[300px] opacity-0">
                {/* Spacing for phone */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

// Mobile fallback using your features data
const MobileFeatures = () => {
  return (
    <section className="md:hidden py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-100 mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-700 font-medium text-sm">Why Choose 3dotpay</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Built for the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              Future of Money
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg">
                {feature.description}
              </p>
              <button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-6 py-3 mt-4 text-base font-semibold transition-colors">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main component
const FeaturesWithScroll = () => {
  return (
    <>
      <Features />
      <MobileFeatures />
    </>
  );
};

export default FeaturesWithScroll;