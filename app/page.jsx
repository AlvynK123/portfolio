import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section id="home">
        <Hero />
      </section> 
      <section id="projects">
        <Projects />
      </section>
      <section id="about" className="mt-58 md:mt-80">
        <About />
      </section>
      <section id="contact">
        <Cta />
      </section>
    </main>
  );
}
