import React from "react";
// import quantum from ''

const Nav = () => {
  return (
    <div className="z-50 fixed top-0 left-0 right-0 py-[2rem] px-[3rem] shadow-md bg-quantum_50 ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-4xl">Quantum</h1>
        </div>
        <div className="flex items-center space-x-6">
          <a className="text-base font-medium">Watch Guide</a>
          <a
            href="https://drive.google.com/uc?export=download&id=1CDBs9dO52GeuaA04h_wS098HYPv_5f7O"
            download={"quantum-extension.zip"}
            className="px-6 py-4 bg-quantum_500 text-white rounded-lg font-medium text-base hover:bg-opacity-90"
          >
            Download Extension
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
