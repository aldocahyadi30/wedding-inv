import React from "react";
import BrideImage from "../assets/images/bride.webp";
import GroomImage from "../assets/images/groom.webp";
import FlowerCorner from "../assets/images/flower-corner.png";
import FlowerStraight from "../assets/images/flower-straight.png";

const Profile = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <p className="poppins-regular text-center text-sm mt-2 mb-12 w-75">Dengan sukacita dan syukur, kami mengundang Bapak/Ibu/Saudara/i untuk menyaksikan dan memberkati pernikahan kami, sebagai tanda janji suci di hadapan Tuhan.</p>

      <div className="h-auto  flex flex-col items-center justify-center">
        <div className="border-6 w-4/6 border-zinc-200 border-double rounded-full">
          <img src={GroomImage} alt="Groom" className="object-cover rounded-full" />
        </div>
        <p className="poppins-bold text-zinc-200 text-2xl tracking-widest my-2">BAZA TULO GULO</p>
        <p className="poppins-regular text-zinc-500 text-center">
          Putra dari Bapak Yosua Gulo (Alm) dan
          <br /> Ibu Satilina Lombu
        </p>
      </div>
      <div className="flex items-center justify-center w-75">
        <hr className="w-full h-[1rem]" />
        <p className="text-[5rem] imperial-script-regular mx-8 my-4">&</p>
        <hr className="w-full h-[1rem]" />
      </div>
      <div className="h-auto  flex flex-col items-center justify-center mb-4">
        <div className="border-6 w-4/6 border-zinc-200 border-double rounded-full">
          <img src={BrideImage} alt="Bride" className="object-cover rounded-full" />
        </div>
        <p className="poppins-bold text-zinc-200 text-2xl tracking-widest my-2">YORIMA NDRURU</p>
        <p className="poppins-regular text-zinc-500 text-center">
          Putri dari Bapak Yarmen Ndruru dan
          <br /> Ibu Adiria Hulu
        </p>
      </div>

      <img src={FlowerCorner} alt="" className="absolute -top-6 -left-5" />
      <img src={FlowerCorner} alt="" className="absolute -top-6 -right-5 rotate-y-180" />
      <img src={FlowerCorner} alt="" className="absolute -bottom-6 -left-5 rotate-x-180" />
      <img src={FlowerCorner} alt="" className="absolute -bottom-6 -right-5 rotate-180" />
    </div>
  );
};

export default Profile;
