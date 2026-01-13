"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/90 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="terminal-text font-bold text-lg text-[var(--accent)] hover:text-[var(--accent-bright)] transition-colors"
            >
              &gt; Jomarie
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm terminal-text text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#projects"
              className="text-sm terminal-text text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-sm terminal-text text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
            >
              Contact
            </Link>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
              className="w-8 h-8 flex flex-col justify-center items-center"
            >
              <div className="w-5 h-0.5 bg-[var(--accent)] mb-1" />
              <div className="w-5 h-0.5 bg-[var(--accent)] mb-1" />
              <div className="w-5 h-0.5 bg-[var(--accent)]" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)]">
            <div className="flex flex-col p-4 gap-3">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="terminal-text text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/#projects"
                onClick={() => setOpen(false)}
                className="terminal-text text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="terminal-text text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
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
