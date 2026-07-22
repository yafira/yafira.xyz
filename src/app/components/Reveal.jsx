"use client";
// wrap anything: <Reveal>...</Reveal>
// stagger siblings: <Reveal delay={i * 80}>...</Reveal>
//
// v2: also toggles a "revealed" class on the wrapper, so plain CSS
// can animate descendants when the block enters view — that's how
// the project-image wipe works (see globals.css additions).

import { useEffect, useRef, useState } from "react";

export default function Reveal({
  children,
  delay = 0, // ms
  as: Tag = "div",
  y = 14, // px it travels
  className = "",
}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // respect reduced motion — show immediately, no animation
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect(); // reveal once, don't re-hide on scroll up
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal-item ${shown ? "revealed" : ""} ${className}`.trim()}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translateY(${y}px)`,
        filter: shown ? "none" : "blur(4px)",
        transition: `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
          transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms,
          filter 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: shown ? "auto" : "opacity, transform, filter",
      }}
    >
      {children}
    </Tag>
  );
}
