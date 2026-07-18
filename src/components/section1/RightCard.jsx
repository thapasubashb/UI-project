import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = () => {
  return (
    <div className=" shrink-0 h-full w-70 overflow-hidden relative  rounded-4xl">
      <img
        className="h-full w-full object-cover "
        src="public/WhatsApp Image 2026-07-13 at 12.40.05 PM.jpeg"
        alt=""
      />
      <RightCardContent />
    </div>
  );
};

export default RightCard;
