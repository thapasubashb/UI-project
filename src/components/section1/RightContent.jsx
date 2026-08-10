import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="right" className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {Array.isArray(props.users) &&
          props.users.map(function (elem, idx) {
            return (
              <RightCard
                key={idx}
                id={idx}
                color={elem.color}
                img={elem.img}
                tag={elem.tag}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RightContent;
