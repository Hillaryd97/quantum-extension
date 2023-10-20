import React, { useState, useEffect } from "react";
import image1 from "../assets/slideshowImage1.png";
import image2 from "../assets/slideshowImage2.png";
import image3 from "../assets/slideshowImage3.png";
import arrowRight from "../assets/arrow-right.svg";
import arrowLeft from "../assets/arrow-left.svg";
import filledDot from "../assets/ellipse-filled.svg";
import outlineDot from "../assets/ellipse-outline.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const images = [image1, image2, image3]; // Replace with your image URLs

const Carouseel = () => {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carouseel;
