import React from "react";
import "remixicon/fonts/remixicon.css";
import HeroText from "./HeroText";
import Arrow from "./Arrow";
const LeftContent = () => {
  return (
    <div className="flex h-full w-full flex-col items-start justify-center gap-6 lg:pl-2">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default LeftContent;
