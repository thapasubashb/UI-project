import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log("Props received in RightContent:", props);
 
  
  return (
    <div className=" flex flex-nowrap gap-10 overflow-x-auto h-full  p-5  w-2/3">
      {props.users.map(function(elem){
        return <RightCard img={elem.img}/>
      })};
    </div>
  );
};

export default RightContent;
