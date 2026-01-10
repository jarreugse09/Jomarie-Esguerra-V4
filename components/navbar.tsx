"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-semibold text-lg text-neutral-900 dark:text-white"
          >
            Jomarie
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm hover:underline text-neutral-700 dark:text-neutral-300"
          >
            Professional
          </Link>
          <Link
            href="/projects"
            className="text-sm hover:underline text-neutral-700 dark:text-neutral-300"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-sm hover:underline text-neutral-700 dark:text-neutral-300"
          >
            Contact
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="p-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col p-4 gap-3">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-neutral-700 dark:text-neutral-300"
            >
              Professional
            </Link>
            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className="text-neutral-700 dark:text-neutral-300"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-neutral-700 dark:text-neutral-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
