import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LogoImage from "../assets/images/logo.png";

const Countdown = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  let date = new Date("Mar 22, 2025 00:00:00").getTime();

  let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = date - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML = days < 10 ? `0${days}` : days;
    document.getElementById("hour").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.getElementById("minute").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById("second").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    

  }, 1000);

  if (document.readyState === "complete") {
    clearInterval(x);
  }
  return (
    <div id="countdown-div" className="h-[50vh] w-full bg-zinc-200">
      <div className="h-full w-full flex flex-col items-center justify-center p-8">
        <img src={LogoImage} alt="" className="h-4/12 mb-12" data-aos="fade-down" />
        <div className="bg-zinc-700 p-2  rounded-2xl mt-12 mb-4" data-aos="fade-up">
          <p className="poppins-medium text-zinc-200 -bold text-2xl">SAVE THE DATE</p>
        </div>
        <div className="flex flex-col items-center justify-center w-3/5" data-aos="fade-up">
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
