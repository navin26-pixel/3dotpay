import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Wallet, TrendingUp, ArrowLeftRight, Shield, Zap, Globe } from 'lucide-react';

const MultiCurrencyWallet = () => {
  const features = [
    {
      icon: Wallet,
      title: 'Multi-Asset Support',
      description: 'Store Bitcoin, Ethereum, USDT, USDC, and 50+ other cryptocurrencies and stablecoins in one secure wallet.'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Exchange Rates',
      description: 'Get live exchange rates and convert between currencies instantly at competitive rates.'
    },
    {
      icon: ArrowLeftRight,
      title: 'Instant Conversions',
      description: 'Swap between cryptocurrencies and stablecoins in seconds with low fees.'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your assets are protected with multi-signature wallets, cold storage, and advanced encryption.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Send and receive funds instantly. No more waiting for confirmations.'
    },
    {
      icon: Globe,
      title: 'Global Payments',
      description: 'Send money to anyone, anywhere in the world, 24/7 with minimal fees.'
    }
  ];

  const supportedAssets = [
    { name: 'Bitcoin', symbol: 'BTC', image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=100&h=100&fit=crop' },
    { name: 'Ethereum', symbol: 'ETH', image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=100&h=100&fit=crop' },
    { name: 'Tether', symbol: 'USDT', image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=100&h=100&fit=crop' },
    { name: 'USD Coin', symbol: 'USDC', image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=100&h=100&fit=crop' },
    { name: 'Binance Coin', symbol: 'BNB', image: 'https://images.unsplash.com/photo-1621416894135-0b2b8b6b6b6b?w=100&h=100&fit=crop' },
    { name: 'Cardano', symbol: 'ADA', image: 'https://images.unsplash.com/photo-1621416894578-5f3c6b4f5d5d?w=100&h=100&fit=crop' }
  ];

  const benefits = [
    'Hold multiple currencies in one place',
    'Convert between assets instantly',
    'Earn interest on your holdings',
    'Set price alerts for your favorite assets',
    'Track your portfolio performance in real-time',
    'Automatic tax reporting',
    'Backup and recovery options',
    'Multi-device sync'
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
                One Wallet for All Your Crypto
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Manage, exchange, and spend multiple cryptocurrencies and stablecoins from a single, secure wallet. Simplify your crypto life with 3dotpay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                  Create Wallet
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop" 
                alt="Multi-Currency Wallet" 
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Wallet Features</h2>
            <p className="text-xl text-gray-600">Everything you need to manage your digital assets</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
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

      {/* Supported Assets */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Supported Cryptocurrencies</h2>
            <p className="text-xl text-gray-600">50+ cryptocurrencies and stablecoins supported</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {supportedAssets.map((asset, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
                <img src={asset.image} alt={asset.name} className="w-16 h-16 mx-auto mb-4 rounded-full" />
                <h3 className="font-semibold text-gray-900">{asset.symbol}</h3>
                <p className="text-sm text-gray-600">{asset.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">and 44+ more cryptocurrencies...</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Wallet?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Experience the most comprehensive multi-currency wallet designed for modern crypto users.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop" 
                alt="Wallet Features" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Bank-Level Security</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Your assets are protected by industry-leading security measures. We use multi-signature wallets, cold storage, and advanced encryption to keep your funds safe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cold Storage</h3>
              <p className="text-gray-600">95% of funds stored offline in secure cold storage</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Signature</h3>
              <p className="text-gray-600">Multiple approvals required for large transactions</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Insurance</h3>
              <p className="text-gray-600">Your funds are insured against theft and hacks</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Managing Your Crypto Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions who trust 3dotpay for their multi-currency wallet needs
          </p>
          <button className="bg-white text-blue-600 px-12 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg">
            Create Your Wallet
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MultiCurrencyWallet;