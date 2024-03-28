import React from "react";

function Hero() {
  return (
    <div className=" text-slate-50 text-4xl md:text-7xl font-bold   flex  items-center flex-col mt-6 md:mt-28">
      <span className="  mb-3 lett">WELCOME</span>
      <span className=" ">
        TO{" "}
        <span className="md:bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-green-500">
          CHAINTECH
        </span>
      </span>
      <span className=" mt-3  text-xs text-gray-500 md:text-white md:text-sm text-center">
        From square one to engineering excellence! PixelPlex assists in
        full-cycle software development, <br /> jumps in to take it over, or
        brings dedicated top-demanded skills.
      </span>
      <button className="  text-sm md:text-lg flex rounded-full mt-5 bg-white p-2 px-4   text-black hover:bg-green-300 ">
        Get Started
        <svg
          width={"29"}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15.5857" cy="15.9699" r="15.5857" fill="black" />
          <path
            d="M17.7225 10.8617L23.0539 16.3082L23.6472 16.9143L23.0539 17.5213L17.7225 22.9678L16.4971 21.7547L20.3882 17.779H6.44922V16.0497H20.3882L16.4971 12.0748L17.7234 10.8617H17.7225Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
}

export default Hero;
