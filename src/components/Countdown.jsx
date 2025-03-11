import React from "react";
import LogoImage from "../assets/images/logo.png";

const Countdown = () => {
  return (
    <div id="countdown-div" className="h-[50vh] w-screen bg-zinc-200">
      <div className="h-full w-full flex flex-col items-center justify-center p-8">
        <img src={LogoImage} alt="" className="h-4/12 mb-12" />
        <div className="bg-zinc-700 p-2  rounded-2xl mt-12 mb-4">
          <p className="poppins-medium text-zinc-200 -bold text-2xl">SAVE THE DATE</p>
        </div>
        <div className="flex flex-col items-center justify-center w-3/5">
          <p className="poppins-regular text-zinc-700 -bold text-sm">Maret 22, 2025</p>
          <hr className="bg-zinc-700  w-full h-[0.1rem] my-2" />
          <div className="flex">
            <p id="day" className="poppins-regular text-zinc-700 -bold text-sm">
              00
            </p>
            <p className="poppins-regular text-zinc-700 -bold text-sm mx-2">:</p>
            <p id="hour" className="poppins-regular text-zinc-700 -bold text-sm">
              00
            </p>
            <p className="poppins-regular text-zinc-700 -bold text-sm mx-2">:</p>
            <p id="minute" className="poppins-regular text-zinc-700 -bold text-sm ">
              00
            </p>
            <p className="poppins-regular text-zinc-700 -bold text-sm mx-2">:</p>
            <p id="second" className="poppins-regular text-zinc-700 -bold text-sm ">
              00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
