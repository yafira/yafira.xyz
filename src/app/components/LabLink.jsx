"use client";

import { useState, useRef } from "react";

export default function LabLink() {
  const [show, setShow] = useState(false);
  const timeoutRef = useRef(null);

  const handleClick = () => {
    // open synchronously, in the same click handler, so browsers
    // don't flag it as a blocked popup
    window.open("https://electrocute.io", "_blank", "noopener,noreferrer");

    setShow(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShow(false), 1600);
  };

  return (
    <>
      <button type="button" className="nav-lab-link" onClick={handleClick}>
        lab
      </button>
      {show && (
        <div className="lab-toast" role="status" aria-live="polite">
          <span className="lab-toast-flower">✿</span>
          <span>entering the lab of experiments…</span>
        </div>
      )}
    </>
  );
}
