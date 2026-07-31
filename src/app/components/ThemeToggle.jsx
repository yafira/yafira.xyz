"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Glasses } from "lucide-react";

const THEMES = [
  { id: "light", label: "Light", Icon: Sun },
  { id: "dark", label: "Dark", Icon: Moon },
  { id: "accessible", label: "Reader", Icon: Glasses },
];

export default function ThemeToggle() {
  const [theme, setThemeState] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") || "light";
    setThemeState(saved);
  }, []);

  const setTheme = (id) => {
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem("portfolio-theme", id);
    setThemeState(id);
  };

  return (
    <div className="theme-toggle" role="group" aria-label="Color theme">
      {THEMES.map(({ id, label, Icon }) => (
        <button
          key={id}
          className={`theme-toggle-btn ${theme === id ? "active" : ""}`}
          onClick={() => setTheme(id)}
          aria-pressed={theme === id}
          aria-label={label}
          title={label}
        >
          <Icon size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
