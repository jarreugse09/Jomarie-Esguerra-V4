"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden">
      {/* Grid Background */}
      <div className="grid-bg" />

      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE - Name + Title + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="terminal-text text-sm text-[var(--accent)] flex items-center gap-2"
            >
              <span className="inline-block w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
              <span className="uppercase tracking-wider">
                Available for hire
              </span>
            </motion.div>

            {/* Main Name */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              >
                <span className="text-[var(--fg)]">Jomarie</span>
                <br />
                <span className="text-[var(--accent)] glow-text">Esguerra</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="terminal-text text-lg md:text-xl text-[var(--accent)] mb-2"
              >
                &gt; Software Engineer
              </motion.div>
            </div>

            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg text-[var(--fg-muted)] max-w-xl leading-relaxed"
            >
              I build fast, scalable, and elegant web applications with modern
              technologies. Specialized in React, Next.js, and TypeScript.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#projects" className="crt-button inline-block">
                View Projects
              </a>
              <a
                href="/contact"
                className="inline-block px-6 py-3 rounded-md border border-[var(--border)] text-[var(--fg)] hover:border-[var(--border-strong)] hover:text-[var(--accent)] transition-all terminal-text text-sm font-semibold uppercase tracking-wider"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 pt-4"
            >
              <span className="terminal-text text-xs text-[var(--fg-muted)] uppercase tracking-wider">
                Connect
              </span>
              <div className="flex gap-3">
                {[
                  { icon: "github", url: "#" },
                  { icon: "linkedin", url: "#" },
                  { icon: "twitter", url: "#" },
                ].map((social, index) => (
                  <motion.a
                    key={social.icon}
                    href={social.url}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 flex items-center justify-center rounded-md border border-[var(--border)] text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--bg)] transition-all"
                    aria-label={social.icon}
                  >
                    <span className="text-sm font-bold uppercase">
                      {social.icon[0]}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - CRT Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Rotating border effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-2xl opacity-50"
                style={{
                  background: `conic-gradient(from 0deg, transparent, var(--accent), transparent)`,
                  filter: "blur(20px)",
                }}
              />

              {/* Main CRT Screen Container */}
              <div className="relative crt-screen p-4 w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Image Container */}
                <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-[var(--border-strong)]">
                  <Image
                    src="/joms.jpg"
                    alt="Jomarie Esguerra"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Subtle scan effect overlay */}
                  <motion.div
                    animate={{ y: ["0%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 w-full h-1/3 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-10"
                    style={{ filter: "blur(10px)" }}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[var(--accent)]" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--accent)]" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--accent)]" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[var(--accent)]" />
                </div>

                {/* Status indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[var(--bg-elevated)] px-4 py-2 rounded-full border border-[var(--border)] flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
                  <span className="terminal-text text-xs text-[var(--accent)]">
                    ONLINE
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[var(--accent)]"
        >
          <span className="terminal-text text-xs uppercase tracking-wider">
            Scroll
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-[var(--accent)]"
          >
            <path
              d="M10 4v12m0 0l4-4m-4 4L6 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
