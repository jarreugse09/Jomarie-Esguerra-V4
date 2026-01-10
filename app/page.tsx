"use client";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Bento from "../components/Bento";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/footer";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      summary: "A modern portfolio using Next.js, Tailwind, and Framer Motion.",
    },
    {
      id: 2,
      title: "E-commerce App",
      summary: "React + Redux online store with payment integration.",
    },
    {
      id: 3,
      title: "Blog CMS",
      summary: "Content management system with Next.js and markdown support.",
    },
  ];

  return (
    <main className="bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-16 py-20 space-y-20">
        {/* Education + Skills */}
        <section className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            {/* Education Card */}
            <div className="p-8 rounded-xl bg-white dark:bg-neutral-800 shadow-lg">
              <h2 className="text-2xl font-semibold text-primary-500 mb-6">
                Education
              </h2>
              <Education />
            </div>

            {/* Skills / Bento Card */}
            <div className="p-8 rounded-xl bg-white dark:bg-neutral-800 shadow-lg">
              <h2 className="text-2xl font-semibold text-primary-500 mb-6">
                Skills & Highlights
              </h2>
              <Bento />
            </div>
          </div>

          {/* Projects Sidebar */}
          <aside className="space-y-6" id="projects">
            <h2 className="text-2xl font-semibold text-primary-500 mb-4">
              Selected Projects
            </h2>
            {projects.map((p) => (
              <ProjectCard key={p.id} title={p.title} summary={p.summary} />
            ))}
          </aside>
        </section>

        {/* Optional Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in collaborating?
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
            Feel free to reach out for project collaborations, freelance work,
            or just a chat.
          </p>
          <a
            href="/contact"
            className="px-8 py-4 rounded-md bg-primary-500 text-white font-medium hover:bg-primary-600 transition"
          >
            Contact Me
          </a>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
