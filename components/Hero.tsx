"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-20 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white overflow-hidden">
      {/* subtle grid background */}
      <div className="absolute inset-0 -z-10 grid grid-cols-12 grid-rows-12 gap-4 opacity-5 dark:opacity-10">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="border border-neutral-900/5 dark:border-white/5"
          ></div>
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT — Name + Role */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-mono text-green-400 mb-2">
            Software Engineer
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hello, I&apos;m <br />
            <span className="text-green-400">Jomarie Esguerra</span>
          </h1>

          <p className="mt-6 max-w-lg text-neutral-600 dark:text-neutral-300 text-sm md:text-base">
            Full-Stack Developer | Crafting fast, scalable web apps with
            Next.js, React, and TypeScript
          </p>

          {/* CTA + Social */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-md border border-green-400 text-green-400 font-medium hover:bg-green-500 hover:text-white transition"
            >
              View CV
            </a>

            <div className="flex gap-3 text-green-400">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — Circular Profile */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            {/* animated outline */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-green-400 p-0.5"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
                <img
                  src="/joms.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
