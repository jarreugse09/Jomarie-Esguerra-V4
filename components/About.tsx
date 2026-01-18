"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-title">About Me</div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Left Column - Main About */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-8 crt-card space-y-4"
            >
              <div className="text-[var(--fg-muted)] leading-relaxed text-lg space-y-6">
                {/* First part */}
                <p className="text-[var(--fg)] font-semibold text-xl leading-snug mb-8">
                  In a world saturated with digital noise, I strive to build
                  necessities.
                </p>
                {/* This acts as a blank physical line */}
                {/* First Body Paragraph */}
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg mb-8">
                  I’m Jomarie D. Esguerra, an aspiring developer and analyst
                  focused on creating digital solutions that bridge the gap
                  between human need and machine intelligence.
                </p>

                {/* This acts as a blank physical line */}
                {/* Second Body Paragraph (The "One-Line" Gap is created by the mb-8 above) */}
                <p className="text-[var(--fg-muted)] leading-relaxed text-lg mb-10">
                  Currently a graduating 4th-year Computer Science student at
                  TUP Manila, with years of experience in web development and
                  data science. I specialize in building interactive web
                  experiences while heavily involving myself in the world of AI
                  and Machine Learning to drive smarter automation.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-2">
                {["Web Dev", "Data Analytics", "AI & Machine Learning"].map(
                  (trait, index) => (
                    <motion.span
                      key={trait}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="
    inline-flex items-center
    px-5! py-2!
    border border-[var(--border)]
    rounded
    text-xs
    terminal-text
    text-[var(--accent)]
    uppercase
    tracking-wider
    whitespace-nowrap
    bg-[var(--accent)]/5
  "
                    >
                      {trait}
                    </motion.span>
                  ),
                )}
              </div>
            </motion.div>

            {/* Right Column - Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 crt-card space-y-4"
            >
              <p className="text-[var(--fg)] font-semibold text-xl leading-snug">
                Learn more about me! (Personal Life)
              </p>

              <p className="text-[var(--fg-muted)] leading-relaxed"></p>
              <div className="pt-4 flex flex-wrap gap-2">
                {["UNDER DEVELOPMENT"].map((trait, index) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="inline-flex items-center
                        px-5! py-2!
                        border border-[var(--border)]
                        rounded
                        text-xs
                        terminal-text
                        text-[var(--accent)]
                        uppercase
                        tracking-wider
                        whitespace-nowrap
                        bg-[var(--accent)]/5"
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
