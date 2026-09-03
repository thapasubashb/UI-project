import React from "react";
import Navbar from "./Navbar";
import Page1content from "./Page1content";

const Section1 = (props) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f4f7fb] text-[#172033]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,217,138,0.34),transparent_28%),radial-gradient(circle_at_10%_70%,rgba(170,220,255,0.32),transparent_32%)]" />

      <Navbar />
      <Page1content users={props.users} />
    </div>
  );
};

export default Section1;
