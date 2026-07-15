"use client";

// components/StitchProgress.jsx
// a thin running stitch along the top of the page that "sews itself"
// as you scroll, with a little ✿ pulling the thread.
// drop <StitchProgress /> into app/layout.js, just inside <body>.

import { useEffect, useRef } from "react";

export default function StitchProgress({ color = "#8b7ab8" }) {
  const lineRef = useRef(null);
  const markRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (lineRef.current) {
        lineRef.current.style.width = `${progress * 100}%`;
      }
      if (markRef.current) {
        markRef.current.style.left = `${progress * 100}%`;
        markRef.current.style.opacity = progress > 0.005 ? 1 : 0;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "10px",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <div
        ref={lineRef}
        style={{
          position: "absolute",
          top: "4px",
          left: 0,
          width: "0%",
          height: "2px",
          backgroundImage: `repeating-linear-gradient(90deg, ${color} 0 7px, transparent 7px 13px)`,
        }}
      />
      <span
        ref={markRef}
        style={{
          position: "absolute",
          top: "-1px",
          left: "0%",
          transform: "translateX(-50%)",
          fontSize: "9px",
          lineHeight: 1,
          color: color,
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
      >
        ✿
      </span>
    </div>
  );
}
