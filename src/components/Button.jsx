import React from "react";
import chromeLogo from "../assets/google-chrome-icon-20111.png";

const Button = () => {
  return (
    <div>
      <a href="https://github.com/Hillaryd97/quantum-extension/blob/main/src/assets/quantum-extension.zip" download={"quantum-extension.zip"} className="px-6 py-4 bg-quantum_500 text-white rounded-lg font-medium text-base hover:bg-opacity-90 flex w-fit space-x-6">
        <img src={chromeLogo} alt="" />
        <p>Download Extension</p>
      </a>
    </div>
  );
};

export default Button;
