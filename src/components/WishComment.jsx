import React from "react";

const WishComment = ({ name, wish, time }) => {
  const formatRelativeTime = (timestamp) => {
    const now = new Date(); // Current time
    const date = new Date(timestamp.seconds * 1000); 
    const diffInSeconds = Math.floor((now - date) / 1000); 

    const intervals = {
      tahun: 31536000,
      bulan: 2592000,
      minggu: 604800,
      hari: 86400,
      jam: 3600,
      menit: 60,
    };

    for (const [unit, seconds] of Object.entries(intervals)) {
      const interval = Math.floor(diffInSeconds / seconds);
      if (interval >= 1) {
        return `${interval} ${unit} lalu`;
      }
    }

    return "baru saja";
  };
  return (
    <div className="w-full flex flex-col bg-zinc-100 p-2 rounded-lg mb-1">
      <div className="flex justify-between">
        <p className="poppins-bold text-sm text-zinc-700">{name}</p>
        <p className="poppins-bold-italic  text-sm text-zinc-500">{formatRelativeTime(time)}</p>
      </div>
      <p className="poppins-regular text-zinc-500 text-left">{wish}</p>
    </div>
  );
};

export default WishComment;
