import React from "react";
import chromeLogo from "../assets/google-chrome-icon-20111.png";

const Button = () => {
  return (
    <div>
      <a
        href="https://drive.google.com/uc?export=download&id=1CDBs9dO52GeuaA04h_wS098HYPv_5f7O"
        download={"quantum-extension.zip"}
        className="px-6 py-4 bg-quantum_500 text-white rounded-lg font-medium text-base hover:bg-opacity-90 flex w-fit space-x-6"
      >
        <img src={chromeLogo} alt="" />
        <p>Download Extension</p>
      </a>
    </div>
  );
};

export default Button;
