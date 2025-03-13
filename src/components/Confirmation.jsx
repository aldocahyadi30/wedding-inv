import { React, useState } from "react";

const Confirmation = () => {
  const [formData, setFormData] = useState({
    nama: "",
    status: "",
    pax: "",
    tanggal: new Date().toLocaleDateString("id-ID"),
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwcIQT6KwRvIPYavdmNoPmpgOusNXGfN7zdUrlAT-_wQSw00aTJd4JU2wAmKgb_FXJw/exec", {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="confirmation-div" className="h-[50vh] w-full flex bg-zinc-200 flex-col items-center justify-center p-2">
      <p className="lora-bold text-zinc-700 text-center text-2xl mb-8">KONFIRMASI KEHADIRAN</p>

      <div className="h-auto bg-zinc-700 w-full flex flex-col items-center justify-center p-4">
        <p className="text-center text-zinc-200 poppins-regular text-sm mb-2">Dengan segala hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan menjadi saksi atas janji suci kami di hadapan Tuhan. Terima kasih atas doa dan dukungannya</p>
        <form id="confirmation-form" action="" method="POST" className="w-full h-full">
          <input type="text" id="input-nama" name="nama" className="w-full bg-zinc-200 text-zinc-700 poppins-regular p-2" placeholder="Ketik Nama Anda" onChange={handleChange} required/>
          <div className="flex w-full gap-2 mt-2">
            <select name="status" id="select-status" className="w-[70%] bg-zinc-200 text-zinc-700 poppins-regular p-2" onChange={handleChange} required>
              <option value="Hadir">Bersedia Hadir</option>
              <option value="Tidak Hadir">Maaf, Tidak Dapar Hadir</option>
            </select>
            <input type="number" name="pax" id="input-pax" min={1} max={4} className="w-[30%] bg-zinc-200 text-zinc-700 poppins-regular p-2" onInput={handlePax} onChange={handleChange}/>
          </div>
        </form>
      </div>

      <button id="confirm-btn" onClick={handleSubmit} className="bg-zinc-700 poppins-regular cursor-pointer text-zinc-200 text-lg border text-zinc-200 w-full p-2 mt-4 hover:bg-zinc-800">
        {submitting ? "Sedang Mengonfirmasi..." : "Konfirmasi Kehadiran"}
      </button>
      {success && <p>Form submitted successfully!</p>}
    </div>
  );
};

export default Confirmation;
