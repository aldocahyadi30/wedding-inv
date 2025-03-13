import React from "react";
import CoverImage from "../assets/images/cover.webp";

const Hero = () => {
  return (
    <div id="hero-div" className="relative flex h-screen w-screen bg-zinc-600">
      {/* Background Image */}
      <div className="h-auto w-full">
        <img src={CoverImage} alt="Cover" className="w-full h-full object-cover" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-zinc-400 to-transparent" />

      {/* Text Content */}
      <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center justify-center text-white">
        <p className="poppins-regular text-sm mb-2">The Wedding Of</p>
        <p className="poppins-regular text-2xl font-black tracking-widest">BAZA & YORIMA</p>
      </div>
    </div>
  );
};

export default Hero;
