import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.svg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="lg:mt-[10rem] mt-[6rem] lg:grid lg:grid-cols-2 lg:gap-10">
      <div className="text-quantum_900">
        <div className="px-4 md:px-8 lg:pl-14 lg:pr-0 flex flex-col justify-center items-center space-y-4 md:space-y-6 lg:space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Ready to Experience Dark Mode Everywhere?
          </h2>
          <p className="text-base md:text-lg font-medium text-justify">
            Transform Webpages with Ease - Introducing our Quantum Dark Mode
            Chrome Extension! Enhance your browsing experience by converting
            webpages to a soothing dark mode. Say goodbye to eye strain and
            enjoy a visually appealing browsing journey.
          </p>
        </div>
        <div className="lg:hidden pt-4 px-4">
        <img
          src={heroImage}
          alt="An image showing a switch going from light to dark and vice versa"
          className="rounded-lg shadow-md"
        />
      </div>
        <div className="flex justify-center pt-4 md:pt-8 lg:pt-12">
            <Button />
        </div>
      </div>
      <div className="hidden lg:block lg:pr-[2.06rem]">
        <img
          src={heroImage}
          alt="An image showing a switch going from light to dark and vice versa"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Hero;
