import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Event = () => {
  return (
    <div id="event-div" className="h-auto w-full flex bg-zinc-200 flex-col items-center justify-center p-8 gap-12">
      <div className="h-88 bg-zinc-100 w-full flex shadow-2xl rounded-lg">
      <div className="w-1/4 bg-zinc-700 flex items-center justify-center relative">
          <p className="poppins-bold text-white text-2xl transform rotate-270 whitespace-nowrap tracking-widest">PEMBERKATAN</p>
        </div>
        <div className="w-3/4 flex flex-col">
          <div className="flex items-center">
            <div className="w-[45%] flex justify-center">
              <p className="poppins-regular text-zinc-700 text-[4.5rem] text-right">22</p>
            </div>
            <div className="w-[55%] flex flex-col justify-center">
              <p className="poppins-regular text-zinc-700 text-sm text-left tracking-widest">Sabtu</p>
              <p className="poppins-regular text-zinc-700 text-sm text-left tracking-widest">Maret</p>
              <p className="poppins-regular text-zinc-700 text-sm text-left tracking-widest">2025</p>
            </div>
          </div>
          <hr className="bg-zinc-700  w-[90%] h-[0.1rem] mx-auto" />

          <div className="flex flex-col p-4 justify-between h-full">
            <p className="text-zinc-700  text-sm align-middle poppins-regular">
              <FontAwesomeIcon icon={faClock} className="text-zinc-700 text-base mr-2" />
              11:00 WIB s/d Selesai
            </p>
            <p className="poppins-bold text-zinc-700 text-sm align-middle">
              <FontAwesomeIcon icon={faLocationDot} className="text-zinc-700 text-base mr-2" />
              LOKASI ACARA
            </p>
            <p className="font-regular text-zinc-700 text-sm">
              <span className="poppins-bold">Gereja GBIS Peta Denpasar</span>
              <br />
              Jalan Bedahulu No.19 <br />
              Peguyangan, Kec. Denpasar Utara <br />
              Kota Denpasar, Bali
            </p>
            <button className="bg-zinc-100 poppins-regular text-xs border text-zinc-500 w-fit p-1 align-middle" style={{ width: "100%", cursor: "pointer" }}>
              <FontAwesomeIcon icon={faMapMarkedAlt} className="text-sm mr-2" />
              Google Map
            </button>
          </div>
        </div>
      </div>
      <div className="h-88 bg-zinc-100 w-full flex shadow-2xl rounded-lg">
        <div className="w-1/4 bg-zinc-700 flex items-center justify-center relative">
          <p className="poppins-bold text-white text-3xl transform rotate-270 whitespace-nowrap tracking-widest">RESEPSI</p>
        </div>
        <div className="w-3/4 flex flex-col">
          <div className="flex items-center">
            <div className="w-[45%] flex justify-center">
              <p className="poppins-regular text-zinc-700 text-[4.5rem] text-right">22</p>
            </div>
            <div className="w-[55%] flex flex-col justify-center">
              <p className="poppins-regular text-zinc-700 text-sm text-left tracking-widest">Sabtu</p>
              <p className="poppins-regular text-zinc-700 text-sm text-left tracking-widest">Maret</p>
              <p className="poppins-regular text-zinc-700 text-sm text-left tracking-widest">2025</p>
            </div>
          </div>
          <hr className="bg-zinc-700  w-[90%] h-[0.1rem] mx-auto" />

          <div className="flex flex-col p-4  justify-between h-full">
            <p className="text-zinc-700  text-sm align-middle poppins-regular">
              <FontAwesomeIcon icon={faClock} className="text-zinc-700 text-base mr-2" />
              11:00 WIB s/d Selesai
            </p>
            <p className="poppins-bold text-zinc-700 text-sm align-middle">
              <FontAwesomeIcon icon={faLocationDot} className="text-zinc-700 text-base mr-2" />
              LOKASI ACARA
            </p>
            <p className="font-regular text-zinc-700 text-sm">
              <span className="poppins-bold">Gereja GBIS Peta Denpasar</span>
              <br />
              Jalan Bedahulu No.19 <br />
              Peguyangan, Kec. Denpasar Utara <br />
              Kota Denpasar, Bali
            </p>
            <button className="bg-zinc-100 poppins-regular text-xs border text-zinc-500 w-fit p-1" style={{ width: "100%", cursor: "pointer" }}>
              <FontAwesomeIcon icon={faMapMarkedAlt} className="text-sm mr-2" />
              Google Map
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
