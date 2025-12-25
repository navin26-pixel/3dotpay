import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../images/hero-bg-new.jpg';

const ACCENT_RED = '#CF051D';

const Hero = () => {
  return (
    <section className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="text-white text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            Send stable.<br />
            Receive local.
          </h1>

          {/* Subtext */}
          <p className="text-white/90 text-lg lg:text-xl mb-10 leading-relaxed">
            Transfer stablecoins anywhere. Your recipient gets local currency instantly.
          </p>

          {/* CTA */}
          <button
            className="group inline-flex items-center px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: ACCENT_RED }}
          >
            Create wallet
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;