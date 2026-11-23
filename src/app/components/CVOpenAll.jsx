"use client";

import { useEffect, useState } from "react";

// opens or folds every "more" on the cv. printing always opens them all.
export default function CVOpenAll() {
  const [open, setOpen] = useState(false);

  const setAll = (value) => {
    document.querySelectorAll(".cv-more").forEach((d) => {
      d.open = value;
    });
  };

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
