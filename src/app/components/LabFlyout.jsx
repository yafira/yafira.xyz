"use client";

import { useState, useEffect, useRef } from "react";
import { Inkbloom } from "electrocute-ui";

// the lab nav item — opens a small in-place menu of the lab's live
// properties instead of navigating anywhere. every link opens in a
// new tab; the flyout closes on selection, Escape, or click-outside.
//
// each property has its own tint + stitch color from the patchwork
// palette; on hover the row's running stitch actually runs. icons
// are inline SVGs drawn in the stitch style (stroke, rounded caps)
// and inherit each row's stitch color via currentColor.

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

// a sewing button: circle with four thread holes — the felt-button
// icon for the soft electronics gallery
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

// a crescent moon — poetronics' night-sky motif
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

// a small filled lightning bolt — cute, quick, techy
const IconCraftTech = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M13 2 4 14h6l-1.5 8L20 10h-6.5L15 2z" />
  </svg>
);

const LAB_LINKS = [
  {
    label: "blog",
    href: "https://blog.electrocute.io",
    note: "writing + process",
    Icon: IconPen,
    tint: "var(--blush-powder)",
    stitch: "#c76a8f",
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
    note: "generative poetry, gentle machines",
    Icon: IconMoon,
    tint: "var(--wisteria-dust)",
    stitch: "#8f7fc9",
  },
];

export default function LabFlyout() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
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
        type="button"
        className="nav-lab-link"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        lab
        <span className="nav-lab-tooltip" role="tooltip">
          <IconCraftTech />
          <span className="sr-only">creative tech</span>
        </span>
      </button>

      {open && (
        <div className="lab-flyout" role="menu" aria-label="electrocute lab">
          <a
            href="https://electrocute.io"
            target="_blank"
            rel="noopener noreferrer"
            className="lab-flyout-header"
            role="menuitem"
            onClick={() => setOpen(false)}
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
                  role="menuitem"
                  className="lab-flyout-item"
                  style={{
                    "--item-tint": tint,
                    "--item-stitch": stitch,
                  }}
                  onClick={() => setOpen(false)}
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
