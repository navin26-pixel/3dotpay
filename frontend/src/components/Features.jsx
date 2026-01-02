import React, { useState } from 'react';
import { 
  QrCode, 
  Wallet, 
  Smartphone, 
  Store, 
  ArrowLeftRight, 
  Percent,
  ChevronRight
} from 'lucide-react';

// Hero Section
const CardsHero = () => {
  return (
    <section className="relative bg-white text-black py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-black">
            Crypto that works in Thailand
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Spend crypto like cash at street food stalls across Thailand.
          </p>
        </div>
      </div>
    </section>
  );
};

// Features Section
const CardsFeatures = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: QrCode,
      title: 'Pay with QR Code',
      description: 'Scan and pay anywhere in Thailand.',
      screenType: 'qr'
    },
    {
      icon: Wallet,
      title: 'Thailand-First Crypto Wallet',
      description: 'Store crypto and spend it locally.',
      screenType: 'wallet'
    },
    {
      icon: Smartphone,
      title: 'Instant Local Transfers',
      description: 'Send money using phone number or Jua ID.',
      screenType: 'transfer'
    },
    {
      icon: Store,
      title: 'Merchant Crypto Payments',
      description: 'Merchants receive THB. Users pay with crypto.',
      screenType: 'merchant'
    },
    {
      icon: ArrowLeftRight,
      title: 'Multi-Currency Bridge',
      description: 'Switch between THB and crypto with clear rates.',
      screenType: 'bridge'
    },
    {
      icon: Percent,
      title: 'Low Fees. Clear Rates.',
      description: 'Know the fee before you pay.',
      screenType: 'fees'
    }
  ];

  const phoneScreens = {
    qr: (
      <div className="w-full h-full bg-white rounded-2xl p-4 flex flex-col">
        <div className="text-center mb-4">
          <div className="text-sm text-gray-500">Scan to Pay</div>
          <div className="text-lg font-bold text-black">฿ 150.00</div>
          <div className="text-xs text-gray-500">Som Tum Stall</div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-40 h-40 bg-black flex items-center justify-center">
            <div className="grid grid-cols-4 gap-1 w-32 h-32">
              {Array(16).fill(0).map((_, i) => (
                <div 
                  key={i} 
                  className={i % 2 === 0 ? 'bg-white rounded-sm' : 'bg-black rounded-sm'}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <div className="text-xs text-gray-500 mb-2">Jua Code</div>
          <div className="text-sm text-gray-500">Valid for 5 minutes</div>
        </div>
      </div>
    ),
    wallet: (
      <div className="w-full h-full bg-gray-50 rounded-2xl p-4">
        <div className="text-center mb-6">
          <div className="text-xs text-gray-500 mb-1">Total Balance</div>
          <div className="text-2xl font-bold text-black">฿ 12,540.75</div>
          <div className="text-sm text-gray-500">≈ $345.60 USD</div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-black text-xs font-bold">฿</span>
              </div>
              <div>
                <div className="font-semibold text-black">Thai Baht</div>
                <div className="text-xs text-gray-500">Local currency</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-black">฿ 8,250.00</div>
              <div className="text-xs text-gray-500">+2.5%</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-black text-xs font-bold">J</span>
              </div>
              <div>
                <div className="font-semibold text-black">Jua Token</div>
                <div className="text-xs text-gray-500">Native token</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-black">1,250 JUA</div>
              <div className="text-xs text-gray-500">+5.2%</div>
            </div>
          </div>
        </div>
      </div>
    ),
    transfer: (
      <div className="w-full h-full bg-gray-50 rounded-2xl p-4">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
            <span className="text-gray-600 font-bold">👤</span>
          </div>
          <div>
            <div className="font-bold text-black">Somchai Wong</div>
            <div className="text-xs text-gray-500">+66 98 765 4321</div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 mb-4 border border-gray-200">
          <div className="text-center">
            <div className="text-sm text-gray-500 mb-1">Sending</div>
            <div className="text-3xl font-bold text-black">฿ 500</div>
            <div className="text-xs text-gray-500">≈ 14.20 USDT</div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-xs text-gray-500 mb-2">Transfer initiated</div>
          <div className="flex items-center justify-center">
            <div className="w-2 h-2 bg-[#CD0210] rounded-full mr-2"></div>
            <div className="text-sm text-[#CD0210] font-semibold">Completed in 2s</div>
          </div>
        </div>
      </div>
    ),
    merchant: (
      <div className="w-full h-full bg-gray-50 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="font-bold text-black">7-Eleven</div>
            <div className="text-xs text-gray-500">Sukhumvit Road, Bangkok</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Receiving</div>
            <div className="text-xl font-bold text-[#CD0210]">฿ 89.00</div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 mb-4 border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-500">Items</span>
            <span className="font-semibold text-black">3</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Sandwich</span>
              <span className="text-black">฿ 45.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Water</span>
              <span className="text-black">฿ 15.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Chips</span>
              <span className="text-black">฿ 29.00</span>
            </div>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 text-center">
          Merchant receives THB instantly
        </div>
      </div>
    ),
    bridge: (
      <div className="w-full h-full bg-gray-50 rounded-2xl p-4">
        <div className="text-center mb-6">
          <div className="text-sm text-gray-500 mb-2">Exchange Rate</div>
          <div className="text-2xl font-bold text-black">1 USDT = ฿ 35.20</div>
          <div className="text-xs text-gray-500">Live rate • Updated now</div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">You send</div>
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-black">100</div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-black text-xs">฿</span>
                </div>
                <span className="font-semibold text-black">THB</span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <ArrowLeftRight className="w-5 h-5 text-gray-500" />
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="text-xs text-gray-500 mb-1">You receive</div>
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-black">2.84</div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-black text-xs">U</span>
                </div>
                <span className="font-semibold text-black">USDT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    fees: (
      <div className="w-full h-full bg-gray-50 rounded-2xl p-4">
        <div className="text-center mb-6">
          <div className="text-sm text-gray-500 mb-2">Fee Breakdown</div>
          <div className="text-2xl font-bold text-black">฿ 150.00</div>
          <div className="text-xs text-gray-500">Total payment</div>
        </div>
        
        <div className="bg-white rounded-xl p-4 mb-4 border border-gray-200">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Transfer amount</span>
              <span className="font-semibold text-black">฿ 150.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Network fee</span>
              <span className="text-gray-500">฿ 0.15</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Service fee</span>
              <span className="text-gray-500">฿ 0.00</span>
            </div>
            <div className="h-px bg-gray-200 my-2"></div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-black">You pay</span>
              <span className="font-bold text-black">฿ 150.15</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-xs text-gray-500">No hidden fees</div>
        </div>
      </div>
    )
  };

  return (
    <section className="relative bg-white py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Features List */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl font-bold mb-8 text-black">How it works</h2>
            <div className="space-y-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`cursor-pointer transition-all duration-200 rounded-xl p-5 ${
                      activeFeature === index 
                        ? 'bg-red-500/5 border-l-4 border-[#CD0210]'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                        activeFeature === index 
                          ? 'bg-[#CD0210] text-white'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-lg font-semibold mb-1 ${
                          activeFeature === index ? 'text-black' : 'text-gray-700'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className={`text-sm ${
                          activeFeature === index ? 'text-gray-700' : 'text-gray-500'
                        }`}>
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10 p-6 rounded-2xl bg-gray-50 border border-gray-200">
              <h3 className="text-xl font-bold mb-3 text-black">Ready to start?</h3>
              <p className="text-gray-500 mb-6">
                Join thousands of Thais using Jua for daily payments.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-white text-[#CD0210] border border-[#CD0210] hover:bg-gray-100 rounded-xl px-6 py-3 font-semibold transition-all flex items-center justify-center">
                  <span>Download App</span>
                  <ChevronRight className="w-4 h-4 ml-2" />
                </button>
                <button className="flex-1 bg-transparent border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl px-6 py-3 font-semibold transition-all">
                  Learn more
                </button>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end lg:sticky lg:top-20">
            <div className="relative">
              <div className="relative w-[280px] h-[560px]">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[40px] p-5 shadow-2xl">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl"></div>
                  
                  <div className="w-full h-full rounded-[28px] overflow-hidden bg-gray-900 relative">
                    <div 
                      key={activeFeature}
                      className="w-full h-full transition-opacity duration-300"
                    >
                      {phoneScreens[features[activeFeature].screenType]}
                    </div>
                    
                    <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-6 h-6 bg-[#CD0210] rounded-lg mr-2"></div>
                          <span className="text-white font-semibold">Jua</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#CD0210] rounded-full"></div>
                          <span className="text-xs text-gray-300">฿ THB</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full"></div>
                </div>
                
                <div className="absolute -left-2 top-24 w-1 h-8 bg-gray-700 rounded-r"></div>
                <div className="absolute -left-2 top-40 w-1 h-12 bg-gray-700 rounded-r"></div>
                <div className="absolute -right-2 top-32 w-1 h-16 bg-gray-700 rounded-l"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component
export default function App() {
  return (
    <div className="bg-white">
      <CardsHero />
      <CardsFeatures />
    </div>
  );
}