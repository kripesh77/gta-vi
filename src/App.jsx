import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
