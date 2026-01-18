"use client";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import CTA from "../components/CTA";
import Footer from "../components/footer";
import GradualBlur from "../components/online-comp/GradualBlur";
import Docker from "../components/online-comp/Docker";
import { useRouter } from "next/navigation";
import { VscHome, VscAccount, VscTools, VscArchive } from "react-icons/vsc";

export default function Home() {
  const router = useRouter();

  const dockItems = [
    {
      icon: <VscHome />,
      label: "Home",
      onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    {
      icon: <VscAccount />,
      label: "About",
      onClick: () =>
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
    },
    {
      icon: <VscTools />,
      label: "Skills",
      onClick: () =>
        document.getElementById("skills")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
    },
    {
      icon: <VscArchive />,
      label: "Projects",
      onClick: () => router.push("/projects"),
    },
  ];

  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <div className="flex flex-col gap-y-16 pb-32">
        <Hero />
        <section id="about" className="scroll-mt-38">
          <About />
        </section>
        <section id="skills" className="scroll-mt-38">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        <section id="cta" className="scroll-mt-38">
          <CTA />
        </section>
        <Footer />
      </div>

      {/* Bottom Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60]">
        <Docker items={dockItems} panelHeight={60} baseItemSize={40} />
      </div>

      {/* Bottom Blur */}
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
