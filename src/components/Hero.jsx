import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.svg";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="mt-[7.5rem] grid grid-cols-2 gap-[4.19rem] pt-[3.75rem]">
      <div className="text-quantum_900">
        <div className="pl-14 flex flex-col  justify-center items-center space-y-6">
          <h2 className="px-2 lg:text-5xl text-3xl md:text-4xl font-bold text-center pl-">
            Ready to Experience Dark Mode Everywhere?
          </h2>
          <p className="pl-1 text-base font-medium text-justify">
            Transform Webpages with Ease - Introducing our Quantum Dark Mode
            Chrome Extension! Enhance your browsing experience by converting
            webpages to a soothing dark mode. Say goodbye to eye strain and
            enjoy a visually appealing browsing journey.
          </p>
        </div>
        <div className="flex justify-center pt-12">
          <Link>
            <Button />
          </Link>
        </div>
      </div>
      <div className="pr-[2.06rem]">
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
