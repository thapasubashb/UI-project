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
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-sky-700 uppercase bg-sky-50 border border-sky-200 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.25)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse shadow-[0_0_8px_#38bdf8]" />
            Minimal by Design
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
              Simple &amp; Clean Design
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            A minimalist layout on a crisp white background. Perfect for modern
            landing pages, portfolios, or product showcases.
          </p>
        </div>



            {/* Actions Bar moved below selection */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-[0_0_15px_rgba(56,189,248,0.35)] hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all duration-300 active:scale-95 text-center">
                Get Started
              </button>
              <a
                href="#learn-more"
                className="flex-1 px-6 py-3 border border-slate-200 bg-white/80 backdrop-blur-xl text-slate-700 font-semibold rounded-xl hover:border-sky-300 hover:text-sky-700 transition-all duration-300 text-center"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Column 2: Active Feature Display Panel */}
          <div className="rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-xl p-8 shadow-[0_0_30px_rgba(56,189,248,0.15)] flex flex-col justify-center relative min-h-[280px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center shadow-sm">
                <svg
                  className="w-7 h-7 text-sky-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {features[activeTab].icon}
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600">
                  Selected Focus
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {features[activeTab].title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              {features[activeTab].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;