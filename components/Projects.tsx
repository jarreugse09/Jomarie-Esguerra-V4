"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, clientWidth } = containerRef.current;
    const center = scrollLeft + clientWidth / 2;
    const items = containerRef.current.querySelectorAll(".project-card");

    let closestIndex = 0;
    let minDistance = Infinity;

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const itemCenter =
        rect.left +
        rect.width / 2 +
        scrollLeft -
        containerRef.current!.getBoundingClientRect().left;
      const distance = Math.abs(center - itemCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    setActiveIndex(closestIndex % projects.length);
  };

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const firstCard = containerRef.current.querySelector(".project-card");
      if (!firstCard) return;
      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap = 24; // gap-6 = 24px
      containerRef.current.scrollBy({
        left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleInfinite = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      if (scrollLeft + clientWidth >= scrollWidth - 10)
        container.scrollLeft = clientWidth;
      if (scrollLeft <= 5) container.scrollLeft = scrollWidth / 3;
    };
    container.addEventListener("scroll", handleInfinite);
    container.scrollLeft = container.clientWidth;
    return () => container.removeEventListener("scroll", handleInfinite);
  }, []);

  const infiniteProjects = [...projects, ...projects, ...projects];

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden bg-[var(--bg)]"
    >
      <div className="container max-w-[95vw] mx-auto px-4">
        <div className="section-title mb-12 uppercase tracking-widest text-[var(--accent)] opacity-100">
          Selected_Works
        </div>
        <div className="relative group/carousel">
          {/* Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-48 z-20 bg-gradient-to-r from-[var(--bg)] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-48 z-20 bg-gradient-to-l from-[var(--bg)] to-transparent pointer-events-none" />

          {/* Nav Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-5 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all opacity-100 group-hover/carousel:opacity-100 shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)]"
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-5 rounded-full bg-[var(--bg)] border border-[var(--border)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all opacity-100 group-hover/carousel:opacity-100 shadow-[0_0_20px_rgba(var(--accent-rgb),0.3)]"
          >
            <svg
              width="34"
              height="34"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div
            ref={containerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto py-10 no-scrollbar snap-x snap-mandatory"
          >
            {infiniteProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                whileHover={{ y: -10 }}
                onClick={() => router.push("/projects")}
                role="button"
                tabIndex={0}
                className="project-card w-[85vw] md:w-[400px] snap-center crt-card group flex flex-col h-[500px] overflow-hidden flex-shrink-0 !p-0 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--accent-rgb),0.2)] cursor-pointer"
              >
                {/* 1. IMAGE: Perfectly Flush */}
                <div className="relative w-full h-60 overflow-hidden m-0 p-0 bg-[var(--bg-secondary)]">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    priority={false}
                    sizes="(max-width: 768px) 85vw, 400px"
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* 2. CONTENT: Inset */}
                <div className="flex-1 p-6 bg-[var(--bg-secondary)] border-t border-[var(--border)] flex flex-col overflow-hidden min-h-0">
                  {/* TOP SECTION: Title, Buttons, Desc */}
                  <div className="flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-3">
                      {/* Title */}
                      <h3 className="mt-3! ml-5! text-4xl font-bold text-[var(--fg)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>

                      {/* CIRCULAR ACTION BUTTONS (Aligned with Title) */}
                      <div className="flex gap-3 mt-3 mr-5!">
                        {/* GitHub Button (Conditional) */}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                            className="mt-5! w-11 h-11 flex items-center justify-center rounded-full border border-[var(--border)] text-[var(--fg)] bg-[var(--bg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors z-10"
                            title="View Source"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </motion.a>
                        )}

                        {/* Live Button (Conditional) */}
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1, rotate: -10 }}
                            whileTap={{ scale: 0.9 }}
                            className="mt-5! w-11 h-11 flex items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg)] shadow-[0_0_15px_rgba(var(--accent-rgb),0.5)] z-10"
                            title="Live Demo"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="ml-5! text-[var(--fg-muted)] text-lg line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* BOTTOM SECTION: Tech Stack Only */}
                  <div className="ml-5! mt-2 mb-3! flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className=" py-1! px-1! text-xs border border-[var(--border)] rounded-sm text-[var(--accent)] uppercase tracking-tighter bg-[var(--bg)]/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="h-6" /> {/* COUNTER UI */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex gap-3">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  i === activeIndex
                    ? "w-12 bg-[var(--accent)]"
                    : "w-3 bg-[var(--border)]"
                }`}
              />
            ))}
          </div>
          <div className="terminal-text text-xl font-bold text-[var(--accent)]">
            <span className="opacity-40">PROJECT_NO._</span>
            {activeIndex + 1} / {projects.length}
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
