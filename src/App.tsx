import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Experience } from "./components/Experience";
import { Portfolio } from "./components/Portfolio";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Hero />
      <Services />
      <Experience />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}
