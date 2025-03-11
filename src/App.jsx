import "./App.css";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import Profile from "./components/Profile";

function App() {

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Hero />
      <Countdown />
      <Profile />
    </div>
  );
}

export default App;
