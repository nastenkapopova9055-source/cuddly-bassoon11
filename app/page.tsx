import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Responsibilities from "@/components/Responsibilities";
import Skills from "@/components/Skills";
import Career from "@/components/Career";
import Benefits from "@/components/Benefits";
import Game from "@/components/Game";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Responsibilities />
        <Skills />
        <Career />
        <Benefits />
        <Game />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
