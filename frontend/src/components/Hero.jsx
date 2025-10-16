import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522543558187-768b6df7c25c?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-500/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Where Crypto Meets<br />Real Life
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Empowering Global Payments with Stablecoins
        </p>
        <Button 
          size="lg" 
          className="bg-white text-slate-900 hover:bg-gray-100 rounded-full px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          Download the app
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;