import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">

      {/* Soft Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black opacity-90"></div>
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-red-600/20 rounded-full blur-[160px]"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[200px]"></div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl lg:text-5xl font-semibold mb-6 tracking-tight">
          Your Money Should Move Smooth
        </h2>
        <p className="text-lg text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Spend, send, and receive without friction. Simple. Clear. No stress.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-neutral-200 rounded-full px-10 py-6 text-lg font-medium transition-all duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border border-white/30 text-white hover:bg-white hover:text-black rounded-full px-10 py-6 text-lg font-medium transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTA
