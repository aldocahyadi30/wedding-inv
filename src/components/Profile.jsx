import React from "react";
import BrideImage from "../assets/images/bride.webp";
import GroomImage from "../assets/images/groom.webp";

const Profile = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center justify-center p-8">
      <p className="poppins-regular text-center mb-12">
      Dengan sukacita dan syukur, kami mengundang Bapak/Ibu/Saudara/i untuk menyaksikan dan memberkati pernikahan kami, sebagai tanda janji suci di hadapan Tuhan.
      </p>

      <div className="h-auto  flex flex-col items-center justify-center">
        <div className="border-6 w-4/6 border-zinc-200 border-double rounded-full">
          <img src={GroomImage} alt="Groom" className="object-cover rounded-full" />
        </div>
        <p className="poppins-bold text-zinc-200 text-2xl tracking-widest my-2">BAZA TULO GULO</p>
        <p className="poppins-regular text-zinc-500 text-center">Putra dari Bapak Yosua Gulo (Alm) dan<br /> Ibu Sarilina Lombu</p>
      </div>
      <p className="text-[5rem] imperial-script-regular my-4">&</p>
      <div className="h-auto  flex flex-col items-center justify-center">
        <div className="border-6 w-4/6 border-zinc-200 border-double rounded-full">
          <img src={BrideImage} alt="Bride" className="object-cover rounded-full" />
        </div>
        <p className="poppins-bold text-zinc-200 text-2xl tracking-widest my-2">YORIMA NDRURU</p>
        <p className="poppins-regular text-zinc-500 text-center">Putri dari Bapak Yarmen Ndruru dan<br /> Ibu Adiria Hulu</p>
      </div>
    </div>
  );
};

export default Profile;
