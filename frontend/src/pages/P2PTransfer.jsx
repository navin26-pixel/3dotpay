import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, Zap, Shield, DollarSign, Globe, TrendingDown } from 'lucide-react';

const P2PTransfer = () => {
  const features = [
    {
      icon: Users,
      title: 'Direct Transfers',
      description: 'Send money directly to anyone, anywhere without intermediaries. Peer-to-peer transfers made simple.'
    },
    {
      icon: Zap,
      title: 'Instant Settlement',
      description: 'Transfers complete in seconds, not days. Real-time processing for all P2P transactions.'
    },
    {
      icon: TrendingDown,
      title: 'Near-Zero Fees',
      description: 'Pay minimal fees for P2P transfers. No hidden charges, transparent pricing.'
    },
    {
      icon: Shield,
      title: 'Escrow Protection',
      description: 'All transfers protected by smart contract escrow. Your funds are safe until confirmed.'
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Send and receive from 158+ countries. Connect with millions of users worldwide.'
    },
    {
      icon: DollarSign,
      title: 'Multi-Currency',
      description: 'Transfer in any supported cryptocurrency or stablecoin. Automatic conversion available.'
    }
  ];

  const useCases = [
    {
      title: 'Split Bills',
      description: 'Easily split restaurant bills, rent, or group expenses with friends',
      image: 'https://images.unsplash.com/photo-1556742400-b5a79e896ded?w=600&h=400&fit=crop'
    },
    {
      title: 'Pay Freelancers',
      description: 'Pay contractors and freelancers globally with zero hassle',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop'
    },
    {
      title: 'Family Remittance',
      description: 'Send money to family abroad quickly and affordably',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&h=400&fit=crop'
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
                Send Money Instantly to Anyone
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transfer crypto to friends, family, or anyone worldwide. Fast, secure, and affordable P2P transfers with 3dotpay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                  Start Sending
                </button>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  How It Works
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop" 
                alt="P2P Transfer" 
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose P2P Transfers?</h2>
            <p className="text-xl text-gray-600">The fastest way to send money person-to-person</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4">
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

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For Every Need</h2>
            <p className="text-xl text-gray-600">Send money for any occasion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={useCase.image} alt={useCase.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Send Money in 3 Simple Steps</h2>
            <p className="text-xl text-gray-300">Transfer funds in under a minute</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-2xl font-semibold mb-4">Choose Recipient</h3>
              <p className="text-gray-300">Select from your contacts or enter their wallet address or email</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-2xl font-semibold mb-4">Enter Amount</h3>
              <p className="text-gray-300">Choose the cryptocurrency and amount you want to send</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-2xl font-semibold mb-4">Confirm & Send</h3>
              <p className="text-gray-300">Review details and confirm. Money arrives in seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why 3dotpay P2P is Better</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">3dotpay</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Traditional Banks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-900">Transfer Speed</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">Instant</td>
                  <td className="px-6 py-4 text-center text-gray-600">1-5 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">Fees</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">Near Zero</td>
                  <td className="px-6 py-4 text-center text-gray-600">$15-45</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">Available</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">24/7</td>
                  <td className="px-6 py-4 text-center text-gray-600">Business hours</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">Global Reach</td>
                  <td className="px-6 py-4 text-center text-green-600 font-semibold">158+ countries</td>
                  <td className="px-6 py-4 text-center text-gray-600">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Start Sending Money Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join millions who trust 3dotpay for fast, secure P2P transfers
          </p>
          <button className="bg-white text-green-600 px-12 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg">
            Send Your First Transfer
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default P2PTransfer;