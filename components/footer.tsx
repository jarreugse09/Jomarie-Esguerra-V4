"use client";

export default function Footer() {
  return (
    <footer className="bg-neutral-200 dark:bg-neutral-900 py-8 mt-20">
      <div className="container mx-auto px-6 md:px-16 text-center text-sm text-neutral-600 dark:text-neutral-400 space-y-4">
        <p>© 2026 Jomarie Esguerra. All rights reserved.</p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
