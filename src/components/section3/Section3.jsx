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
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f4f7fb] px-6 py-24 text-[#172033]">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,32,51,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,32,51,0.08)_1px,transparent_1px)] [background-size:4rem_4rem]" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#aadcff]/45 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl space-y-12">
        {/* Top Header Section */}
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#e1873d]">
            <span className="h-2 w-2 rounded-full bg-[#e1873d]" />
            03 / Built to last
          </span>

          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#172033] sm:text-6xl">
            Designed for clarity.
            <br /> <span className="text-[#e1873d]">Ready for momentum.</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-[#526078] md:text-lg">
            A thoughtful foundation for teams that want every customer
            touchpoint to feel considered.
          </p>
        </div>

        {/* 2-Column Functional Interactive Layout */}
        <div className="grid items-stretch gap-8 md:grid-cols-[0.82fr_1.18fr]">
          {/* Column 1: Feature Selector Tabs */}
          <div className="space-y-4 flex flex-col justify-center">
            {features.map((feature, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                aria-pressed={activeTab === idx}
                className={`group w-full rounded-2xl border p-6 text-left transition-all duration-300 ${
                  activeTab === idx
                    ? "border-[#172033] bg-[#172033] text-white shadow-xl shadow-[#172033]/20"
                    : "border-[#172033]/10 bg-white/70 hover:border-[#e1873d]/60 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border transition-all ${
                      activeTab === idx
                        ? "border-[#f2d98a] bg-[#f2d98a] text-[#172033]"
                        : "border-[#172033]/10 bg-[#aadcff]/35 text-[#526078] group-hover:bg-[#aadcff]/55"
                    }`}
                  >
                    {feature.tag}
                  </span>
                  <span
                    className={`text-sm font-bold transition-colors ${
                      activeTab === idx ? "text-[#f2d98a]" : "text-[#e1873d]"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                </div>
                <h3
                  className={`text-xl font-bold transition-colors ${activeTab === idx ? "text-white" : "text-[#172033] group-hover:text-[#e1873d]"}`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`mt-3 hidden text-sm transition-colors sm:block ${activeTab === idx ? "text-slate-300" : "text-[#526078]"}`}
                >
                  {feature.description}
                </p>
              </button>
            ))}

            {/* Actions Bar moved below selection */}
            <div className="pt-4">
              <button className="w-full rounded-xl bg-[#e1873d] px-6 py-3 text-center font-bold text-white shadow-lg shadow-[#e1873d]/20 transition-all duration-300 hover:bg-[#c96f2e] active:scale-95">
                Get Started
              </button>
            </div>
          </div>

          {/* Column 2: Active Feature Display Panel */}
          <div className="relative flex min-h-[400px] flex-col justify-center rounded-2xl border border-[#172033]/10 bg-white/80 p-8 shadow-xl shadow-[#172033]/10 md:p-10">
            <div className="flex items-center gap-6 mb-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#aadcff] text-[#172033] shadow-lg">
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
                <span className="inline-block rounded-full bg-[#aadcff]/45 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#526078]">
                  Selected focus
                </span>
                <h3 className="mt-2 text-3xl font-bold leading-tight text-[#172033] sm:text-4xl">
                  {features[activeTab].title}
                </h3>
              </div>
            </div>

            <p className="mb-8 text-lg font-medium leading-8 text-[#526078]">
              {features[activeTab].description}
            </p>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <button className="flex-1 rounded-lg bg-[#172033] px-6 py-3.5 font-bold text-white shadow-lg shadow-[#172033]/20 transition-all hover:bg-[#2b3b57] active:scale-95">
                Explore docs
              </button>
              <button className="flex-1 rounded-lg border-2 border-[#172033]/20 bg-transparent px-6 py-3.5 font-bold text-[#172033] transition-all hover:border-[#e1873d] hover:text-[#e1873d]">
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
