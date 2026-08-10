import React from "react";
import "remixicon/fonts/remixicon.css";
import HeroText from "./HeroText";
import Arrow from "./Arrow";
const LeftContent = () => {
  return (
    <div className="flex flex-col justify-center h-full w-full gap-6">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default LeftContent;
