import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, MessageSquare, Heart, Award } from 'lucide-react';

const Community = () => {
  const communityChannels = [
    {
      icon: MessageSquare,
      title: 'Discord',
      members: '50,000+',
      description: 'Join our vibrant Discord community for real-time discussions',
      link: '#',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Telegram',
      members: '75,000+',
      description: 'Connect with users worldwide in our Telegram groups',
      link: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageSquare,
      title: 'Reddit',
      members: '30,000+',
      description: 'Share ideas and get help from the community',
      link: '#',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: MessageSquare,
      title: 'Forum',
      members: '25,000+',
      description: 'Official 3dotpay community forum for in-depth discussions',
      link: '#',
      color: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with millions of 3dotpay users worldwide. Share experiences, get help, and stay updated.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className={`h-32 bg-gradient-to-r ${channel.color} p-6 flex items-center justify-center`}>
                    <Icon className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{channel.title}</h3>
                    <p className="text-red-500 font-semibold mb-4">{channel.members} members</p>
                    <p className="text-gray-600 mb-6">{channel.description}</p>
                    <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                      Join {channel.title}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Community Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Get Support</h3>
              <p className="text-gray-600">Receive help from experienced community members and our support team</p>
            </div>
            <div className="text-center">
              <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Earn Rewards</h3>
              <p className="text-gray-600">Participate in community events and contests to win prizes</p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Network</h3>
              <p className="text-gray-600">Connect with crypto enthusiasts and professionals worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Community Guidelines</h2>
          <p className="text-xl text-gray-300 mb-8">
            We're building a respectful, inclusive community. Please read our guidelines before joining.
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
            Read Guidelines
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;