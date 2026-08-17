import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-[2rem] shadow-lg shadow-slate-200/60">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
