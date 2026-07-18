import React from "react";
import RightCard from "./RightCard";

const RightContent = () => {
  return (
    <div className=" flex flex-nowrap gap-10 overflow-x-auto h-full  p-5  w-2/3">
      <RightCard />
      <RightCard />
      <RightCard />
    </div>
  );
};

export default RightContent;
