import React from "react";

const HeroText = () => {
  return (
    <div className="p-6 md:p-0">
      <h3 className="mb-8 text-5xl md:text-7xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
          Prospective
        </span>
        <br /> <span className="text-gray-700 font-bold">customer</span>
        <br />
        <span className="text-gray-800 font-bold">segmentation</span>
      </h3>
      <p className="text-lg md:text-xl w-full md:w-[85%] font-medium text-gray-600 mt-6 leading-relaxed">
        Understand and target your prospective customers with precision. Segment
        by behavior, demographics, and financial needs to deliver personalized
        banking experiences.
      </p>
    </div>
  );
};

export default HeroText;
