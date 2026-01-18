"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const getNavTitle = () => {
    if (pathname === "/projects") {
      return "&gt; Jomarie/Projects";
    }
    return "&gt; Jomarie";
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]">
      <div className="container">
        <div className="flex items-center justify-between py-6 md:py-7">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="terminal-text font-bold text-xl md:text-2xl
                         text-[var(--accent)]
                         hover:text-[var(--accent-bright)]
                         transition-colors"
              dangerouslySetInnerHTML={{ __html: getNavTitle() }}
            />
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 px-3! py-3!">
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="w-10 h-10 flex flex-col justify-center items-center"
            >
              <span className="w-6 h-0.5 bg-[var(--accent)] mb-1.5" />
              <span className="w-6 h-0.5 bg-[var(--accent)] mb-1.5" />
              <span className="w-6 h-0.5 bg-[var(--accent)]" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">
            <div className="flex flex-col p-6 gap-4">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="terminal-text text-base text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#projects"
                onClick={() => setOpen(false)}
                className="terminal-text text-base text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="terminal-text text-base text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
