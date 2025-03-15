import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image1 from "../assets/images/gallery/1.webp";
import Image2 from "../assets/images/gallery/2.webp";
import Image3 from "../assets/images/gallery/3.webp";
import Image4 from "../assets/images/gallery/4.webp";
import Image5 from "../assets/images/gallery/5.webp";
import Image6 from "../assets/images/gallery/6.webp";
import Image7 from "../assets/images/gallery/7.webp";
import Image8 from "../assets/images/gallery/8.webp";
import Image9 from "../assets/images/gallery/9.webp";
import Image10 from "../assets/images/gallery/10.webp";

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div
      id="gallery-div"
      className="h-auto w-full flex bg-zinc-700 flex-col items-center justify-center gap-2 p-4 pb-10"
    >
      <p data-aos="fade-up" className="lora-bold text-zinc-200 text-center text-2xl my-2">
        GALLERY
      </p>
      <div className="flex h-auto w-full gap-2">
        <img
          data-aos="fade-right"
          src={Image1}
          className="w-[49%] h-[325px] object-cover"
          alt="Portrait 1"
        />
        <img
          data-aos="fade-left"
          src={Image2}
          className="w-[49%] h-[325px] object-cover"
          alt="Portrait 2"
        />
      </div>
      <div className="flex h-auto w-full gap-2">
        <img
          data-aos="fade-right"
          src={Image3}
          className="w-[49%] h-[325px] object-cover"
          alt="Portrait 3"
        />
        <img
          data-aos="fade-left"
          src={Image4}
          className="w-[49%] h-[325px] object-cover"
          alt="Portrait 4"
        />
      </div>
      <img
        data-aos="zoom-in"
        src={Image5}
        className="w-full h-fit object-cover"
        alt="Landscape 1"
      />
      <div className="flex h-auto w-full gap-2">
        <img
          data-aos="fade-right"
          src={Image6}
          className="w-[49%] h-[325px] object-cover"
          alt="Portrait 5"
        />
        <img
          data-aos="fade-left"
          src={Image7}
          className="w-[49%] h-[325px] object-cover"
          alt="Portrait 6"
        />
      </div>
      <div className="flex h-auto w-full gap-2">
        <img
          data-aos="fade-right"
          src={Image8}
          className="w-[49%] h-[325px] object-cover"
          alt="Portrait 7"
        />
        <img
          data-aos="fade-left"
          src={Image9}
          className="w-[49%] h-[325px] object-cover"
          alt="Portrait 8"
        />
      </div>
      <img
        data-aos="zoom-in"
        src={Image10}
        className="w-full h-fit object-cover"
        alt="Landscape 2"
      />
    </div>
  );
};

export default Gallery;
