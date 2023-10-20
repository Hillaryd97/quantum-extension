import React, { useState, useEffect } from "react";
import image1 from "../assets/slideshow1.png";
import image2 from "../assets/slideshow2.png";
import image3 from "../assets/slideshow3.png";
import image4 from "../assets/image1.png";
import image5 from "../assets/image2.png";
import image6 from "../assets/image3.png";
import image7 from "../assets/image4.png";
import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";
import filledDot from "../assets/ellipse-filled.svg";
import outlineDot from "../assets/ellipse-outline.svg";
import Button from "./Button";

const images = [image1, image2, image3]; // Replace with your image URLs

const DarkModeToggleSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 1500); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-32">
      <div className="flex justify-center items-center flex-col ">
        <div className="flex flex-col justify-around items-center space-y-8 pb-20">
          <h3 className="text-4xl font-bold text-center w-3/6">
            Quantum Mode - Turn Any Website Dark with a Single Click
          </h3>
          <p className="text-xl font-medium text-center w-4/6 px-10">
            Quantum Dark Mode Toggle is a Chrome extension that makes it easy to
            switch between dark mode and light mode on any website. With a
            single click, you can transform your browsing experience from harsh
            light to soothing darkness.
          </p>
        </div>
        <div className="flex gap-16 items-center">
          <img
            src={arrowLeft}
            alt=""
            onClick={prevSlide}
            className="cursor-pointer"
          />
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full"
          />
          <img
            src={arrowRight}
            alt=""
            onClick={nextSlide}
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <img
              key={index}
              src={index === currentIndex ? filledDot : outlineDot}
              alt={`Dot ${index + 1}`}
              className="w-4 h-4 mx-2 cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-28 py-32">
        <div>
          <div className="relative flex justify-center items-center">
            {/* Background SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
              className="absolute top-0 left-0 z-0"
              style={{ margin: "auto", top: 0, left: 0, right: 0, bottom: 0 }}
            >
              <path
                d="M300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0C232.843 0 300 67.1573 300 150Z"
                fill="#E4E9E2"
              />
            </svg>
            {/* Background Image and Centered Image */}
            <div
              className="bg-cover bg-center h-[15rem] w-[28rem] relative z-10"
              style={{ backgroundImage: `url(${image4})` }}
            >
              <div className="h-full flex items-center justify-center">
                <img
                  src={image5}
                  alt="Centered Image"
                  className="max-w-full w-40 h-[6rem] max-h-full z-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-6 justify-center ">
          <h3 className="font-semibold text-3xl">
            Enjoy Browsing in Dark Mode
          </h3>
          <p className="font-medium pr-20">
            Experience a Gentle Glow in the Dark - Dive into a world of
            immersive browsing with our Dark Mode extension. Delight in reduced
            eye strain and a visually pleasing interface on every webpage you
            visit
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-36 py-32">
        <div className="pl-[1rem] flex flex-col space-y-6 justify-center items-center">
          <h3 className="font-semibold text-3xl">
            Embrace the Quantum Dark Mode: <br /> A New Dimension of Browsing
            Comfort
          </h3>
          <p className="font-medium pl-16">
            Step into a realm of digital tranquillity. Experience browsing like
            never before with our Quantum Dark Mode—sleek, efficient, and easy
            on the eyes. Toggle on the Quantum Dark Mode effortlessly with a
            single click. Watch as webpages elegantly transition to a soothing
            dark theme, reducing eye strain and enhancing readability.
          </p>
        </div>
        <div>
          <div className="relative flex justify-center items-center">
            {/* Background SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="300"
              height="300"
              viewBox="0 0 300 300"
              fill="none"
              className="absolute top-0 left-0 z-0"
              style={{ margin: "auto", top: 0, left: 0, right: 0, bottom: 0 }}
            >
              <path
                d="M300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0C232.843 0 300 67.1573 300 150Z"
                fill="#E4E9E2"
              />
            </svg>
            {/* Background Image and Centered Image */}
            <div
              className="bg-cover bg-center h-[15rem] w-[28rem] relative z-10"
              style={{ backgroundImage: `url(${image6})` }}
            >
              <div className="h-full flex items-center justify-center">
                <img
                  src={image7}
                  alt="Centered Image"
                  className="max-w-full w-[16rem] max-h-full z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pb-[7.5rem]">
        <Button />
      </div>
      <div className="bg-quantum_500 text-white px-[10rem] pb-[7.5rem] flex flex-col space-y-8">
        <h3 className="text-4xl text-center pt-8 font-semibold">Our Mission</h3>
        <p className="text-justify text-xl">
          At Quantum Dark Mode, our mission is to redefine the digital
          experience by providing users with an immersive, eye-friendly browsing
          environment. We strive to transform the way people interact with
          technology, promoting a balance between aesthetics and well-being.
          Through our innovative dark mode solution, we aim to enhance
          readability, reduce eye strain, and ultimately empower users to
          embrace a harmonious digital lifestyle. We are committed to
          continuously improving and personalizing our offering, ensuring an
          accessible, customizable and delightful browsing experience for all.
        </p>
      </div>
    </div>
  );
};

export default DarkModeToggleSection;
