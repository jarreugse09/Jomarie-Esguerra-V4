import Hero from '../components/Hero';
import Education from '../components/Education';
import Bento from '../components/Bento';
import BentoCard from '../components/BentoCard';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/footer';

export default function Home() {
  const projects = [
    { id: 1, title: 'Project One', summary: 'Short summary of project one.' },
    { id: 2, title: 'Project Two', summary: 'Short summary of project two.' },
    { id: 3, title: 'Project Three', summary: 'Short summary of project three.' },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-light)] text-[var(--color-dark)]">
      <div className="container py-16">
        <Hero />

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div className="card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">Education</h2>
              <Education />
            </div>

            <div className="card p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--color-primary)]">Bento</h2>
              <Bento />
            </div>
          </div>

          <aside className="space-y-4">
            {projects.map(p => (
              <ProjectCard key={p.id} title={p.title} summary={p.summary} />
            ))}
          </aside>
        </section>
      </div>

      <Footer />
    </main>
  );
}
