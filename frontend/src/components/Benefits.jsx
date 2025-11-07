import React from 'react';
import { benefits } from '../mockData';

const Benefits = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-16">
         Elevated, <br />Your Everyday Banking.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className="group relative overflow-hidden rounded-3xl h-96 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              style={{
                transform: `translateY(${index % 2 === 0 ? '20px' : '0px'})`
              }}
            >
              {/* Background Image with reduced opacity */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${benefit.image})` }}
              >
                {/* Reduced opacity and better gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
              </div>

              {/* Subtle shadow overlay */}
              <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-black/10 group-hover:shadow-black/20 transition-shadow duration-500"></div>

              {/* Content with better contrast */}
              <div className="relative h-full flex flex-col justify-end p-8 text-white">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">{benefit.title}</h3>
                  <p className="text-base text-white/95 leading-relaxed drop-shadow-md">{benefit.description}</p>
                </div>
              </div>

              {/* Additional colored shadow effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl ${benefit.color.replace('bg-', 'shadow-')}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;