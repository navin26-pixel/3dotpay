import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const HelpCenter = () => {
  const categories = [
    { title: 'Getting Started', icon: '🚀', articles: 12 },
    { title: 'Account Management', icon: '👤', articles: 18 },
    { title: 'Cards & Payments', icon: '💳', articles: 24 },
    { title: 'Security', icon: '🔒', articles: 15 },
    { title: 'Fees & Limits', icon: '💰', articles: 10 },
    { title: 'Troubleshooting', icon: '🔧', articles: 20 }
  ];

  const popularArticles = [
    'How to create an account and get verified',
    'How to order a virtual or physical card',
    'Understanding transaction fees',
    'How to add funds to your wallet',
    'Resetting your password',
    'How to contact customer support'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            How Can We Help?
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Search our knowledge base or contact support
          </p>
          <div className="max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for help..." 
              className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.articles} articles</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Popular Articles</h2>
          <div className="space-y-4">
            {popularArticles.map((article, index) => (
              <div key={index} className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer">
                <span className="text-2xl mr-4">📄</span>
                <span className="text-lg text-gray-900">{article}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-gray-300 mb-4">Available 24/7</p>
              <button className="text-red-500 hover:text-red-400">Start Chat</button>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300 mb-4">support@3dotpay.com</p>
              <button className="text-red-500 hover:text-red-400">Send Email</button>
            </div>
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300 mb-4">+1 (888) 3DOT-PAY</p>
              <button className="text-red-500 hover:text-red-400">Call Now</button>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-300 mb-4">Find our offices</p>
              <button className="text-red-500 hover:text-red-400">View Locations</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenter;