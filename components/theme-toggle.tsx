"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDark(stored ? stored === "dark" : prefersDark);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark, mounted]);

  if (!mounted) return null;

  return (
    <div className="theme-section">
      <i className="bi bi-brightness-high-fill" aria-hidden="true"></i>
      <div className="theme-switch" data-on={dark}>
        <label htmlFor="toggleThemeBtn" aria-label="Toggle theme" />
        <input
          type="checkbox"
          id="toggleThemeBtn"
          checked={dark}
          onChange={() => setDark((d) => !d)}
        />
      </div>
      <i className="bi bi-moon-stars-fill" aria-hidden="true"></i>
    </div>
  );
}