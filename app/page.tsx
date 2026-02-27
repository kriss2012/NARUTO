import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Characters from "./components/Characters";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Characters />
    </div>
  );
}
