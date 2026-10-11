import React from "react";
import Navbar from "./Navbar";
import Page1content from "./Page1content";
import "./Section1.css";

const Section1 = (props) => {
  return (
    <section className="section-one relative w-full overflow-hidden text-white">
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Navbar />
      </div>
      <Page1content users={props.users} />
    </section>
  );
};

export default Section1;
