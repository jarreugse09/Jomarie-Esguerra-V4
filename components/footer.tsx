"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 md:px-8 border-t border-[var(--border)] bg-[var(--bg-elevated)]">
      <div className="container max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="terminal-text font-bold text-xl text-[var(--accent)] mb-3">
              &gt; Jomarie
            </div>
            <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
              Full-Stack Developer crafting digital experiences with modern
              technologies and creative problem-solving.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="terminal-text font-bold text-[var(--accent)] mb-3">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
              >
                Home
              </a>
              <a
                href="/#projects"
                className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
              >
                Projects
              </a>
              <a
                href="/contact"
                className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="terminal-text font-bold text-[var(--accent)] mb-3">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded border border-[var(--border)] text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all"
                aria-label="GitHub"
              >
                <span className="text-xs font-bold">GH</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded border border-[var(--border)] text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all"
                aria-label="LinkedIn"
              >
                <span className="text-xs font-bold">LI</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded border border-[var(--border)] text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all"
                aria-label="Twitter"
              >
                <span className="text-xs font-bold">TW</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 pt-8 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="terminal-text text-xs text-[var(--fg-muted)]">
            © {currentYear} Jomarie Esguerra. Built with Next.js & TypeScript.
          </div>
          <div className="terminal-text text-xs text-[var(--accent)] flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
            <span>Always building</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
