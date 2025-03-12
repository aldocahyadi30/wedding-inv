import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const MusicButton = ({isPlaying, togglePlay}) => {
  

  return (
    <>
      {/* Music Button */}
      <button
        id="music-btn"
        onClick={togglePlay}
        className="fixed bottom-10 right-5 bg-zinc-700 poppins-regular cursor-pointer text-zinc-200 text-lg border border-zinc-200 w-12 h-12 rounded-full flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-lg"
      >
        <FontAwesomeIcon
          icon={isPlaying ? faPause : faPlay}
          className="h-6 w-6"
        />
      </button>
    </>
  );
};

export default MusicButton;