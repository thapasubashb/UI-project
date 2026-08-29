import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="relative h-[380px] md:h-[420px] w-full overflow-hidden rounded-[2rem] shadow-lg shadow-slate-200/60 hover:shadow-2xl hover:shadow-slate-300 transition-all duration-300 transform hover:scale-105 cursor-pointer group">
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
