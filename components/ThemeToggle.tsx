"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "green" | "amber" | "cyan";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("green");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("crt-theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === "green") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", newTheme);
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("crt-theme", newTheme);
    setIsOpen(false);
  };

  const themes = [
    { id: "green" as Theme, label: "Phosphor", color: "#4ade80" },
    { id: "cyan" as Theme, label: "Cyan", color: "#22d3ee" },
  ];

  const activeColor = themes.find((t) => t.id === theme)?.color;

  return (
    <div className="relative">
      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-3
          px-3! py-1!
          rounded-lg
          border border-[var(--border)]
          bg-[var(--bg-elevated)]/90
          backdrop-blur
          text-[var(--accent)]
          hover:border-[var(--accent)]
          transition-colors
          terminal-text
          text-base
          shadow-[0_0_20px_rgba(0,0,0,0.6)]
        "
        aria-label="Toggle theme"
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{
            backgroundColor: activeColor,
            boxShadow: `0 0 14px ${activeColor}`,
          }}
        />
        <span className="hidden sm:inline">Theme</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Click-away backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="
                absolute right-0 mt-3 w-48
                rounded-lg
                border border-[var(--border)]
                bg-[var(--bg-elevated)]/95
                backdrop-blur
                shadow-[0_0_30px_var(--glow)]
                z-50
                overflow-hidden
              "
            >
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => handleThemeChange(t.id)}
                  className={`
                    w-full flex items-center gap-4
                    px-5 py-3
                    terminal-text
                    text-base
                    transition-colors
                    ${
                      theme === t.id
                        ? "bg-[var(--accent)] text-[var(--bg)]"
                        : "text-[var(--fg-muted)] hover:bg-[var(--bg)]"
                    }
                  `}
                >
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{
                      backgroundColor: t.color,
                      boxShadow: `0 0 12px ${t.color}`,
                    }}
                  />
                  <span>{t.label}</span>

                  {theme === t.id && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="ml-auto text-lg"
                    >
                      ✓
                    </motion.span>
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
