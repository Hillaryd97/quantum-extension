import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const Guide = () => {
  return (
    <div className="bg-quantum_100 min-h-screen py-16">
      <Nav />{" "}
      <div className="p-[1rem] z-50 fixed top-0 left-0 right-0 md:py-[2rem] md:px-[3rem] shadow-md bg-quantum_50 ">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl md:text-4xl ">Quantum</h1>
          </div>
          <div className="flex items-center space-x-2 md:space-x-6">
            <Link
              className="lg:px-6 lg:py-4 px-3 py-1.5 duration-300 bg-quantum_500 text-white rounded-lg font-medium lg:text-base hover:bg-opacity-90"
              to="/"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mt-[4rem] mx-auto p-6">
        
      <div className="text-2xl font-semibold mb-2">
          Welcome! The extension is downloading. Please wait...
        </div>
        <div className="text-lg mb-4">
          If it hasn't downloaded yet, it will start automatically in a few
          seconds. {" "}
          <a
            href="https://drive.google.com/uc?export=download&id=1CDBs9dO52GeuaA04h_wS098HYPv_5f7O"
            download="quantum-extension.zip"
            className="text-quantum_500 font-semibold duration-300 hover:underline"
          >
          Click here
          </a>{" "}
          to start the download manually.
        </div>
        <h1 className="text-4xl font-semibold mb-4">
          How to Manually Install the Quantum Dark Mode Extension
        </h1>

        <h2 className="text-2xl font-semibold mb-2">
          Step 1: Download the Extension
        </h2>
        <p className="mb-4">
          Click the "Download Extension" button to download the Quantum Dark
          Mode extension ZIP file.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          Step 2: Extract the ZIP File
        </h2>
        <p className="mb-4">
          Locate the downloaded ZIP file and extract its contents to a folder on
          your computer.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          Step 3: Open Chrome Extensions
        </h2>
        <p className="mb-4">
          Open Google Chrome and go to the Chrome menu (three dots) in the top
          right corner. From the menu, select "More tools" and then
          "Extensions."
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          Step 4: Enable Developer Mode
        </h2>
        <p className="mb-4">
          In the Extensions page, enable "Developer mode" by toggling the switch
          located in the top right corner of the page.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Step 5: Load Unpacked</h2>
        <p className="mb-4">
          Once "Developer mode" is enabled, you will see additional options.
          Click "Load unpacked" and select the folder where you extracted the
          extension files.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          Step 6: Confirm Installation
        </h2>
        <p className="mb-4">
          The Quantum Dark Mode extension should now be added to your Chrome
          extensions. You'll see its icon in the Chrome toolbar.
        </p>

        <h2 className="text-2xl font-semibold mb-2">
          Step 7: Activate the Extension
        </h2>
        <p className="mb-4">
          To activate the extension, click its icon in the Chrome toolbar, and
          you can start using Quantum Dark Mode on websites.
        </p>

        <p className="text-lg font-medium mt-8">
          Congratulations! You've successfully installed the Quantum Dark Mode
          extension manually.
        </p>
       
      </div>
      <div className="text-center pt-8">
      <Link
              className=" lg:px-6 lg:py-4 px-3 py-1.5 duration-300 bg-quantum_500 pt-8 text-white rounded-lg font-medium lg:text-base hover:bg-opacity-90"
              to="/"
            >
              Go Home
            </Link>
      </div>
    </div>
  );
};

export default Guide;
