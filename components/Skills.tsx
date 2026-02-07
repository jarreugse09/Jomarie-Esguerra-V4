"use client";

import Marquee from "react-fast-marquee";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiLinux,
  SiVercel,
  SiRender,
  SiHtml5,
  SiCss3,
  SiPython,
} from "react-icons/si";

// Skill arrays
const frontend = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
];

const backend = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Python", icon: SiPython },
];

const tools = [
  { name: "Git", icon: SiGit },
  { name: "Linux", icon: SiLinux },
  { name: "Vercel", icon: SiVercel },
  { name: "Render", icon: SiRender },
];

// Define a type for skill items
type SkillItem = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

// Skill card component
function SkillCard({ item }: { item: SkillItem }) {
  const Icon = item.icon;
  return (
    <div className="crt-skill-card mr-8 mb-4">
      <Icon className="crt-icon" />
      <span className="crt-skill-text">{item.name}</span>
    </div>
  );
}

// Seamless marquee
function SeamlessMarquee({
  items,
  speed = 50,
  direction = "left",
}: {
  items: SkillItem[];
  speed?: number;
  direction?: "left" | "right";
}) {
  const duplicatedItems = [...items, ...items, ...items]; // duplicated for seamless effect
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-6xl w-full">
        <Marquee
          gradient={false}
          speed={speed}
          direction={direction}
          pauseOnHover
          className="flex space-x-4"
        >
          {duplicatedItems.map((item, index) => (
            <SkillCard key={index} item={item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container max-w-6xl mx-auto text-center mb-14">
        <h2 className="section-title">Technical Skills</h2>
      </div>

      <div className="flex flex-col gap-4">
        {" "}
        {/* Frontend */}
        <SeamlessMarquee items={frontend} speed={60} direction="right" />
        {/* Backend */}
        <SeamlessMarquee items={backend} speed={50} direction="left" />
        {/* Tools */}
        <SeamlessMarquee items={tools} speed={55} direction="right" />
      </div>

      <div className="mt-20 text-center">
        <div className="h-6" />{" "}
        <p className="terminal-text text-sm text-[var(--fg-muted)]">
          <span className="text-[var(--accent)]">++</span> Always learning new
          technologies and best practices{" "}
          <span className="text-[var(--accent)]">++</span>
        </p>
      </div>
    </section>
  );
}
