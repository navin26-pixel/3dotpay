import React from 'react';
import { CreditCard, Zap, Shield, Globe, Wallet, ArrowLeftRight } from 'lucide-react';
import { features } from '../mockData'; // Import from mockData

const iconMap = {
  CreditCard,
  Zap,
  Shield,
  Globe,
  Wallet,
  ArrowLeftRight
};

const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Powerful Features for Modern Payments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage and spend your crypto with confidence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500 transition-colors duration-300">
                  {Icon && <Icon className="h-7 w-7 text-red-500 group-hover:text-white transition-colors duration-300" />}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;