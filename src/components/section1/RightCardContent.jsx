import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-between p-5 text-white md:p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-lg font-black backdrop-blur-sm ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
          {props.id + 1}
        </div>
        <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
          profile
        </span>
      </div>

      <div className="translate-y-0 transition-transform duration-300 group-hover:-translate-y-1">
        <p className="mb-5 max-w-[18rem] text-sm leading-6 text-white/90 md:text-base">
          Experience tailored banking built around financial goals, lifestyle,
          and everyday needs.
        </p>

        <div className="flex items-center justify-between gap-3">
          <button
            style={{ backgroundColor: props.color }}
            className="rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 md:px-5"
          >
            {props.tag}
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20">
            <i className="ri-arrow-right-line text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
