import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1content = (props) => {
  return (
    <div className="pb-15 bt-5 px-18 flex iteams-center justify-between h-[90vh] gap-10">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  );
};

export default Page1content;
