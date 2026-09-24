import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1content = (props) => {
  return (
    <div className="relative z-10 mx-auto grid min-h-[85vh] w-full max-w-7xl items-center gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14 lg:px-8 xl:px-10">
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
