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
    { id: "amber" as Theme, label: "Amber", color: "#fbbf24" },
    { id: "cyan" as Theme, label: "Cyan", color: "#22d3ee" },
  ];

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--accent)] hover:border-[var(--border-strong)] transition-colors terminal-text text-sm"
        aria-label="Toggle theme"
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{
            backgroundColor: themes.find((t) => t.id === theme)?.color,
            boxShadow: `0 0 10px ${themes.find((t) => t.id === theme)?.color}`,
          }}
        />
        <span className="hidden sm:inline">Theme</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-40 rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] shadow-lg z-50 overflow-hidden"
              style={{ boxShadow: "0 0 20px var(--glow)" }}
            >
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => handleThemeChange(t.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors terminal-text text-sm ${
                    theme === t.id
                      ? "bg-[var(--accent)] text-[var(--bg)]"
                      : "text-[var(--fg-muted)] hover:bg-[var(--bg)]"
                  }`}
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: t.color,
                      boxShadow: `0 0 8px ${t.color}`,
                    }}
                  />
                  <span>{t.label}</span>
                  {theme === t.id && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="ml-auto"
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
