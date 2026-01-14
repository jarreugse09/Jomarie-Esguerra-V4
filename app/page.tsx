"use client";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import CTA from "../components/CTA";
import Footer from "../components/footer";
import GradualBlur from "../components/online-comp/GradualBlur";

export default function Home() {
  return (
    /* Ensure 'h-full' is NOT used here if you want natural scrolling. 
       'min-h-screen' is fine. Remove any 'overflow-y-auto' from this tag.
    */
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      {/* This is your primary content. 
         Make sure no parent of this div has a fixed height (like h-screen or h-[500px]).
      */}
      <div className="flex flex-col gap-y-16 pb-24">
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="cta">
          <CTA />
        </section>
        <Footer />
      </div>

      {/* GradualBlur stays FIXED to the viewport, it doesn't affect scrolling */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none h-[12rem]">
        <GradualBlur
          target="parent"
          position="bottom"
          height="100%"
          strength={10}
          divCount={1.5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>
    </main>
  );
}
