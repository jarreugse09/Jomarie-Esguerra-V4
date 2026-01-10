export type Project = {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  live?: string;
  repo?: string;
  images?: string[];
};

export const projects: Project[] = [
  {
    title: "Portfolio v2",
    slug: "portfolio-v2",
    description: "A polished, responsive portfolio built with Next.js, Tailwind and Framer Motion.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    repo: "https://github.com/your/repo",
    images: ['/placeholder-1.png']
  },
  {
    title: "Task Manager",
    slug: "task-manager",
    description: "A collaborative task manager with real-time sync and drag-and-drop.",
    tech: ["React", "Node", "Socket.io"],
    images: ['/placeholder-2.png']
  },
  {
    title: "E-commerce Demo",
    slug: "ecommerce-demo",
    description: "A demo storefront with product pages, cart, and checkout UI.",
    tech: ["Next.js", "Stripe", "Tailwind"],
    images: ['/placeholder-3.png']
  },
];
