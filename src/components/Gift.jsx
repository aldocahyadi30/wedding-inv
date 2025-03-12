import React from "react";
import DebitCard from "./DebitCard";
import Wish from "./Wish";

const Gift = () => {
  return (
    <div id="gift-div" className="h-auto w-full flex bg-zinc-700 flex-col items-center justify-center py-2 px-4">
      <p className="lora-bold text-zinc-200 text-center text-2xl mt-2 mb-8">WEDDING GIFT</p>
      <div className="flex flex-col gap-4 w-full mb-4">
        <DebitCard name={"Baza Tulo Gulo"} cardNumber={"1111-2222-3333-4444"} />
        <DebitCard name={"Yorima Ndruru"} cardNumber={"5555-6666-7777-8888"} />
      </div>
      <Wish />
    </div>
  );
};

export default Gift;
