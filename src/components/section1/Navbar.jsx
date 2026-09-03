import React from "react";

const Navbar = () => {
  return (
    <div className="relative z-10 flex items-center justify-between px-6 py-7 md:px-12">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#172033] text-sm font-bold text-white">
          S
        </span>
        <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[#172033]">
          Target audience
        </h4>
      </div>

      <button className="rounded-full border border-[#172033]/15 bg-white/70 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-[#172033] shadow-sm backdrop-blur transition hover:border-[#172033]/40 hover:bg-white">
        Digital banking platform
      </button>
    </div>
  );
};

export default Navbar;
