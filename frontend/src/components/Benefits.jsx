import React, { useEffect, useRef, useState } from 'react';

const ACCENT_RED = '#CC0317';

const benefits = [
  {
    id: 1,
    title: "Global Transfers",
    description: "Send crypto, receive local currency anywhere. Works in seconds.",
    metric: "12 seconds",
    metricLabel: "Avg settlement",
  },
  {
    id: 2,
    title: "Multi-Currency",
    description: "Hold crypto and fiat in one place. Switch instantly.",
    metric: "42",
    metricLabel: "Currencies supported",
  },
  {
    id: 3,
    title: "Crypto Credit",
    description: "Borrow against your assets without selling position.",
    metric: "80%",
    metricLabel: "Max LTV",
  },
  {
    id: 4,
    title: "Staking Rewards",
    description: "Earn on your digital assets while you hold.",
    metric: "5.8%",
    metricLabel: "Avg APY",
  },
];

const Benefits = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header - colder, more direct */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Built to move money
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Infrastructure for modern transactions. No complexity.
            </p>
          </div>
        </div>

        {/* Grid with asymmetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-white border border-gray-200 rounded-lg overflow-hidden ${
                index === 1 ? 'md:-translate-y-4' : index === 3 ? 'md:translate-y-4' : ''
              }`}
              style={{
                opacity: visibleCards.includes(index) ? 1 : 0,
                transform: visibleCards.includes(index) 
                  ? 'translateY(0)' 
                  : 'translateY(30px)',
                transition: `opacity 0.5s ease-out ${index * 100}ms, transform 0.5s ease-out ${index * 100}ms`
              }}
            >
              <div className="p-8">
                {/* Number - subtle */}
                <div className="mb-4">
                  <div className="text-sm text-gray-400 font-medium">
                    0{index + 1}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {benefit.description}
                </p>

                {/* Metric - numbers first */}
                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl font-bold text-slate-900">
                      {benefit.metric}
                    </div>
                    <div className="text-sm text-gray-500">
                      {benefit.metricLabel}
                    </div>
                  </div>
                </div>
              </div>

              {/* Accent bar (static, not animated) */}
              <div 
                className="h-1 w-full"
                style={{ backgroundColor: ACCENT_RED }}
              />
            </div>
          ))}
        </div>

        {/* Bottom section - minimal */}
        <div className="mt-32 pt-8 border-t border-gray-200">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <div className="text-sm text-gray-500 mb-2">
                ACCESS
              </div>
              <div className="text-xl font-medium text-slate-900">
                Get started with $10 minimum
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400"
              />
              <button 
                className="px-6 py-3 font-medium rounded-lg hover:opacity-90 transition-opacity"
                style={{ 
                  backgroundColor: ACCENT_RED,
                  color: 'white'
                }}
              >
                Open wallet
              </button>
            </div>
            
            <div className="text-xs text-gray-400 text-center mt-4">
              No commitments. Cancel anytime.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;