"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Core Credits */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-2 md:gap-4"
          >
            <span className="terminal-text text-sm font-bold text-[var(--fg)]">
              JOMARIE ESGUERRA
            </span>
            <span className="hidden md:block text-[var(--border)]">•</span>
            <span className="terminal-text text-[10px] text-[var(--fg-muted)] tracking-wider">
              © {currentYear}
            </span>
            <span className="hidden md:block text-[var(--border)]">•</span>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              <span className="terminal-text text-[10px] text-[var(--fg-muted)] uppercase tracking-tighter">
                Built with passion
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
