import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  return (
    <div id="segments" className="section-one__segments w-full">
      <div className="section-one__segments-heading">
        <div>
          <p className="section-one__segments-kicker">People, not profiles</p>
          <h2>Three ways to see opportunity</h2>
        </div>
        <span className="section-one__segments-count"><i /> 03 segments</span>
      </div>
      <div className="grid w-full items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-4">
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
