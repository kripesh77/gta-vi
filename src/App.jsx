import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import FirstVideo from "./sections/FirstVideo";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FirstVideo />
    </main>
  );
}

export default App;
