import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Handshake, Globe, TrendingUp, Users } from 'lucide-react';

const Partners = () => {
  const partnerTypes = [
    {
      icon: Handshake,
      title: 'Strategic Partners',
      description: 'Leading financial institutions and technology companies partnering with us to revolutionize payments.',
      partners: ['Global Bank Corp', 'TechFin Solutions', 'CryptoSecure', 'PaymentGateway Inc']
    },
    {
      icon: Globe,
      title: 'Network Partners',
      description: 'Payment networks enabling global acceptance of 3dotpay cards.',
      partners: ['Visa', 'Mastercard', 'UnionPay', 'JCB']
    },
    {
      icon: TrendingUp,
      title: 'Exchange Partners',
      description: 'Leading cryptocurrency exchanges providing liquidity and seamless conversions.',
      partners: ['CryptoEx Global', 'Digital Asset Exchange', 'TokenTrade', 'CoinMarket Pro']
    },
    {
      icon: Users,
      title: 'Integration Partners',
      description: 'Technology partners helping us deliver the best experience to our users.',
      partners: ['CloudService Inc', 'SecureAuth', 'DataAnalytics Pro', 'API Gateway']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Partners
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading organizations worldwide to provide the best crypto payment experience.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {type.partners.map((partner, idx) => (
                      <div key={idx} className="bg-gray-50 p-3 rounded-lg text-center text-sm font-medium text-gray-700">
                        {partner}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
          <p className="text-xl text-gray-300 mb-8">
            Interested in partnering with 3dotpay? Let's explore opportunities together.
          </p>
          <button className="bg-white text-gray-900 px-12 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg">
            Contact Partnership Team
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;