import React from "react";

const Arrow = () => {
  return (
    <div className="inline-flex items-center justify-center mt-8">
      <div className="text-6xl md:text-8xl text-indigo-600 hover:text-cyan-500 transition-colors duration-300 transform hover:translate-x-2 hover:-translate-y-2 cursor-pointer">
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};

export default Arrow;
