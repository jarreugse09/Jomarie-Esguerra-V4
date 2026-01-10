"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // initialize from localStorage or default to light mode
    const stored = localStorage.getItem("theme");
    if (stored) {
      const darkMode = stored === "dark";
      setIsDark(darkMode);
      document.documentElement.classList.toggle("dark", darkMode);
    } else {
      // Default to light mode if no preference stored
      setIsDark(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button className="p-2 rounded-md transition-colors bg-neutral-200 text-neutral-900">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className={clsx("p-2 rounded-md transition-colors", {
        "bg-primary-500 text-white": isDark,
        "bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100":
          !isDark,
      })}
    >
      {isDark ? (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36-1.42-1.42M7.05 6.05 5.64 4.64M18.36 5.64 16.95 7.05M6.34 17.66l-1.41 1.41M12 7a5 5 0 100 10 5 5 0 000-10z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
          />
        </svg>
      )}
    </button>
  );
}
