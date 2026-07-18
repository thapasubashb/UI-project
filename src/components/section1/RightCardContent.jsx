import React from "react";

const RightCardContent = () => {
  return (
    <div className="absolute  top-0 left-0 h-full  w-full p-8 flex flex-col justify-between">
      <h1 className="bg-white rounded-full text-xl font-semibold  h-10 w-10 flex justify-center items-center">
        1
      </h1>
      <div>
        <p className="leading-normal text-lg mb-14 font- text-black">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores vero
          accusamus doloribus, vel ea eos!
        </p>
        <div className=" flex justify-between ">
          <button className="bg-gray-500 text-white font-medium px-8 py-2 rounded-full">
            Satisfied
          </button>
          <button className="bg-gray-500 text-white font-medium px-3 py-2 rounded-full ">
            <i class="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
