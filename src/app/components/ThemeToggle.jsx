"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, Glasses, Printer } from "lucide-react";

const THEMES = [
  { id: "light", label: "Light", Icon: Sun },
  { id: "dark", label: "Dark", Icon: Moon },
  { id: "accessible", label: "Reader", Icon: Glasses },
  { id: "riso", label: "Riso print", Icon: Printer },
];

export default function ThemeToggle() {
  const [theme, setThemeState] = useState("light");

  useEffect(() => {
    // the blocking script in layout.js has already applied the correct
    // theme (saved preference, or system preference as fallback) before
    // this component even mounts — just read it back so the toggle
    // buttons highlight correctly, don't re-derive or overwrite it.
    const applied =
      document.documentElement.getAttribute("data-theme") || "light";
    setThemeState(applied);
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
