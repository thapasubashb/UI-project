import React from "react";

const Section2 = () => {
  const features = [
    {
      title: "Lightning Fast Performance",
      description:
        "Optimized for speed and high throughput, ensuring your users get instant responses without lag.",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Bank-Grade Security",
      description:
        "End-to-end encryption with zero-knowledge architecture to keep your data safe and private.",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "Real-time Analytics",
      description:
        "Deep insights into user behavior and system health with customizable live dashboards.",
      icon: (
        <svg
          className="w-6 h-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="min-h-screen w-full bg-white text-slate-100 flex items-center justify-center py-24 px-6 relative overflow-hidden">
      {/* Soft Ambient Radial Background Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-3.5 py-1.5 text-xs font-semibold tracking-wider text-indigo-700 uppercase bg-indigo-50 border border-indigo-100 rounded-full">
            Built For Growth
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Everything you need to build faster
          </h2>
          <p className="text-lg text-slate-600">
            Empower your workflow with a modern tech stack engineered for scale, reliability, and speed.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100/80 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-100/60 transition-all duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <a
                  href="#learn-more"
                  className="text-sm font-semibold text-indigo-600 group-hover:text-indigo-700 flex items-center gap-1 transition-colors"
                >
                  Learn more
                  <span className="group-hover:translate-x-1 transition-transform duration-200">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;