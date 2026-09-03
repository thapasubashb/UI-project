import React from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";

const App = () => {
  const users = [
    {
      img: "/martin-katler-MoQ7XG0u5QU-unsplash.jpg",
      intro: "",
      color: "black",
      tag: "UndersSatisfied",
    },
    {
      img: "/WhatsApp Image 2026-07-13 at 12.40.05 PM.jpeg",
      intro: "",
      color: "green",
      tag: "Satisfied",
    },

    {
      img: "/Picture1.png",
      intro: "",
      color: "gray",
      tag: "Underbanked",
    },
  ];
  return (
    <>
      <Section1 users={users} />
      <Section2 />
      <Section3 />
    </>
  );
};

export default App;
