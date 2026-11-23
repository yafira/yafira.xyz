"use client";

import { useEffect, useState } from "react";

// each folded cv entry shows one line; tapping it opens the rest.
// this button opens or folds them all, and printing opens everything.
export default function CVOpenAll() {
  const [open, setOpen] = useState(false);

  const entries = () => Array.from(document.querySelectorAll(".cv-more"));
  const setOne = (el, value) => {
    el.classList.toggle("open", value);
    el.setAttribute("aria-expanded", String(value));
  };
  const setAll = (value) => entries().forEach((el) => setOne(el, value));

  useEffect(() => {
    const list = entries();
    const cleanups = list.map((el) => {
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      el.setAttribute("aria-expanded", "false");
      // opens on tap, but leaves links inside clickable once it's open
      const toggle = (e) => {
        if (e.target.closest("a") && el.classList.contains("open")) return;
        if (!el.classList.contains("open")) {
          e.preventDefault();
          setOne(el, true);
        }
      };
      const key = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOne(el, !el.classList.contains("open"));
        }
      };
      el.addEventListener("click", toggle);
      el.addEventListener("keydown", key);
      return () => {
        el.removeEventListener("click", toggle);
        el.removeEventListener("keydown", key);
      };
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);

  useEffect(() => {
    const before = () => setAll(true);
    const after = () => setAll(open);
    window.addEventListener("beforeprint", before);
    window.addEventListener("afterprint", after);
    return () => {
      window.removeEventListener("beforeprint", before);
      window.removeEventListener("afterprint", after);
    };
  }, [open]);

  return (
    <button
      type="button"
      className="cv-open-all"
      onClick={() => {
        setAll(!open);
        setOpen(!open);
      }}
    >
      {open ? "fold all" : "open all"}
    </button>
  );
}
