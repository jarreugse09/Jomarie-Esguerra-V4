"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center crt-card p-8 md:p-12"
        >
          <div className="section-title mb-4">Ready to Work Together?</div>
          <h2 className="section-heading mb-6">
            Let's Build Something Amazing
          </h2>

          <p className="text-[var(--fg-muted)] mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm always excited to take on new challenges and collaborate on
            innovative projects. Whether you need a full-stack application, a
            beautiful website, or just want to chat about technology, I'd love
            to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="crt-button">
              Get In Touch
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-block px-6 py-3 rounded-md border border-[var(--border)] text-[var(--fg)] hover:border-[var(--border-strong)] hover:text-[var(--accent)] transition-all terminal-text text-sm font-semibold uppercase tracking-wider"
            >
              Download Resume
            </a>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 pt-8 border-t border-[var(--border)]"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="terminal-text text-xs text-[var(--accent)] uppercase tracking-wider mb-2">
                  Email
                </div>
                <a
                  href="mailto:hello@jomarie.dev"
                  className="text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
                >
                  hello@jomarie.dev
                </a>
              </div>
              <div className="text-center">
                <div className="terminal-text text-xs text-[var(--accent)] uppercase tracking-wider mb-2">
                  Location
                </div>
                <div className="text-[var(--fg-muted)]">
                  Manila, Philippines
                </div>
              </div>
              <div className="text-center">
                <div className="terminal-text text-xs text-[var(--accent)] uppercase tracking-wider mb-2">
                  Status
                </div>
                <div className="text-[var(--accent)] flex items-center justify-center gap-2">
                  <span className="inline-block w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
                  Available
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
