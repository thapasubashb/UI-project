import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1content = (props) => {
  return (
    <div className="relative z-10 grid min-h-[85vh] items-center gap-14 px-6 py-12 md:grid-cols-[0.82fr_1.18fr] md:px-12 lg:gap-20">
      <div className="order-1 md:order-1">
        <LeftContent />
      </div>
      <div className="order-2 md:order-2">
        <RightContent users={props.users} />
      </div>
    </div>
  );
};

export default Page1content;
