"use client";

import { useEffect, useState } from "react";

// the cv starts short; this opens every description at once.
// printing always shows the full version.
export default function CVFullToggle() {
  const [full, setFull] = useState(false);

  const show = (value) => {
    document.querySelector(".cv-page")?.setAttribute("data-full", String(value));
  };

  useEffect(() => {
    const before = () => show(true);
    const after = () => show(full);
    window.addEventListener("beforeprint", before);
    window.addEventListener("afterprint", after);
    return () => {
      window.removeEventListener("beforeprint", before);
      window.removeEventListener("afterprint", after);
    };
  }, [full]);

  return (
    <button
      type="button"
      className="cv-full-toggle"
      aria-expanded={full}
      onClick={() => {
        show(!full);
        setFull(!full);
      }}
    >
      {full ? "fold the cv \u2191" : "read the full cv \u2193"}
    </button>
  );
}
