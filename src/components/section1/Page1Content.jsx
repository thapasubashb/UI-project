import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1content = (props) => {
  return (
    <main className="section-one__content relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 pb-24 pt-10 sm:px-8 lg:grid-cols-[0.84fr_1.16fr] lg:gap-12 lg:px-12 lg:pb-28 lg:pt-8">
      <div className="order-1">
        <LeftContent />
      </div>
      <div className="order-2">
        <RightContent users={props.users} />
      </div>
    </main>
  );
};

export default Page1content;
