import React from 'react'

const Section3 = () => {
  return (
    <section className="min-h-screen w-full bg-white text-black flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Simple & Clean Design
        </h2>
        
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          A minimalist layout on a crisp white background. Perfect for modern landing pages, portfolios, or product showcases.
        </p>

        <div className="pt-4">
          <button className="px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}

export default Section3