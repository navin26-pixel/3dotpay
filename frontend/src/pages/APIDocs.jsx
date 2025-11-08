import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Code, BookOpen, Terminal, Zap } from 'lucide-react';

const APIDocs = () => {
  const apiFeatures = [
    { icon: Code, title: 'RESTful API', description: 'Simple, intuitive REST API with JSON responses' },
    { icon: Zap, title: 'Real-time Webhooks', description: 'Get instant notifications for all events' },
    { icon: Terminal, title: 'SDKs & Libraries', description: 'Official libraries for popular languages' },
    { icon: BookOpen, title: 'Comprehensive Docs', description: 'Detailed documentation with examples' }
  ];

  const endpoints = [
    { method: 'GET', path: '/api/v1/wallet/balance', description: 'Get wallet balance' },
    { method: 'POST', path: '/api/v1/cards/create', description: 'Create a new virtual card' },
    { method: 'GET', path: '/api/v1/transactions', description: 'List all transactions' },
    { method: 'POST', path: '/api/v1/transfers/p2p', description: 'Send P2P transfer' },
    { method: 'GET', path: '/api/v1/cards/:id', description: 'Get card details' },
    { method: 'PUT', path: '/api/v1/cards/:id/freeze', description: 'Freeze/unfreeze card' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build powerful integrations with the 3dotpay API. Access our crypto payment infrastructure programmatically.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Quick Start</h2>
          <div className="bg-gray-900 text-white p-8 rounded-xl mb-8">
            <p className="text-gray-400 mb-4"># Install the SDK</p>
            <code className="text-green-400">npm install @3dotpay/api-client</code>
            <p className="text-gray-400 mt-6 mb-4"># Initialize the client</p>
            <pre className="text-blue-300">
{`import { ThreeDotPay } from '@3dotpay/api-client';

const client = new ThreeDotPay({
  apiKey: 'your_api_key',
  environment: 'production'
});`}
            </pre>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-6">API Endpoints</h3>
          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <div key={index} className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                <span className={`px-3 py-1 rounded font-mono text-sm font-semibold mr-4 ${
                  endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                  endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                  'bg-orange-100 text-orange-700'
                }`}>
                  {endpoint.method}
                </span>
                <code className="font-mono text-gray-900 flex-grow">{endpoint.path}</code>
                <span className="text-gray-600">{endpoint.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Building?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Get your API keys and start integrating 3dotpay into your application
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Get API Keys
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors font-medium">
              View Full Docs
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default APIDocs;