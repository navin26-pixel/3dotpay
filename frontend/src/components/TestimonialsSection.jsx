import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      countryFlag: "https://flagcdn.com/w160/th.png",
      countryName: "Thailand",
      text: "They make our life split between two continents possible. Transfers are simple and very, very fast.",
      author: "Somchai",
      link: "#",
      bgColor: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      countryFlag: "https://flagcdn.com/w160/ph.png",
      countryName: "Philippines",
      text: "Always fast transactions and good fees. An invaluable online platform for those who live outside their own country or are frequent travelers.",
      author: "Maria",
      link: "#",
      bgColor: "bg-gradient-to-br from-rose-600 to-red-700"
    },
    {
      countryFlag: "https://flagcdn.com/w160/us.png",
      countryName: "United States",
      text: "I use this service to pay a mortgage in a different country each month. Superb. That simple.",
      author: "Gerald",
      link: "#",
      bgColor: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      countryFlag: "https://flagcdn.com/w160/gb.png",
      countryName: "United Kingdom",
      text: "The best money travel buddy! Makes finances easier to deal with instantly.",
      author: "Emma",
      link: "#",
      bgColor: "bg-gradient-to-br from-rose-600 to-red-700"
    },
    {
      countryFlag: "https://flagcdn.com/w160/th.png",
      countryName: "Thailand",
      text: "This platform has been a lifesaver for me as a student in a foreign country.",
      author: "Nattapong",
      link: "#",
      bgColor: "bg-gradient-to-br from-red-500 to-red-600"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm w-fit">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded flex items-center justify-center" style={{ backgroundColor: 'rgb(235, 0, 40)' }}>
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-900">
                    4.8 ★ on Trustpilot{' '}
                    <span className="text-gray-500 font-normal">15,482 reviews</span>
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              For people going places
            </h1>

            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white hover:shadow-xl shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
                style={{ 
                  border: '2px solid rgb(235, 0, 40)'
                }}
                aria-label="Previous testimonial"
              >
                <ArrowLeft 
                  className="w-5 h-5 transition-colors duration-300" 
                  style={{ color: 'rgb(235, 0, 40)' }}
                />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-white hover:shadow-xl shadow-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
                style={{ 
                  border: '2px solid rgb(235, 0, 40)'
                }}
                aria-label="Next testimonial"
              >
                <ArrowRight 
                  className="w-5 h-5 transition-colors duration-300" 
                  style={{ color: 'rgb(235, 0, 40)' }}
                />
              </button>
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-2"
                >
                  <div className={`${testimonial.bgColor} rounded-2xl p-8 shadow-xl h-full flex flex-col justify-between min-h-[400px]`}>
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <img 
                          src={testimonial.countryFlag} 
                          alt={testimonial.countryName}
                          className="w-16 h-16 rounded-lg shadow-md object-cover border-2 border-white"
                        />
                      </div>
                      
                      <blockquote className="text-white text-xl md:text-2xl font-medium leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                    </div>

                    <div className="mt-8">
                      <a
                        href={testimonial.link}
                        className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
                      >
                        {testimonial.author} on Trustpilot
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-8' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  style={index === currentIndex ? { backgroundColor: 'rgb(235, 0, 40)' } : {}}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;