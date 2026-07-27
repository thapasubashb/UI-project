import React, { useState } from "react";

const Section2 = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "performance",
      title: "Lightning Fast Performance",
      description:
        "Optimized for speed and high throughput, ensuring your users get instant responses without lag.",
      stat: "< 50ms latency",
      details:
        "Edge-cached content delivery coupled with serverless execution keeps TTFB minimal globally.",
      icon: (
        <svg
          className="w-6 h-6 text-sky-400 group-hover:text-cyan-300 transition-colors"
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
      id: "security",
      title: "Bank-Grade Security",
      description:
        "End-to-end encryption with zero-knowledge architecture to keep your data safe and private.",
      stat: "AES-256 & SOC2",
      details:
        "Automated compliance checks, granular RBAC permissions, and real-time threat prevention.",
      icon: (
        <svg
          className="w-6 h-6 text-sky-400 group-hover:text-cyan-300 transition-colors"
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
      id: "analytics",
      title: "Real-time Analytics",
      description:
        "Deep insights into user behavior and system health with customizable live dashboards.",
      stat: "Live telemetry",
      details:
        "Stream events directly into your warehouse with sub-second event processing pipelines.",
      icon: (
        <svg
          className="w-6 h-6 text-sky-400 group-hover:text-cyan-300 transition-colors"
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
    <section className="min-h-screen w-full bg-[#0d1117] text-slate-100 flex items-center justify-center py-24 px-6 relative overflow-hidden font-sans">
      {/* Background Decorator Grids & Glowing Light Blue Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      
      {/* Dynamic Glowing Aura */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-sky-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10 space-y-16">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium tracking-wider text-sky-300 uppercase bg-sky-950/60 border border-sky-500/30 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.2)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
            Built For Growth
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Everything you need to build{" "}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              faster
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Empower your workflow with a modern tech stack engineered for scale, reliability, and speed.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const isSelected = activeFeature === index;
            return (
              <div
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`group cursor-pointer p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border transition-all duration-300 shadow-lg flex flex-col justify-between relative ${
                  isSelected
                    ? "border-sky-400/80 ring-1 ring-sky-400/40 shadow-[0_0_30px_rgba(56,189,248,0.15)] -translate-y-1 bg-slate-900/80"
                    : "border-slate-800 hover:border-sky-500/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:-translate-y-0.5"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-xl bg-sky-950/50 border border-sky-500/20 flex items-center justify-center group-hover:scale-105 group-hover:border-sky-400/50 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] transition-all duration-300">
                      {feature.icon}
                    </div>
                    {/* Dynamic Stat Pill */}
                    <span className="text-xs font-medium text-sky-300 bg-sky-950/80 px-2.5 py-1 rounded-full border border-sky-500/30">
                      {feature.stat}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>

                {/* Interactive Link */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-sm font-semibold text-sky-400 group-hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                    Explore feature
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Panel */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900/80 border border-sky-500/30 shadow-[0_0_30px_rgba(56,189,248,0.1)] backdrop-blur-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-300 relative overflow-hidden">
          <div className="absolute -left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-blue-600" />
          <div className="space-y-1 max-w-2xl">
            <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
              Selected Focus &bull; {features[activeFeature].title}
            </div>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              {features[activeFeature].details}
            </p>
          </div>
          <a
            href="#docs"
            className="whitespace-nowrap px-6 py-2.5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white rounded-xl text-sm font-semibold transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] active:scale-95"
          >
            Read Documentation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section2;