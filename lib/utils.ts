import { projects, type Project } from "../data/projects";

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjects() {
  return projects;
}
