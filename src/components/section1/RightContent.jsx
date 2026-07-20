import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
  console.log("Props received in RightContent:", props);
 
  
  return (
    <div  id="right" className=" flex flex-nowrap gap-10 overflow-x-auto h-full  p-5  w-2/3">
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>
      })};
    </div>
  );
};

export default RightContent;
