import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Newspaper, Calendar } from 'lucide-react';

const Press = () => {
  const pressReleases = [
    {
      date: 'March 15, 2025',
      title: '3dotpay Reaches 1 Million Active Users Milestone',
      excerpt: 'Leading crypto payment platform celebrates major growth milestone as adoption accelerates globally.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=400&fit=crop'
    },
    {
      date: 'February 28, 2025',
      title: '3dotpay Expands to 158 Countries with New Partnerships',
      excerpt: 'Global expansion brings crypto payment solutions to millions more users worldwide.',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop'
    },
    {
      date: 'January 10, 2025',
      title: 'New Metal Card Launch: Premium Crypto Card Experience',
      excerpt: 'Introducing the most exclusive crypto card with unprecedented benefits and rewards.',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-center">
            Press & Media
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
            Latest news, press releases, and media resources from 3dotpay.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Press Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((release, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <img src={release.image} alt={release.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {release.date}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{release.title}</h3>
                  <p className="text-gray-600 mb-4">{release.excerpt}</p>
                  <button className="text-red-500 font-medium hover:text-red-600 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Newspaper className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Media Inquiries</h2>
          <p className="text-xl text-gray-300 mb-8">
            For press inquiries, interviews, or media kits, please contact our press team.
          </p>
          <a href="mailto:press@3dotpay.com" className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Contact Press Team
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Press;