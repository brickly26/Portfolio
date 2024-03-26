import React from "react";

export default function Blob() {
  return (
    <div className="relative w-72 h-72">
      <div className="blobs-container">
        <div className="blobs">
          <div className="blob rounded-2xl"></div>
          <div className="blob rounded-full"></div>
          <div className="blob rounded-full -z-10"></div>
          <div className="blob rounded-2xl"></div>
        </div>
      </div>
      <div className="glow absolute top-[50%] right-[50%] z-0"></div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
