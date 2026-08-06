"use client";

import { useState, useEffect, useRef } from "react";
import { Inkbloom } from "electrocute-ui";

const IconComputerArt = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="4.5" width="13" height="9.5" rx="1.3" />
    <path d="M7 17.5h5" />
    <path d="M9.5 14v3.5" />
    <circle cx="7.4" cy="8.2" r="0.65" fill="currentColor" stroke="none" />
    <circle cx="11.6" cy="8.2" r="0.65" fill="currentColor" stroke="none" />
    <path d="M6.8 10.3q2.7 2.6 5.4 0" />
  </svg>
);

const IconButton = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="9.5" cy="9.5" r="0.6" fill="currentColor" />
    <circle cx="14.5" cy="9.5" r="0.6" fill="currentColor" />
    <circle cx="9.5" cy="14.5" r="0.6" fill="currentColor" />
    <circle cx="14.5" cy="14.5" r="0.6" fill="currentColor" />
  </svg>
);

const IconMoon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 13.5A8.5 8.5 0 1 1 10.5 5a6.5 6.5 0 0 0 9.5 8.5z" />
  </svg>
);

const IconPen = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 20l1.2-4.2L16.4 4.6a2 2 0 0 1 2.8 0l.2.2a2 2 0 0 1 0 2.8L8.2 18.8 4 20z" />
    <path d="M13.5 7.5l3 3" />
  </svg>
);

const LAB_LINKS = [
  {
    label: "computer art",
    href: "https://electrocute.io/computer-art",
    note: "generative sketches",
    Icon: IconComputerArt,
    tint: "#ECF3FE",
    stitch: "#C0C1DE",
  },
  {
    label: "soft interfaces",
    href: "https://electrocute.io/soft-interfaces",
    note: "soft electronics gallery",
    Icon: IconButton,
    tint: "var(--matcha-foam)",
    stitch: "#5f9e74",
  },
  {
    label: "poetronics",
    href: "https://electrocute.io/poetronics",
    note: "electronic text, gentle machines",
    Icon: IconMoon,
    tint: "#E8E6FF",
    stitch: "#8f7fc9",
  },
  {
    label: "blog",
    href: "https://blog.electrocute.io",
    note: "writing + process",
    Icon: IconPen,
    tint: "var(--blush-powder)",
    stitch: "#F2B9E0",
  },
];

export default function LabFlyout() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  // move focus into the panel when it opens
  useEffect(() => {
    if (!open) return;
    const firstFocusable = panelRef.current?.querySelector("a");
    firstFocusable?.focus();
  }, [open]);

  const closeAndReturnFocus = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") closeAndReturnFocus();
    };
    const onPointerDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <span className="lab-flyout-wrap" ref={wrapRef}>
      <button
        ref={buttonRef}
        type="button"
        className="nav-lab-link"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="lab-flyout-panel"
        onClick={() => setOpen((v) => !v)}
      >
        lab
        <svg
          className="nav-lab-squiggle"
          viewBox="0 0 40 8"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M1 4 Q5 0.5 9 4 T17 4 T25 4 T33 4 T39 4" />
        </svg>
      </button>

      {open && (
        <div
          id="lab-flyout-panel"
          className="lab-flyout"
          ref={panelRef}
          aria-label="electrocute lab"
        >
          <a
            href="https://electrocute.io"
            target="_blank"
            rel="noopener noreferrer"
            className="lab-flyout-header"
            onClick={closeAndReturnFocus}
          >
            <span className="lab-flyout-title">
              electrocute lab{" "}
              <span className="lab-flyout-flower" aria-hidden="true">
                <Inkbloom />
              </span>
            </span>
            <span className="lab-flyout-sub">creative practice</span>
          </a>

          <ul className="lab-flyout-list">
            {LAB_LINKS.map(({ label, href, note, Icon, tint, stitch }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lab-flyout-item"
                  style={{ "--item-tint": tint, "--item-stitch": stitch }}
                  onClick={closeAndReturnFocus}
                >
                  <span className="lab-flyout-glyph" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="lab-flyout-text">
                    <span className="lab-flyout-label">{label}</span>
                    <span className="lab-flyout-note">{note}</span>
                  </span>
                  <span className="lab-flyout-go" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </span>
  );
}
