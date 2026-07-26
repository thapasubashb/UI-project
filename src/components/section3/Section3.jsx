import React from 'react'

const Section3 = () => {
  const features = [
    { title: 'Lightning Fast', desc: 'Optimized for performance and seamless speed.' },
    { title: 'Fully Responsive', desc: 'Looks fantastic on everything from mobile to 4K displays.' },
    { title: 'Modern Stack', desc: 'Built with React and styled cleanly using Tailwind CSS.' },
  ]

  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Built for modern web experiences.
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl">
          Everything you need to ship faster and elevate your user interface.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        {features.map((feature, idx) => (
          <div 
            key={idx} 
            className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-neutral-100">{feature.title}</h3>
            <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section3
Option 2: Minimal Call to Action (CTA)
Great if you want a striking section to direct the user to sign up, contact, or launch a product.

JavaScript
import React from 'react'

const Section3 = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl w-full text-center space-y-8">
        <span className="text-xs uppercase tracking-widest font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 px-4 py-1.5 rounded-full">
          Ready to build?
        </span>
        
        <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Take your project to the next level today.
        </h2>

        <p className="text-neutral-400 text-lg sm:text-xl max-w-xl mx-auto">
          Join thousands of developers and designers building cleaner digital products.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition">
            Get Started
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 text-neutral-300 font-semibold rounded-lg border border-neutral-800 hover:bg-neutral-800 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Section3
Option 3: Two-Column Showcase
Great if you want text on one side and a visual element (an image, preview card, or code snippet) on the other.

JavaScript
import React from 'react'