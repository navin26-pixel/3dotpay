import React from 'react';
import { benefits } from '../mockData';
import { Button } from './ui/button';

const Benefits = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-16">
          Your Everyday Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="group relative overflow-hidden rounded-3xl h-96 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                transform: `translateY(${index % 2 === 0 ? '20px' : '0px'})`
              }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${benefit.image})` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-white/90">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;