import React, { useState } from "react";

const Section3 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "Refined Visual Hierarchy",
      description:
        "Balanced spacing and clear typography for a polished presentation.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      tag: "Design System",
    },
    {
      title: "Fast and Lightweight",
      description:
        "A clean structure that remains elegant and responsive on every screen.",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
      tag: "Performance",
    },
  ];

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 text-slate-900 flex items-center justify-center py-24 px-6 relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-200/60 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-blue-200/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-200/50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10 space-y-12">
        {/* Top Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider text-sky-700 uppercase bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-200 rounded-full shadow-lg hover:shadow-xl backdrop-blur-md transition-shadow">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse shadow-[0_0_8px_#38bdf8]" />
            Minimal by Design
          </span>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Simple &amp; Clean
            </span>
            <br />
            <span className="text-slate-900">Design System</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A minimalist layout built for modern landing pages, portfolios, and
            product showcases with perfect spacing and typography.
          </p>
        </div>

        {/* 2-Column Functional Interactive Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Column 1: Feature Selector Tabs */}
          <div className="space-y-4 flex flex-col justify-center">
            {features.map((feature, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                aria-pressed={activeTab === idx}
                className={`group w-full text-left transition-all duration-300 p-6 rounded-2xl border transform hover:scale-105 ${
                  activeTab === idx
                    ? "bg-gradient-to-br from-sky-50 to-indigo-50 ring-2 ring-sky-400 shadow-xl shadow-sky-200/50 scale-105 border-transparent"
                    : "bg-white border-slate-200 hover:shadow-lg hover:border-sky-200"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all ${
                      activeTab === idx
                        ? "bg-sky-200 text-sky-800 border-sky-300"
                        : "bg-sky-50 text-sky-700 border-sky-100 group-hover:bg-sky-100"
                    }`}
                  >
                    {feature.tag}
                  </span>
                  <span
                    className={`text-sm font-bold transition-colors ${
                      activeTab === idx ? "text-sky-600" : "text-slate-400"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 hidden sm:block group-hover:text-slate-700 transition-colors">
                  {feature.description}
                </p>
              </button>
            ))}

            {/* Actions Bar moved below selection */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-600 hover:from-sky-600 hover:via-indigo-600 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg shadow-sky-300/50 hover:shadow-xl hover:shadow-sky-400/60 transition-all duration-300 active:scale-95 text-center transform hover:scale-105">
                Get Started
              </button>
              <a
                href="#learn-more"
                className="flex-1 px-6 py-3 border-2 border-sky-300 bg-white text-sky-700 font-bold rounded-xl hover:bg-sky-50 hover:border-sky-400 transition-all duration-300 text-center transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Column 2: Active Feature Display Panel */}
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center relative min-h-[400px]">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 via-indigo-500 to-blue-600 flex items-center justify-center text-white shadow-lg transform transition-transform hover:scale-110">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {features[activeTab].icon}
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-3 py-1 rounded-full inline-block">
                  ✨ Selected Focus
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 leading-tight">
                  {features[activeTab].title}
                </h3>
              </div>
            </div>

            <p className="text-slate-700 text-lg leading-8 font-medium mb-8">
              {features[activeTab].description}
            </p>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <button className="flex-1 px-6 py-3.5 bg-gradient-to-r from-sky-500 to-indigo-600 text-white rounded-lg font-bold shadow-lg shadow-sky-300/50 hover:shadow-xl hover:shadow-sky-400/60 transition-all active:scale-95 transform hover:scale-105">
                Explore Docs →
              </button>
              <button className="flex-1 px-6 py-3.5 border-2 border-sky-300 rounded-lg text-sky-700 font-bold bg-sky-50 hover:bg-sky-100 hover:border-sky-400 transition-all transform hover:scale-105">
                Start Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
