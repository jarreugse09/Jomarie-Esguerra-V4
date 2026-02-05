"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { projects } from "@/data/projects";
import { ProjectBentoCard } from "@/components/ProjectBentoCard";
import { FlickeringGrid } from "@/components/online-comp/FlickeringGrid";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");

  const initialIndex = projectId
    ? projects.findIndex((p) => String(p.id) === projectId)
    : 0;

  const [currentIndex, setCurrentIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0,
  );

  const currentProject = projects[currentIndex];
  const totalProjects = projects.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  return (
    <section className="!relative !min-h-screen !flex !items-center !justify-center !px-4 md:!px-8 !py-20 !overflow-hidden !bg-black">
      {/* Back Button */}
      <Link
        href="/#projects"
        className="!absolute !top-24 !left-4 md:!left-8 !z-20 !p-3 !rounded-lg !border !border-[var(--accent)] !text-[var(--accent)] hover:!bg-[var(--accent)]/10 !transition-all !duration-300 !flex !items-center !gap-2"
      >
        <FaChevronLeft className="!w-4 !h-4" />
        <span className="!text-sm !font-mono">Back</span>
      </Link>

      {/* FlickeringGrid Background */}
      <FlickeringGrid
        className="!absolute !inset-0"
        squareSize={4}
        gridGap={6}
        flickerChance={0.3}
        color="rgb(255, 255, 255)"
        maxOpacity={0.1}
      />

      <div className="!container !max-w-7xl !relative !z-10 !w-full">
        {/* Project Display */}
        <div className="!mb-2">
          <ProjectBentoCard project={currentProject} />
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="!flex !items-center !justify-center !gap-6 !py-4"
        >
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            disabled={totalProjects <= 1}
            className="!p-3 !rounded-lg !border !border-[var(--accent)] !text-[var(--accent)] hover:!bg-[var(--accent)]/10 !transition-all !duration-300 disabled:!opacity-50 disabled:!cursor-not-allowed hover:disabled:!bg-transparent"
            aria-label="Previous project"
          >
            <FaChevronLeft className="!w-5 !h-5" />
          </motion.button>

          {/* Project Counter */}
          <p className="!text-sm !uppercase !tracking-widest !text-[var(--accent)] !font-mono !px-6">
            {currentIndex + 1} / {totalProjects}
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={totalProjects <= 1}
            className="!p-3 !rounded-lg !border !border-[var(--accent)] !text-[var(--accent)] hover:!bg-[var(--accent)]/10 !transition-all !duration-300 disabled:!opacity-50 disabled:!cursor-not-allowed hover:disabled:!bg-transparent"
            aria-label="Next project"
          >
            <FaChevronRight className="!w-5 !h-5" />
          </motion.button>
        </motion.div>

        {/* All Projects List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="!flex !flex-wrap !justify-center !gap-10 !pt-6">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setCurrentIndex(index)}
                className={`!text-sm !transition-all !duration-300 !py-1 ${
                  index === currentIndex
                    ? "!text-[var(--accent)] !font-semibold"
                    : "!text-[var(--fg-muted)] hover:!text-[var(--accent)]"
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
