import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Users, Globe, Award } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize access to financial services by bridging the gap between traditional and digital currencies.'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'We put our users at the center of everything we do, building products that solve real problems.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Breaking down borders and making financial services accessible to everyone, everywhere.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Continuously pushing boundaries to deliver cutting-edge financial technology solutions.'
    }
  ];

  const timeline = [
    { year: '2020', event: 'Company founded', description: 'Started with a vision to revolutionize crypto payments' },
    { year: '2021', event: 'Virtual card launch', description: 'Launched our first virtual crypto card product' },
    { year: '2022', event: '1M users milestone', description: 'Reached 1 million active users worldwide' },
    { year: '2023', event: 'Physical cards', description: 'Introduced premium physical crypto cards' },
    { year: '2024', event: 'Global expansion', description: 'Expanded to 158+ countries with full regulatory compliance' },
    { year: '2025', event: 'Next chapter', description: 'Leading the future of digital payments' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Building the Future of Payments
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            At 3dotpay, we're on a mission to make digital currencies as easy to use as traditional money. We believe everyone should have access to the global financial system.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop" 
            alt="Team" 
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <span className="text-2xl font-bold text-red-500">{item.year}</span>
                </div>
                <div className="flex-grow border-l-2 border-gray-300 pl-8 pb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.event}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-red-500 mb-2">158+</div>
              <div className="text-gray-300">Countries</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-500 mb-2">1M+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-500 mb-2">$5B+</div>
              <div className="text-gray-300">Transaction Volume</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-500 mb-2">500+</div>
              <div className="text-gray-300">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Us on Our Journey</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of the financial revolution. Start using 3dotpay today.
          </p>
          <button className="bg-gray-900 text-white px-12 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg">
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;