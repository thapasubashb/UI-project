import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-8 px-6 md:px-12">
      <h4 className="bg-black text-white px-6 py-2.5 rounded-full uppercase text-sm font-semibold tracking-wider">
        Target Audience
      </h4>

      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 uppercase rounded-full tracking-widest text-sm font-medium transition-colors duration-300">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
