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

  const handlePax = () => {
    const pax = document.getElementById("input-pax");
    if (pax.value > 4) {
      pax.value = 4;
    }

    if (pax.value < 0) {
      pax.value = 0;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nama || !formData.status || !formData.pax) {
      alert("Mohon isi semua kolom yang tersedia");
      return;
    }
    setSubmitting(true);

    try {
      const response = await fetch(import.meta.env.VITE_GOOGLE_APP_SCRIPT_URL, {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ nama: "", status: "", pax: "" }); // Clear the form
        alert("Konfirmasi kehadiran berhasil dikirim. Terima kasih.");
      } else {
        alert("Gagal mengirimkan konfirmasi. Silakan coba lagi.");
        console.error("Failed to submit form");
      }
    } catch (error) {
      alert("Gagal mengirimkan konfirmasi. Silakan coba lagi.");
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div id="confirmation-div" className="h-[50vh] w-full flex bg-zinc-200 flex-col items-center justify-center p-2">
      <p className="lora-bold text-zinc-700 text-center text-2xl mb-8">KONFIRMASI KEHADIRAN</p>

      <div className="h-auto bg-zinc-700 w-full flex flex-col items-center justify-center p-4">
        <p className="text-center text-zinc-200 poppins-regular mb-6">Dengan segala hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan menjadi saksi atas janji suci kami di hadapan Tuhan</p>
        <form id="confirmation-form" action="" method="POST" className="w-full h-full">
          <input type="text" id="input-nama" name="nama" className="w-full bg-zinc-200 text-zinc-700 poppins-regular p-2" placeholder="Ketik Nama Anda" onChange={handleChange} required />
          <div className="flex w-full gap-2 mt-2">
            <select name="status" id="select-status" className="w-[70%] bg-zinc-200 text-zinc-700 poppins-regular p-2" onChange={handleChange} required>
              <option value="" disabled selected hidden>
                -- Pilih Kehadiran --
              </option>
              <option value="Hadir">Bersedia Hadir</option>
              <option value="Tidak Hadir">Maaf, Tidak Dapar Hadir</option>
            </select>
            <input type="number" name="pax" id="input-pax" min={0} max={4} className="w-[30%] bg-zinc-200 text-zinc-700 poppins-regular p-2" onInput={handlePax} onChange={handleChange} />
          </div>
        </form>
      </div>

      <button id="confirm-btn" onClick={handleSubmit} className="bg-zinc-700 poppins-regular cursor-pointer text-zinc-200 text-lg border text-zinc-200 w-full p-2 mt-4 hover:bg-zinc-800">
        {submitting ? (
          <>
            <div class="flex h-auto w-full items-center justify-center overflow-x-scroll rounded-lg  lg:overflow-visible">
              <svg class="text-gray-300 animate-spin mr-3" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                  stroke="currentColor"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                  stroke="currentColor"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="text-zinc-200"
                ></path>
              </svg>
              <p>Mengonfirmasi...</p>
            </div>
          </>
        ) : (
          "Konfirmasi Kehadiran"
        )}
      </button>
    </div>
  );
};

export default Confirmation;
