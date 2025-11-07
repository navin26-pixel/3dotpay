import React from 'react';
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

// Feature images mapping
const featureImages = [
  'https://images.unsplash.com/photo-1524673450801-b5aa9b621b76?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxjcnlwdG9jdXJyZW5jeSUyMHBheW1lbnR8ZW58MHx8fGJsdWV8MTc2MjQ5NjM5N3ww&ixlib=rb-4.1.0&q=85', // Customizable Crypto Cards
  'https://images.pexels.com/photos/14911400/pexels-photo-14911400.jpeg', // Instant Virtual Cards
  'https://images.unsplash.com/photo-1597781914467-a5b93258e748?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMHBheW1lbnR8ZW58MHx8fGJsdWV8MTc2MjQ5NjM5N3ww&ixlib=rb-4.1.0&q=85', // Multi-Device Security
  'https://images.unsplash.com/photo-1660642056896-226f0e491116?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwzfHxjcnlwdG9jdXJyZW5jeSUyMHBheW1lbnR8ZW58MHx8fGJsdWV8MTc2MjQ5NjM5N3ww&ixlib=rb-4.1.0&q=85', // Global Acceptance
  'https://images.pexels.com/photos/9169180/pexels-photo-9169180.jpeg', // Multi-Currency Support
  'https://images.pexels.com/photos/6694477/pexels-photo-6694477.jpeg' // Low-Fee Transactions
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50/80">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Gradient Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                
                <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-red-100">
                  
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <img 
                      src={featureImages[index]} 
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative p-8">
                    {/* Icon Container */}
                    <div className="relative mb-8">
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
                  </div>

                  {/* Subtle Hover Indicator */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-pink-600 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-16 border-t border-slate-200/60">
          <p className="text-slate-600 text-lg mb-6">
            Ready to experience the future of payments?
          </p>
          <button className="bg-slate-900 text-white hover:bg-slate-800 rounded-full px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;