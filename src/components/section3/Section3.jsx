import React, { useState } from "react";

const Section3 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "Refined Visual Hierarchy",
      description:
        "Balanced spacing and clear typography for a polished presentation.",
      detail:
        "A structured layout helps users scan the value quickly, understand the product story, and feel confident in the experience before taking action.",
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
      detail:
        "The foundation stays lightweight without sacrificing clarity, so the product feels modern, fast, and dependable across each customer touchpoint.",
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
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f4f7fb] px-5 py-24 text-[#172033] sm:px-6">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,32,51,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,32,51,0.08)_1px,transparent_1px)] [background-size:4rem_4rem]" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#aadcff]/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-10 h-52 w-52 rounded-full bg-[#f2d98a]/35 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl space-y-12">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#e1873d]">
            <span className="h-2 w-2 rounded-full bg-[#e1873d]" />
            03 / Built to last
          </span>

          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.05em] text-[#172033] sm:text-5xl lg:text-6xl">
            Designed for clarity.
            <br /> <span className="text-[#e1873d]">Ready for momentum.</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-[#526078] md:text-lg">
            A thoughtful foundation for teams that want every customer
            touchpoint to feel considered.
          </p>
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-[0.82fr_1.18fr] md:items-center">
          <div className="flex flex-col justify-center space-y-4">
            {features.map((feature, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                aria-pressed={activeTab === idx}
                className={`group w-full rounded-[1.5rem] border p-6 text-left transition-all duration-300 hover:-translate-y-0.5 ${
                  activeTab === idx
                    ? "border-[#172033] bg-[#172033] text-white shadow-[0_26px_60px_-25px_rgba(23,32,51,0.55)]"
                    : "border-[#172033]/10 bg-white/75 hover:border-[#e1873d]/60 hover:bg-white"
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] transition-all ${
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
                  className={`mt-3 hidden text-sm leading-6 transition-colors sm:block ${activeTab === idx ? "text-slate-300" : "text-[#526078]"}`}
                >
                  {feature.description}
                </p>
              </button>
            ))}

            <div className="pt-2">
              <button className="w-full rounded-xl bg-[#e1873d] px-6 py-3 text-center font-bold text-white shadow-lg shadow-[#e1873d]/20 transition-all duration-300 hover:bg-[#c96f2e] active:scale-95">
                Get Started
              </button>
            </div>
          </div>

          <div className="relative flex min-h-[400px] flex-col justify-center rounded-[2rem] border border-[#172033]/10 bg-white/80 p-8 shadow-[0_28px_80px_-34px_rgba(23,32,51,0.45)] md:p-10">
            <div className="mb-8 flex items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-[#aadcff] text-[#172033] shadow-[0_18px_28px_-16px_rgba(84,160,255,0.8)]">
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {features[activeTab].icon}
                </svg>
              </div>
              <div className="flex-1">
                <span className="inline-block rounded-full bg-[#aadcff]/45 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#526078]">
                  Selected focus
                </span>
                <h3 className="mt-2 text-3xl font-bold leading-tight text-[#172033] sm:text-4xl">
                  {features[activeTab].title}
                </h3>
              </div>
            </div>

            <p className="mb-6 text-lg font-medium leading-8 text-[#526078]">
              {features[activeTab].description}
            </p>

            <div className="rounded-2xl border border-[#172033]/10 bg-[linear-gradient(135deg,#f7fafd_0%,#eef4ff_100%)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
              <p className="text-base leading-7 text-[#526078]">
                {features[activeTab].detail}
              </p>
            </div>

            <div className="mt-auto flex flex-col gap-4 pt-8 sm:flex-row">
              <button className="flex-1 rounded-xl bg-[#172033] px-6 py-3.5 font-bold text-white shadow-lg shadow-[#172033]/20 transition-all hover:bg-[#2b3b57] active:scale-95">
                Explore docs
              </button>
              <button className="flex-1 rounded-xl border-2 border-[#172033]/20 bg-transparent px-6 py-3.5 font-bold text-[#172033] transition-all hover:border-[#e1873d] hover:text-[#e1873d]">
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
