import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CreditCard, Sparkles, Globe, Shield, Zap, Gift } from 'lucide-react';

const PhysicalCard = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Custom Designs',
      description: 'Choose from 12 premium card designs or upload your own artwork to create a truly unique card.'
    },
    {
      icon: Globe,
      title: 'Global Acceptance',
      description: 'Accepted at 40+ million merchants worldwide. Use it anywhere major card networks are accepted.'
    },
    {
      icon: Shield,
      title: 'Contactless Payments',
      description: 'Tap to pay at millions of locations. Fast, secure, and convenient contactless technology.'
    },
    {
      icon: Zap,
      title: 'Instant Top-Up',
      description: 'Load your card instantly from your crypto wallet. Real-time balance updates on every transaction.'
    },
    {
      icon: CreditCard,
      title: 'Premium Materials',
      description: 'Made with high-quality materials for durability and style. Metal card option available.'
    },
    {
      icon: Gift,
      title: 'Cashback Rewards',
      description: 'Earn crypto cashback on every purchase. More you spend, more you earn in crypto rewards.'
    }
  ];

  const cardLevels = [
    {
      name: 'Standard',
      price: 'Free',
      color: 'from-gray-400 to-gray-600',
      benefits: [
        'Basic design options',
        'Global acceptance',
        'Free ATM withdrawals (up to $200/month)',
        '0.5% crypto cashback'
      ]
    },
    {
      name: 'Premium',
      price: '$9.99/month',
      color: 'from-blue-500 to-purple-600',
      benefits: [
        'All custom designs',
        'Priority customer support',
        'Free ATM withdrawals (up to $1,000/month)',
        '1.5% crypto cashback',
        'Airport lounge access',
        'Travel insurance'
      ]
    },
    {
      name: 'Metal',
      price: '$19.99/month',
      color: 'from-yellow-500 to-orange-600',
      benefits: [
        'Exclusive metal card',
        'Custom engraving',
        'Unlimited ATM withdrawals',
        '3% crypto cashback',
        'Concierge service',
        'Premium airport lounges',
        'Comprehensive travel insurance'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Crypto, Your Style, Your Card
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get a premium physical card that brings your crypto to life. Spend your digital assets at millions of locations worldwide with style and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                  Order Physical Card
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  View Designs
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop" 
                alt="Physical Card" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Premium Card Features</h2>
            <p className="text-xl text-gray-600">Everything you expect from a modern payment card</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Card Levels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Card Level</h2>
            <p className="text-xl text-gray-600">Select the card that matches your lifestyle</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
                <div className={`h-48 bg-gradient-to-br ${level.color} p-8 text-white`}>
                  <h3 className="text-3xl font-bold mb-2">{level.name}</h3>
                  <p className="text-4xl font-bold">{level.price}</p>
                </div>
                <div className="p-8">
                  <ul className="space-y-4">
                    {level.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-8 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                    Choose {level.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Fast & Secure Delivery</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Express Shipping</h3>
                  <p className="text-gray-300">Get your card delivered in 3-5 business days anywhere in the world</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Track Your Order</h3>
                  <p className="text-gray-300">Real-time tracking from production to your doorstep</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure Packaging</h3>
                  <p className="text-gray-300">Cards delivered in tamper-proof packaging for maximum security</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop" 
                alt="Delivery" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready for Your Premium Card?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the future of payments with a card that's as unique as you are
          </p>
          <button className="bg-gray-900 text-white px-12 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg">
            Order Your Card Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PhysicalCard;