import React from 'react'

const Section3 = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Designed with ultimate simplicity.
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Eliminate noise and keep focus on what matters. Pure dark mode styling with subtle contrasts for a premium dark aesthetics vibe.
          </p>
          <div className="pt-2">
            <a 
              href="#explore" 
              className="inline-flex items-center text-sm font-semibold text-neutral-200 hover:text-white group"
            >
              Explore component library
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Right Column - Visual Card */}
        <div className="h-80 w-full rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center p-6 shadow-2xl">
          <div className="w-full max-w-xs space-y-4">
            <div className="h-3 w-3/4 bg-neutral-800 rounded"></div>
            <div className="h-3 w-1/2 bg-neutral-800 rounded"></div>
            <div className="h-10 w-full bg-neutral-800 rounded-lg pt-2 border border-neutral-700/50"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3