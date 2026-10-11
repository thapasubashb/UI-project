import React from "react";
import Navbar from "./Navbar";
import Page1content from "./Page1content";
import "./Section1.css";

const Section1 = (props) => {
  return (
    <section className="section-one relative w-full overflow-hidden text-white">
      <div className="section-one__ambient" aria-hidden="true">
        <span className="section-one__glow section-one__glow--orange" />
        <span className="section-one__glow section-one__glow--blue" />
        <span className="section-one__orb" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Navbar />
      </div>
      <Page1content users={props.users} />
      <div className="section-one__pagination" aria-label="Slide 1 of 3">
        <span>01</span>
        <span className="section-one__pagination-track"><i /></span>
        <span>03</span>
      </div>
    </section>
  );
};

export default Section1;
