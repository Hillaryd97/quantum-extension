import React, { useState } from "react";
import chromeLogo from "../assets/google-chrome-icon-20111.png";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    // Trigger the download action here
    const downloadLink =
      "https://drive.google.com/uc?export=download&id=1CDBs9dO52GeuaA04h_wS098HYPv_5f7O";
    const a = document.createElement("a");
    a.href = downloadLink;
    a.download = "quantum-extension.zip";
    a.click();

    // Navigate to the instruction page after the download is initiated
    // Delay the redirection for 3 seconds
    setTimeout(() => {
      setDownloading(false);
      navigate("/guide");
    }, 3000);
  };

  return (
    <div>
      <a
        href="#"
        onClick={handleDownload}
        className={`px-6 py-4 bg-quantum_500 text-white rounded-lg font-medium text-base duration-300 hover:bg-opacity-90 flex w-fit space-x-6 ${
          downloading ? "cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        <img src={chromeLogo} alt="" />
        <p> {downloading ? "Downloading..." : "Download Extension"}</p>
      </a>
    </div>
  );
};

export default Button;
