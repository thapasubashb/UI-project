import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div
      className={`group relative h-[340px] w-full cursor-pointer overflow-hidden rounded-[1.4rem] shadow-xl shadow-slate-300/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:h-[420px] ${props.id === 1 ? "xl:mt-12" : ""}`}
    >
      <img
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        src={props.img}
        alt=""
      />
      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
