'use client';

import Link from "next/link";
import MotionCard from "./MotionCard";

type Props = {
  title: string;
  summary: string;
};

export default function ProjectCard({ title, summary }: Props) {
  return (
    <MotionCard
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-4 rounded-lg border border-black/5"
      whileHover={{ scale: 1.02, borderColor: 'rgba(0,77,97,0.18)' }}
    >
      <Link href={`/projects/${title}`} className="block">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="mt-1 text-sm text-[var(--color-accent)]">
          {summary}
        </p>
      </Link>
    </MotionCard>
  );
}
