'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import MotionCard from './MotionCard';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16">
      
      {/* subtle background accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-black/5 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          {/* LEFT — Text */}
          <MotionCard
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="p-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Jomarie
              <span className="block text-[var(--color-primary)]">Esguerra</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-[var(--color-dark)/85]">
              Full-Stack Developer crafting fast, scalable, and
              user-focused web applications using
              <span className="font-medium text-[var(--color-accent)]">{' '}Next.js, React, and TypeScript</span>.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-md bg-[var(--color-primary)] text-white font-medium hover:opacity-90 transition"
              >
                View Projects
              </a>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-md border border-black/20 hover:border-black transition"
              >
                Contact
              </Link>
            </div>
          </MotionCard>

          {/* RIGHT — Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-56 h-56 md:w-72 md:h-72">
              
              {/* gradient ring */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)] p-[3px]"
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-full h-full rounded-full bg-white" />
              </motion.div>

              {/* image placeholder */}
              <div className="absolute inset-3 rounded-full bg-black/5 flex items-center justify-center text-sm text-black/60">
                Profile Image
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
