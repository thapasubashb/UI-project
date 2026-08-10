import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1content = (props) => {
  return (
    <div className="min-h-[85vh] py-12 px-6 grid md:grid-cols-2 gap-10 items-center">
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
