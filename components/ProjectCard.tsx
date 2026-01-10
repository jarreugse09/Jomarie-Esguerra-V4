"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Project = {
  title: string;
  slug: string;
  description: string;
  tech?: string[];
};

type Props =
  | { title: string; summary: string; project?: never }
  | { project: Project; title?: never; summary?: never };

export default function ProjectCard(props: Props) {
  const title = props.project ? props.project.title : props.title || "";
  const summary = props.project
    ? props.project.description
    : props.summary || "";
  const slug = props.project
    ? props.project.slug
    : props.title?.replace(/\s+/g, "-").toLowerCase() || "";
  const tech = props.project?.tech || [];

  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 10px 15px rgba(0,0,0,0.1)" }}
      className="p-6 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 cursor-pointer transition-all"
    >
      <Link href={`/projects/${slug}`}>
        <h3 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
          {summary}
        </p>
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tech.slice(0, 3).map((techItem) => (
              <span
                key={techItem}
                className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-700 rounded"
              >
                {techItem}
              </span>
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  );
}
