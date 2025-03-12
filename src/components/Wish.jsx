import React from "react";
import WishComment from "./WishComment";

const Wish = () => {
  return (
    <div id="wish-div" className="h-auto w-full flex flex-col bg-zinc-200 items-center justify-center py-2 px-4 rounded-lg">
      <p className="lora-bold text-zinc-700 text-center text-xl mt-2 mb-4">FRIEND WISHES</p>
      <input type="text" id="input-wish-name" name="NamaWish" placeholder="Ketik Nama Anda" className="bg-zinc-700 text-zinc-200 poppins-regular p-2 w-full mb-2" />
      <textarea name="CommentWish" id="input-wish-comment" placeholder="Ketik Wish Anda" className="bg-zinc-700  text-zinc-200 poppins-regular p-2 w-full" rows={3}></textarea>
      <button id="send-wish-btn" className="bg-zinc-700 poppins-regular cursor-pointer text-zinc-200 text-lg border text-zinc-200 w-full p-2 mt-4 hover:bg-zinc-800">
        Kirim Wish
      </button>

      <hr  className="w-full h-[0.1rem] bg-zinc-700 my-4"/>

      <WishComment name={'Aldo'} wish={'Selamat Menempuh Hidup Baru'} />
      <WishComment name={'Budi'} wish={'Semoga Bahagia Selalu'} />
      <WishComment name={'Albert Irgi'} wish={'Aku Kapan Ya?'} />
    </div>
  );
};

export default Wish;
