import React from 'react'

const Section3 = () => {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Designed with ultimate simplicity.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Eliminate noise and keep focus on what matters. Pure light aesthetics with subtle contrasts for a premium visual experience.
          </p>
          <div className="pt-2">
            <a 
              href="#explore" 
              className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-black group"
            >
              Explore component library
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Right Column - Visual Card */}
        <div className="h-80 w-full rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center p-6 shadow-sm">
          <div className="w-full max-w-xs space-y-4">
            <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
            <div className="h-10 w-full bg-gray-200 rounded-lg border border-gray-300/50"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3