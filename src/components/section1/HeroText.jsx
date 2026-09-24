import React from "react";

const HeroText = () => {
  return (
    <div className="w-full max-w-xl p-1 md:p-0">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e1873d]/20 bg-[#fffaf2] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#e1873d] shadow-sm">
        <span className="h-2 w-2 rounded-full bg-[#e1873d]" />
        01 / Target audience
      </div>

      <h3 className="mb-5 text-4xl font-black leading-[0.9] tracking-[-0.05em] text-[#172033] sm:text-5xl md:text-6xl xl:text-7xl">
        <span className="inline-block text-[#e1873d]">Prospective</span>
        <br />
        customer
        <br />
        segmentation
      </h3>

      <p className="w-full max-w-lg text-base font-medium leading-7 text-[#526078] md:text-lg">
        Understand and target the right people with precision. Segment by
        behavior, demographics, and financial needs to deliver more relevant,
        trust-driven experiences.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
        <button className="rounded-full bg-[#172033] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#172033]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2b3b57]">
          Explore segments
        </button>
        <button className="rounded-full border border-[#172033]/15 bg-white/80 px-5 py-3 text-sm font-bold text-[#172033] transition-all duration-300 hover:border-[#e1873d]/50 hover:text-[#e1873d]">
          View insights
        </button>
      </div>
    </div>
  );
};

export default HeroText;
