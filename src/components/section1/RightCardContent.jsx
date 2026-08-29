import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-6 md:p-8 flex flex-col justify-between bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white transition-all duration-300 group-hover:from-black/80">
      <div className="bg-white rounded-full text-lg font-bold h-12 w-12 flex justify-center items-center text-indigo-600 shadow-lg transform transition-transform group-hover:scale-110">
        {props.id + 1}
      </div>
      <div className="transform transition-transform group-hover:translate-y-0">
        <p className="leading-relaxed text-base md:text-lg mb-6 font-medium line-clamp-3">
          Experience personalized banking tailored to your financial goals and
          lifestyle.
        </p>
        <div className="flex items-center justify-between gap-3">
          <button
            style={{ backgroundColor: props.color }}
            className="text-white font-semibold px-6 md:px-8 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            {props.tag}
          </button>
          <button className="text-white font-medium px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <i className="ri-arrow-right-line text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
