"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-32 px-4 md:px-8 overflow-hidden">
      {/* Ambient Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {" "}
          <div className="h-6" /> {/* Eyebrow Text */}
          <span className="terminal-text text-[var(--accent)] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-6 opacity-80">
            &lt; What's Next? /&gt;
          </span>
          {/* Massive Headline */}
          <h2 className="text-5xl md:text-7xl lg:text-7xl font-black text-[var(--fg)] tracking-tighter mb-12 leading-[0.9]">
            Let's make the Web
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--fg)] via-[var(--accent)] to-[var(--fg)] bg-[length:200%_auto] animate-gradient">
              A much more interactive place.
            </span>
          </h2>
          <div className="h-6" />{" "}
          <span className="terminal-text text-[var(--accent)] text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 opacity-60">
            Click to reach out!
          </span>
          {/* THE HOOK: Cursive Email with Red "exe" */}
          <Link
            href="mailto:jomariexesguerra@gmail.com"
            className="group relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative py-2 px-4"
            >
              <span
                className="text-4xl md:text-6xl lg:text-3xl text-[var(--fg)] transition-colors duration-300 italic select-none"
                style={{
                  fontFamily: "'Playfair Display', sans-serif",
                  fontStyle: "italic",
                }}
              >
                jomari
                <span
                  className="text-red-600 group-hover:text-red-500 group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] transition-all duration-300 not-italic"
                  style={{
                    fontFamily: "'Playfair Display', sans-serif",
                  }}
                >
                  exe
                </span>
                sguerra@gmail.com
              </span>
              <div className="h-6" />{" "}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-red-600 transition-all duration-500 ease-out group-hover:w-[90%]" />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap");

        .animate-gradient {
          animation: shine 4s linear infinite;
        }
        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
}
