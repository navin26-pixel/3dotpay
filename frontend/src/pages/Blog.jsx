import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BookOpen, TrendingUp, Lightbulb } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: '10 Ways to Maximize Your Crypto Card Rewards',
      category: 'Tips & Tricks',
      date: 'March 10, 2025',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop',
      excerpt: 'Learn how to earn maximum cashback and rewards with your 3dotpay crypto card.'
    },
    {
      title: 'Understanding Multi-Currency Wallets',
      category: 'Education',
      date: 'March 5, 2025',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      excerpt: 'A comprehensive guide to managing multiple cryptocurrencies in one wallet.'
    },
    {
      title: 'The Future of Digital Payments',
      category: 'Industry Insights',
      date: 'February 28, 2025',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      excerpt: 'Exploring trends shaping the future of cryptocurrency and digital payments.'
    },
    {
      title: 'Security Best Practices for Crypto Users',
      category: 'Security',
      date: 'February 20, 2025',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      excerpt: 'Essential security tips to keep your digital assets safe.'
    },
    {
      title: 'How to Send International Payments with P2P',
      category: 'Guides',
      date: 'February 15, 2025',
      image: 'https://images.unsplash.com/photo-1556742400-b5a79e896ded?w=600&h=400&fit=crop',
      excerpt: 'Step-by-step guide to sending money internationally using P2P transfers.'
    },
    {
      title: 'Virtual vs Physical Cards: Which is Right for You?',
      category: 'Comparison',
      date: 'February 10, 2025',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      excerpt: 'Compare the benefits of virtual and physical crypto cards to make the right choice.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            3dotpay Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, guides, and news from the world of crypto payments
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-red-500 uppercase">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-red-500 font-medium hover:text-red-600 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;