import React from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";

const App = () => {
  const users = [
    {
      img: "public/martin-katler-MoQ7XG0u5QU-unsplash.jpg",
      intro: "",
      tag: "UndersSrved",
    },
    {
      img: "public/WhatsApp Image 2026-07-13 at 12.40.05 PM.jpeg",
      intro: "",
      tag: "Satisfied",
    },

    {
      img: "public/Picture1.png",
      intro: "",
      tag: "Underbanked",
    },
  ];
  return (
    <>
      <Section1 users={users} />
      <Section2 />
    </>
  );
};

export default App;
