import React from 'react';
import { Button } from './ui/button';
import cover from '../images/bg-hero.webp'; 

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - FIXED */}
      <div className="absolute inset-0 z-0">
        <img 
          src={cover} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div> {/* Darker overlay for better text visibility */}
      </div>

      {/* Content - Left Aligned with Margin */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl ml-0 lg:ml-16"> {/* Added margin-left */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-left">
            Change the way of <br />transaction
          </h1>
          <p className="text-xl sm:text-xl text-white/90 mb-12 max-w-xl text-left">
            Home or abroad, crypto or cash — move freely with stablecoins. Sign up in a tap
          </p>
          <div className="text-left">
            <Button 
              size="lg" 
              className="bg-[rgba(0, 0, 0, 1)] text-white rounded-full px-10 py-6 text-lg font-semibold shadow-xl "
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section> 
  );
};

export default Hero;