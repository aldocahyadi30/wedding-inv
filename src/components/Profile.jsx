import React from "react";
import BrideImage from "../assets/images/bride.webp";
import GroomImage from "../assets/images/groom.webp";

const Profile = () => {
  return (
    <div className="h-auto w-full flex flex-col items-center justify-center p-8">
      <p className="poppins-regular text-center text-sm mb-12">
        Tuhan telah mempertemukan kami dalam ikatan cinta dan kasih-Nya. Dengan penuh sukacita dan syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberkati kami dalam upacara pernikahan kami, sebagai saksi atas janji suci yang kami ikrarkan di hadapan Tuhan
      </p>

      <div className="h-auto w-4/6 flex flex-col items-center justify-center">
        <div className="border-6 border-zinc-200 border-double rounded-full">
          <img src={GroomImage} alt="Groom" className="object-cover rounded-full" />
        </div>
        <p className="poppins-bold text-stone-500 text-2xl tracking-widest">BAZA</p>
        <p className="poppins-medium text-zinc-200 text-lg">Baza Tulo Gulo</p>
        <p className="poppins-regular text-zinc-500 text-sm text-center">Putra dari Bapak Yosua Gulo (Alm) dan Ibu Sarilina Lombu</p>
      </div>
      <p className="text-[5rem] imperial-script-regular my-4">&</p>
      <div className="h-auto w-4/6 flex flex-col items-center justify-center">
        <div className="border-6 border-zinc-200 border-double rounded-full">
          <img src={BrideImage} alt="Bride" className="object-cover rounded-full" />
        </div>
        <p className="poppins-bold text-stone-500 text-2xl tracking-widest">YORIMA</p>
        <p className="poppins-medium text-zinc-200 text-lg">Yorima Ndruru</p>
        <p className="poppins-regular text-zinc-500 text-sm text-center">Putri dari Bapak Yarmen Ndruru dan Ibu Adiria Hulu</p>
      </div>
    </div>
  );
};

export default Profile;
