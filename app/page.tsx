"use client";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import CTA from "../components/CTA";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-y-16">
      {/* Using 'flex flex-col gap-y-32' automatically adds 
          spacing between every direct child component.
      */}

      <Hero />

      <section>
        <About />
      </section>

      <section>
        <Skills />
      </section>

      <section>
        <Projects />
      </section>

      {/* <section>
        <Experience />
      </section> */}

      <section>
        <CTA />
      </section>

      <Footer />
    </main>
  );
}
