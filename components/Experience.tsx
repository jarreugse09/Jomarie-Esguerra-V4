"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description: string;
  technologies?: string[];
}

const timeline: TimelineItem[] = [
  {
    type: "work",
    title: "Senior Frontend Developer",
    organization: "Tech Startup Inc.",
    period: "2023 - Present",
    description:
      "Leading frontend development for a SaaS platform. Architected scalable React applications and mentored junior developers.",
    technologies: ["React", "Next.js", "TypeScript", "AWS"],
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    organization: "Digital Agency Co.",
    period: "2021 - 2023",
    description:
      "Built and maintained client websites and web applications. Collaborated with designers and stakeholders to deliver quality products.",
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    organization: "State University",
    period: "2017 - 2021",
    description:
      "Graduated with honors. Focused on software engineering, algorithms, and web development. Active member of tech club.",
  },
  {
    type: "work",
    title: "Junior Developer",
    organization: "StartupLab",
    period: "2020 - 2021",
    description:
      "Intern turned full-time developer. Contributed to various client projects and learned modern development practices.",
    technologies: ["JavaScript", "React", "Express", "PostgreSQL"],
  },
];

export default function Experience() {
  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">Background</div>
          <h2 className="section-heading mb-12">Experience & Education</h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)] hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 md:w-1/2">
                    <div className="crt-card">
                      {/* Type Badge */}
                      <div className="mb-3">
                        <span
                          className={`inline-block px-2 py-1 text-xs terminal-text rounded border ${
                            item.type === "work"
                              ? "border-[var(--accent)] text-[var(--accent)]"
                              : "border-[var(--accent-dim)] text-[var(--accent-dim)]"
                          }`}
                        >
                          {item.type === "work" ? "💼 Work" : "🎓 Education"}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-lg font-bold text-[var(--accent)] mb-1">
                        {item.title}
                      </h3>
                      <div className="text-[var(--fg)] font-medium mb-2">
                        {item.organization}
                      </div>
                      <div className="terminal-text text-xs text-[var(--fg-muted)] mb-3">
                        {item.period}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-3">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      {item.technologies && (
                        <div className="flex flex-wrap gap-1 pt-3 border-t border-[var(--border)]">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs terminal-text text-[var(--accent)]"
                            >
                              {tech}
                              {item.technologies &&
                                tech !==
                                  item.technologies[
                                    item.technologies.length - 1
                                  ] &&
                                " •"}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center w-8 absolute left-1/2 top-0 transform -translate-x-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="w-4 h-4 rounded-full bg-[var(--accent)] border-2 border-[var(--bg)]"
                      style={{ boxShadow: "0 0 10px var(--glow)" }}
                    />
                  </div>

                  {/* Spacer for alternate layout */}
                  <div className="flex-1 md:w-1/2 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Download Resume CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <a
              href="/resume.pdf"
              download
              className="crt-button inline-flex items-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
