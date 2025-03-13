import React from "react";
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
  return (
    <div id="gallery-div" className="h-auto w-full flex bg-zinc-700 flex-col items-center justify-center gap-2 p-2">
      <p className="lora-bold text-zinc-200 text-center text-2xl my-2">GALLERY</p>
      <div className="flex h-auto w-full gap-2">
        <img src={Image1} className="w-1/2 h-fit object-cover" alt="Portrait 1" />
        <img src={Image2} className="w-1/2 h-fit object-cover" alt="portrait 2" />
      </div>
      <div className="flex h-auto w-full gap-2">
        <img src={Image3} className="w-1/2 h-fit object-cover" alt="Portrait 3" />
        <img src={Image4} className="w-1/2 h-fit object-cover" alt="Portrait 4" />
      </div>
      <img src={Image5} className="w-full h-fit object-cover" alt="Landscape 1" />
      <div className="flex h-auto w-full gap-2">
        <img src={Image6} className="w-1/2 h-fit object-cover" alt="Portrait 5" />
        <img src={Image7} className="w-1/2 h-fit object-cover" alt="portrait 6" />
      </div>
      <div className="flex h-auto w-full gap-2">
        <img src={Image8} className="w-1/2 h-fit object-cover" alt="Portrait 7" />
        <img src={Image9} className="w-1/2 h-fit object-cover" alt="Portrait 8" />
      </div>
      <img src={Image10} className="w-full h-fit object-cover" alt="Landscape 2" />
    </div>
  );
};

export default Gallery;
