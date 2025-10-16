import React from 'react';
import { Button } from './ui/button';

const CardsSection = () => {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">Our Cards</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Digital-First Spending, Made Simple
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Experience effortless, secure payments for subscriptions, travel, and everyday purchases.
          </p>
          <Button 
            variant="outline" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-full px-8 py-6 text-lg transition-all duration-300"
          >
            Read more
          </Button>
        </div>

        {/* Card Mockup */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Phone Frame */}
            <div className="bg-slate-900 rounded-[3rem] p-4 shadow-2xl border-8 border-slate-800">
              <div className="bg-slate-950 rounded-[2.5rem] overflow-hidden">
                {/* Phone Screen */}
                <div className="p-6">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center mb-8 text-xs text-gray-400">
                    <span>9:41</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-4 h-3 border border-gray-400 rounded-sm"></div>
                      <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Header */}
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold">Cards</h3>
                    <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Virtual Card */}
                  <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-6 mb-4 shadow-xl">
                    <div className="flex justify-between items-start mb-12">
                      <span className="text-xs font-semibold">VIRTUAL CARD</span>
                      <div className="w-10 h-8 bg-white/20 rounded"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-white/70">Card Number</div>
                      <div className="text-lg font-mono">**** **** **** 3482</div>
                    </div>
                    <div className="flex justify-between mt-6">
                      <div>
                        <div className="text-xs text-white/70">Expiry</div>
                        <div className="text-sm font-mono">12/28</div>
                      </div>
                      <div>
                        <div className="text-xs text-white/70">CVV</div>
                        <div className="text-sm font-mono">***</div>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-800 rounded-xl p-4 text-center">
                      <div className="text-xs text-gray-400">Freeze</div>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-4 text-center">
                      <div className="text-xs text-gray-400">Details</div>
                    </div>
                    <div className="bg-slate-800 rounded-xl p-4 text-center">
                      <div className="text-xs text-gray-400">Settings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;