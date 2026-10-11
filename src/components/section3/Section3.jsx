import React, { useState } from "react";
import "./Section3.css";

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
    <section className="section-three relative w-full overflow-hidden px-5 py-20 sm:px-6 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,32,51,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,32,51,0.08)_1px,transparent_1px)] [background-size:4rem_4rem]" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#aadcff]/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-10 h-52 w-52 rounded-full bg-[#f2d98a]/35 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl space-y-12">
        <div className="section-three__intro mx-auto max-w-3xl space-y-5 text-center">
          <span className="section-three__eyebrow inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em]">
            <span className="h-2 w-2 rounded-full bg-[#e1873d]" />
            03 / Built to last
          </span>

          <h2 className="section-three__title mx-auto max-w-4xl text-4xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Designed for clarity.
            <br /> <span>Ready for momentum.</span>
          </h2>

          <p className="section-three__description mx-auto max-w-2xl text-base leading-7 md:text-lg">
            A thoughtful foundation for teams that want every customer
            touchpoint to feel considered.
          </p>
        </div>

        <div className="grid items-stretch gap-8 md:grid-cols-[0.82fr_1.18fr] md:items-center lg:gap-10">
          <div className="flex flex-col justify-center space-y-4">
            {features.map((feature, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                aria-pressed={activeTab === idx}
                className="section-three__tab group w-full rounded-[1.5rem] border p-6 text-left transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className="section-three__tab-tag rounded-full border px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] transition-all"
                  >
                    {feature.tag}
                  </span>
                  <span className="section-three__tab-number text-sm font-bold transition-colors">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="section-three__tab-title text-xl font-bold transition-colors">
                  {feature.title}
                </h3>
                <p className="section-three__tab-description mt-3 hidden text-sm leading-6 transition-colors sm:block">
                  {feature.description}
                </p>
              </button>
            ))}

            <div className="pt-2">
              <button className="section-three__get-started w-full rounded-xl px-6 py-3 text-center font-bold transition-all duration-300 active:scale-95">
                Get Started
              </button>
            </div>
          </div>

          <div className="section-three__detail relative flex min-h-[400px] flex-col justify-center rounded-[2rem] border p-7 md:p-9 lg:p-10">
            <div className="mb-8 flex items-center gap-5 sm:gap-6">
              <div className="section-three__icon flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.25rem]">
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
                <span className="section-three__selected inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em]">
                  Selected focus
                </span>
                <h3 className="section-three__detail-title mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                  {features[activeTab].title}
                </h3>
              </div>
            </div>

            <p className="section-three__detail-description mb-6 text-lg font-medium leading-8">
              {features[activeTab].description}
            </p>

            <div className="section-three__detail-note rounded-2xl border p-4">
              <p className="text-base leading-7">
                {features[activeTab].detail}
              </p>
            </div>

            <div className="mt-auto flex flex-col gap-4 pt-8 sm:flex-row">
              <button className="section-three__primary-action flex-1 rounded-xl px-6 py-3.5 font-bold transition-all active:scale-95">
                Explore docs
              </button>
              <button className="section-three__secondary-action flex-1 rounded-xl border px-6 py-3.5 font-bold transition-all">
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
