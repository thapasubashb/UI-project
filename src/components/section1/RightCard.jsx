import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div
      className={`section-one__card group relative h-[340px] w-full overflow-hidden rounded-[1.7rem] md:h-[390px] ${props.id === 1 ? "xl:mt-8" : ""}`}
    >
      <div className="section-one__card-shade absolute inset-0" />
      <img
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={props.img}
        alt={`${props.tag} customer segment`}
        loading="lazy"
      />
      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
