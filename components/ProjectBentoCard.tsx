"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiSocketdotio,
  SiStripe,
  SiPython,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiExpress,
  SiFlask,
} from "react-icons/si";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { type Project } from "@/data/projects";

const techIcons: Record<string, React.ReactNode> = {
  React: <SiReact className="w-7 h-7" />,
  "Next.js": <SiNextdotjs className="w-7 h-7" />,
  TypeScript: <SiTypescript className="w-7 h-7" />,
  Tailwind: <SiTailwindcss className="w-7 h-7" />,
  "Framer Motion": <SiFramer className="w-7 h-7" />,
  Node: <SiNodedotjs className="w-7 h-7" />,
  "Node.js": <SiNodedotjs className="w-7 h-7" />,
  Nodejs: <SiNodedotjs className="w-7 h-7" />,
  Express: <SiExpress className="w-7 h-7" />,
  "Socket.io": <SiSocketdotio className="w-7 h-7" />,
  Stripe: <SiStripe className="w-7 h-7" />,
  Python: <SiPython className="w-7 h-7" />,
  Django: <SiDjango className="w-7 h-7" />,
  PostgreSQL: <SiPostgresql className="w-7 h-7" />,
  MongoDB: <SiMongodb className="w-7 h-7" />,
  Docker: <SiDocker className="w-7 h-7" />,
  Git: <SiGit className="w-7 h-7" />,
  JavaScript: <SiReact className="w-7 h-7" />,
  Flask: <SiFlask className="w-7 h-7" />,
};

interface ProjectBentoCardProps {
  project: Project;
}

const ImageHeader = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    whileHover={{ scale: 1.08 }}
    className="!relative !w-full !h-full !rounded-xl !overflow-hidden"
  >
    <Image src={src} alt={alt} fill className="!object-cover" />
  </motion.div>
);

const TechStackIcon = ({ tech }: { tech: string }) => (
  <motion.div
    whileHover={{ scale: 1.25, rotate: 8 }}
    className="!p-4 !text-[var(--accent)]"
    title={tech}
  >
    {techIcons[tech] || <span className="!text-sm">{tech}</span>}
  </motion.div>
);

const LinksIcon = ({ repo, live }: { repo?: string; live?: string }) => (
  <div className="!flex !gap-3 !w-full">
    {repo && (
      <motion.a
        href={repo}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="!flex-1 !text-[var(--accent)] !p-4 !rounded-lg !border !border-[var(--accent)]/50 hover:!border-[var(--accent)] hover:!bg-[var(--accent)]/10 !transition-all !duration-300 !flex !items-center !justify-center"
        title="GitHub Repository"
      >
        <FaGithub className="!w-7 !h-7" />
      </motion.a>
    )}
    {live && (
      <motion.a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="!flex-1 !text-[var(--accent)] !p-4 !rounded-lg !border !border-[var(--accent)]/50 hover:!border-[var(--accent)] hover:!bg-[var(--accent)]/10 !transition-all !duration-300 !flex !items-center !justify-center"
        title="Live Demo"
      >
        <FaExternalLinkAlt className="!w-7 !h-7" />
      </motion.a>
    )}
  </div>
);

export function ProjectBentoCard({ project }: ProjectBentoCardProps) {
  const imageUrl = project.imageUrl || "/placeholder.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full"
    >
      <BentoGrid>
        {/* Image - 2/5 */}
        <BentoGridItem
          header={<ImageHeader src={imageUrl} alt={project.title} />}
          className="md:col-span-2"
        />

        {/* Title and Overview - 3/5 */}
        <BentoGridItem
          title={project.title}
          description={
            <div className="!text-base !text-[var(--fg-muted)]">
              {project.overview}
            </div>
          }
          className="md:col-span-3"
        />

        {/* Key Features - 3/5 */}
        <BentoGridItem
          title="Key Features"
          description={
            <ul className="!space-y-3 !mt-3">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="!text-base !text-[var(--fg-muted)] !flex !gap-2 !leading-relaxed"
                >
                  <span className="!text-[var(--accent)] !min-w-fit !text-lg">
                    •
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          }
          className="md:col-span-3"
        />

        {/* Tech Stack & Links - 2/5 */}
        <BentoGridItem
          title="Links & Stack"
          description={
            <div className="!flex !flex-col !gap-6 !mt-3 !items-center !justify-start !h-full">
              <div className="!flex !gap-3 !flex-wrap !justify-center">
                {project.techStack.map((tech) => (
                  <TechStackIcon key={tech} tech={tech} />
                ))}
              </div>
              <div className="!w-full !mt-30">
                <LinksIcon repo={project.githubUrl} live={project.liveUrl} />
              </div>
            </div>
          }
          className="md:col-span-2"
        />
      </BentoGrid>
    </motion.div>
  );
}
