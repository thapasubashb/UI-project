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