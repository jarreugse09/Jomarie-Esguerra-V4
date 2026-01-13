"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  impact: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack online store with payment integration, inventory management, and real-time order tracking.",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    impact: "Increased sales by 40%",
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description:
      "Collaborative project management tool with real-time updates, team chat, and analytics.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    impact: "Used by 500+ teams",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description:
      "AI-powered tool that generates marketing copy, blog posts, and social media content.",
    techStack: ["Next.js", "OpenAI API", "Tailwind", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    impact: "10k+ generations/month",
  },
  {
    id: 4,
    title: "Portfolio CMS",
    description:
      "Headless CMS for developers to manage portfolios with markdown support and custom themes.",
    techStack: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    githubUrl: "#",
    impact: "Open source • 200+ stars",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-4 md:px-8">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">Projects</div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="crt-card group cursor-pointer"
              >
                {/* Project Header */}
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 flex items-center justify-center rounded border border-[var(--border)] text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all"
                          aria-label="View live demo"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          onClick={(e) => e.stopPropagation()}
                          className="w-8 h-8 flex items-center justify-center rounded border border-[var(--border)] text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all"
                          aria-label="View on GitHub"
                        >
                          <span className="text-xs font-bold">GH</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs terminal-text border border-[var(--border)] rounded text-[var(--accent)] bg-[var(--bg)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact Badge */}
                <div className="pt-4 border-t border-[var(--border)]">
                  <div className="terminal-text text-xs text-[var(--accent)] flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
                    {project.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link href="/projects" className="crt-button inline-block">
              View All Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
