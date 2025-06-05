import React from "react";
import aero from "./assets/aero.png"; // use the arrow from your image (crop as needed)

const DottedPath = () => {
  return (
    <div className="relative w-full h-[300px] bg-white">
      {/* Dotted Path */}
      <svg
         width="20%"
        height="50%"
        viewBox="0 0 500 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M 50 150 
             Q 100 50, 150 150 
             Q 200 250, 250 150 
             Q 300 50, 350 150 
             Q 400 250, 450 150"
          fill="none"
          stroke="#FFD700"
          strokeWidth="3"
          strokeDasharray="8,8"
        />
      </svg>

      {/* Plane */}
      <img
        src={aero}
        alt="paper-plane"
        className="absolute w-[40px] h-[40px] top-[90px] left-[230px] rotate-[30deg]"
      />
    </div>
  );
};

export default DottedPath;
