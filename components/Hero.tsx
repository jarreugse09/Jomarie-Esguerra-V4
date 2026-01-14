"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import Shuffle from "./online-comp/Shuffle";

const FaultyTerminal = dynamic(() => import("./online-comp/FaultyTerminal"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />,
});
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20 overflow-hidden bg-black">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0">
        <FaultyTerminal
          scale={3}
          digitSize={0.6}
          noiseAmp={0.6}
          timeScale={0.6}
          mouseStrength={0.3}
          tint="#121612"
          brightness={2} /* Dimmed so text pops */
          flickerAmount={0.4}
        />
        {/* Vignette overlay: darkens edges to focus on center content */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      <div className="container max-w-6xl relative z-10">
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
            ></motion.div>
            {/* Main Name */}
            <div>
              <motion.h1 className="text-5xl md:text-6xl lg:text-9xl font-bold leading-[0.65] tracking-tighter mb-4">
                <Shuffle
                  text="Jomarie"
                  shuffleTimes={3}
                  shuffleDirection="down"
                  ease="back.out(1.1)"
                  loopDelay={2}
                  // Pass the sizing classes here
                  className="text-5xl md:text-6xl lg:text-9xl text-[var(--fg)]"
                />
                <br />
                <Shuffle
                  text="Esguerra"
                  shuffleTimes={3}
                  shuffleDirection="down"
                  ease="back.out(1.1)"
                  loopDelay={2}
                  // Pass the sizing classes and glow here
                  className=" text-5xl md:text-6xl lg:text-9xl text-[var(--accent)] glow-text"
                />
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="terminal-text text-lg md:text-xl text-[var(--accent)] mb-2"
              >
                {" "}
                <div className="h-4" /> &gt; Software Engineer
              </motion.div>
            </div>
            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg text-[var(--fg-muted)] max-w-xl leading-relaxed"
            >
              Transforming brilliant ideas into tangible necessity.
            </motion.p>{" "}
            <div className="h-6" /> {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-6 pt-6"
            >
              <span className="terminal-text text-[20px] text-[var(--fg-muted)] uppercase tracking-[0.3em]">
                Connect_
              </span>

              <div className="flex gap-6">
                {[
                  {
                    name: "github",
                    url: "https://github.com/jarreugse09",
                    path: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                  },
                  {
                    name: "linkedin",
                    url: "https://www.linkedin.com/in/jomarie-esguerra-844b893a3/",
                    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                  },
                  {
                    name: "facebook",
                    url: "https://www.facebook.com/jarreugse/",
                    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                  },
                  {
                    name: "instagram",
                    url: "https://www.instagram.com/mojojomss/",
                    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{
                      scale: 1.15,
                      color: "#ef4444",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-[var(--fg-muted)] transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]"
                    aria-label={social.name}
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={social.path} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE – CRT TV Profile */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* CRT Bezel */}
              <div className="crt-bezel w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 p-4">
                {/* CRT Screen */}
                <div className="relative crt-screen overflow-hidden rounded-lg">
                  {/* Image */}
                  <Image
                    src="/joms.jpg"
                    alt="Jomarie Esguerra"
                    fill
                    priority
                    className="object-cover crt-image"
                  />

                  {/* Scanlines */}
                  <div className="absolute inset-0 crt-scanlines pointer-events-none" />

                  {/* Moving scan glow */}
                  <motion.div
                    animate={{ y: ["-20%", "120%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-10 blur-md"
                  />

                  {/* CRT vignette */}
                  <div className="absolute inset-0 crt-vignette pointer-events-none" />
                </div>

                {/* Status */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-3 left-1/9 -translate-x-1/2 bg-black/80 px-4 py-1 rounded-full border border-[var(--accent)] flex items-center gap-2"
                >
                  <span className="ml-2! w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse" />
                  <span className="mx-2! my-2! terminal-text text-xs text-[var(--accent)]">
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
