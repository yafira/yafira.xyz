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

// three linked nodes — the electrodex's linked-list chain
const IconNodes = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="5" cy="18" r="2.4" />
    <circle cx="12" cy="7" r="2.4" />
    <circle cx="19" cy="18" r="2.4" />
    <path d="M6.3 16L10.7 9" />
    <path d="M13.3 9l4.4 7" />
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
    label: "electrodex",
    href: "https://electrocute.io/electrodex",
    note: "community directory",
    Icon: IconNodes,
    tint: "var(--sky-mist)",
    stitch: "#4a90b8",
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
