import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CreditCard, Zap, Shield, Globe, Smartphone, Lock } from 'lucide-react';

const VirtualCard = () => {
  const features = [
    {
      icon: Zap,
      title: 'Instant Issuance',
      description: 'Get your virtual card immediately after account verification. No waiting, start spending in seconds.'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Protected by advanced encryption and tokenization technology. Your card details are never exposed.'
    },
    {
      icon: Globe,
      title: 'Global Acceptance',
      description: 'Use your virtual card for online purchases worldwide, wherever major card networks are accepted.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Manage your virtual card directly from your smartphone. Freeze, unfreeze, or set spending limits instantly.'
    },
    {
      icon: Lock,
      title: 'Disposable Cards',
      description: 'Create temporary virtual cards for one-time purchases to maximize security and privacy.'
    },
    {
      icon: CreditCard,
      title: 'Multiple Cards',
      description: 'Create multiple virtual cards for different purposes - subscriptions, online shopping, or business expenses.'
    }
  ];

  const benefits = [
    'No physical card needed - start using immediately',
    'Perfect for online shopping and subscriptions',
    'Free to create and maintain',
    'Real-time transaction notifications',
    'Set custom spending limits per card',
    'Freeze and unfreeze cards instantly',
    'Works with Apple Pay, Google Pay, and Samsung Pay',
    'Lower fraud risk with tokenization'
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
                Virtual Card for the Digital Age
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get instant access to your crypto funds with our virtual card. Shop online, manage subscriptions, and spend your digital assets anywhere in the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                  Get Virtual Card
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop" 
                alt="Virtual Card" 
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need in a modern virtual card</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop" 
                alt="Benefits" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Virtual Cards?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Virtual cards offer unmatched flexibility and security for online transactions. Here's why millions trust virtual cards for their daily spending.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How to Get Started</h2>
            <p className="text-xl text-gray-300">Three simple steps to your virtual card</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4">Sign Up</h3>
              <p className="text-gray-300">Create your 3dotpay account and complete quick KYC verification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4">Add Funds</h3>
              <p className="text-gray-300">Deposit crypto or stablecoins into your wallet</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4">Start Spending</h3>
              <p className="text-gray-300">Get your virtual card instantly and start making purchases</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Go Virtual?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join millions who trust 3dotpay for their digital spending needs
          </p>
          <button className="bg-gray-900 text-white px-12 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg">
            Get Your Virtual Card Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VirtualCard;