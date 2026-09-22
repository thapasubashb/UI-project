import React from "react";

const Arrow = () => {
  return (
    <div className="mt-4 inline-flex items-center gap-3">
      <button className="group inline-flex items-center gap-3 rounded-full border border-[#172033]/15 bg-white/80 px-4 py-2.5 text-sm font-bold uppercase tracking-[0.18em] text-[#172033] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#e1873d]/40 hover:text-[#e1873d]">
        See customer journey
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#172033] text-lg text-white transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#e1873d]">
          <i className="ri-arrow-right-up-line"></i>
        </span>
      </button>
    </div>
  );
};

export default Arrow;
