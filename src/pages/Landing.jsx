import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import DarkModeToggleSection from "../components/DarkModeToggleSection";

const Landing = () => {
  return (
    <div className="">
      <Nav />
      <div className="container mx-auto">
        <Hero />
        <DarkModeToggleSection />
      </div>
    </div>
  );
};

export default Landing;
