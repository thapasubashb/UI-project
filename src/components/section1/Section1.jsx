import React from "react";
import Navbar from "./Navbar";
import Page1content from "./Page1content";

const Section1 = (props) => {
  return (
    <div className="h-screen w-full relative bg-gradient-to-br from-indigo-50 via-sky-50 to-white">
      {/* Decorative gradient auras */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[520px] h-[300px] bg-indigo-100/50 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/4 -left-28 w-72 h-72 bg-sky-100/40 rounded-full blur-[90px] pointer-events-none" />

      <Navbar />
      <Page1content users={props.users} />
    </div>
  );
};

export default Section1;
