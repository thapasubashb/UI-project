import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div
      className={`group relative h-[340px] w-full cursor-pointer overflow-hidden rounded-[1.7rem] border border-white/30 bg-slate-200 shadow-[0_25px_60px_-25px_rgba(23,32,51,0.38)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_35px_80px_-25px_rgba(23,32,51,0.45)] md:h-[420px] ${props.id === 1 ? "xl:mt-10" : ""}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d172d]/82 via-[#0d172d]/18 to-transparent opacity-90" />
      <img
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={props.img}
        alt=""
      />
      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
