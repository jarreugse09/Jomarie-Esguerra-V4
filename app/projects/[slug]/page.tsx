import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

type Props = { params: { slug: string } };

export default function ProjectDetail({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return (
      <section>
        <h2 className="text-xl font-semibold">Project not found</h2>
        <Link href="/projects" className="text-sm text-blue-600 underline">Back to projects</Link>
      </section>
    );
  }

  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-black/70 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded bg-black/5">{t}</span>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-md border p-4">
          {project.images && project.images.length > 0 ? (
            <Image src={project.images[0]} alt={project.title} width={800} height={450} className="w-full h-auto" />
          ) : (
            <div className="w-full h-56 bg-black/5 flex items-center justify-center">No image</div>
          )}
        </div>
        <div>
          <div className="mb-4">
            <h3 className="font-semibold">About</h3>
            <p className="text-black/70">{project.description}</p>
          </div>

          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="inline-block btn-primary px-3 py-2 rounded">
              Live demo
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className="inline-block ml-2 px-3 py-2 border rounded">
              Repository
            </a>
          )}

          <div className="mt-6">
            <Link href="/projects" className="text-sm text-blue-600 underline">← Back to projects</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
