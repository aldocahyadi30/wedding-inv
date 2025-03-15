import "./App.css";
import { useState, useRef, useEffect } from "react";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Event from "./components/Event";
import Gallery from "./components/Gallery";
import Confirmation from "./components/Confirmation";
import Gift from "./components/Gift";
import MusicButton from "./components/MusicButton";
import Music from "./assets/music.mp3";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Play music after first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play();
        setIsPlaying(true);
      }
      // Remove the event listener after the first interaction
      document.removeEventListener("click", handleFirstInteraction);
    };

    // Add event listener for the first user interaction
    document.addEventListener("click", handleFirstInteraction);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("click", handleFirstInteraction);
    };
  }, []);

  // Toggle play/pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause(); // Pause the music
      } else {
        audioRef.current.play(); // Play the music
      }
      setIsPlaying(!isPlaying); // Toggle the state
    }
  };
  
  return (
    <div className="w-screen flex justify-center items-center">
      <div className="h-auto w-screen flex flex-col justify-center items-center max-w-[428px] mx-auto">
        <Hero />
        <Countdown />
        <Profile />
        <Event />
        <Gallery />
        <Confirmation />
        <Gift />

        <p className="h-auto w-full flex flex-col bg-zinc-700 items-center justify-center py-2 px-4 pb-10 lora-bold text-white text-center text-xl">TERIMA KASIH</p>

        <audio ref={audioRef} loop>
          <source src={Music} type="audio/mpeg" />
        </audio>
        <MusicButton isPlaying={isPlaying} togglePlay={togglePlay} />
      </div>
    </div>
  );
}

export default App;
