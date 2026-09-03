import React from "react";

const HeroText = () => {
  return (
    <div className="max-w-xl p-1 md:p-0">
      <p className="mb-7 text-xs font-bold uppercase tracking-[0.24em] text-[#e1873d]">
        01 / Know who to serve
      </p>
      <h3 className="mb-8 text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-[#172033] md:text-7xl">
        <span className="text-[#e1873d]">Prospective</span>
        <br /> customer
        <br /> segmentation
      </h3>
      <p className="mt-6 w-full text-base font-medium leading-7 text-[#526078] md:w-[90%] md:text-lg">
        Understand and target your prospective customers with precision. Segment
        by behavior, demographics, and financial needs to deliver personalized
        banking experiences.
      </p>
    </div>
  );
};

export default HeroText;
