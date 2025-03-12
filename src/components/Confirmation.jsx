import React from "react";

const Confirmation = () => {
  //handle if the user input exceed the limit of pax
  const handlePax = () => {
    const pax = document.getElementById("input-pax");
    if (pax.value > 4) {
      pax.value = 4;
    }

    if (pax.value < 1) {
      pax.value = 1;
    }
  };

  return (
    <div id="confirmation-div" className="h-[50vh] w-full flex bg-zinc-200 flex-col items-center justify-center p-2">
      <p className="lora-bold text-zinc-700 text-center text-2xl mb-8">KONFIRMASI KEHADIRAN</p>

      <div className="h-auto bg-zinc-700 w-full flex flex-col items-center justify-center p-4">
        <p className="text-center text-zinc-200 poppins-regular text-sm mb-2">Dengan segala hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan menjadi saksi atas janji suci kami di hadapan Tuhan. Terima kasih atas doa dan dukungannya</p>
        <form id="confirmation-form" action="" method="POST" className="w-full h-full">
          <input type="text" id="input-nama" name="Nama" className="w-full bg-zinc-200 text-zinc-700 poppins-regular p-2" placeholder="Ketik Nama Anda" />
          <div className="flex w-full gap-2 mt-2">
            <select name="Status" id="select-status" className="w-[70%] bg-zinc-200 text-zinc-700 poppins-regular p-2">
              <option value="Hadir">Bersedia Hadir</option>
              <option value="Tidak Hadir">Maaf, Tidak Dapar Hadir</option>
            </select>
            <input type="number" name="Pax" id="input-pax" min={1} max={4} className="w-[30%] bg-zinc-200 text-zinc-700 poppins-regular p-2" onInput={handlePax} />
          </div>
        </form>
      </div>

      <button id="confirm-btn" className="bg-zinc-700 poppins-regular cursor-pointer text-zinc-200 text-lg border text-zinc-200 w-full p-2 mt-4 hover:bg-zinc-800">
        Konfirmasi Kehadiran
      </button>
    </div>
  );
};

export default Confirmation;
