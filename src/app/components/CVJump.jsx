"use client";

import { useState } from "react";

// the three main sections show first; the rest tuck behind one tap
export default function CVJump() {
  const [more, setMore] = useState(false);

  return (
    <>
      <a href="#experience">experience</a>
      <a href="#education">education</a>
      <a href="#skills">skills</a>
      {more ? (
        <>
          <a href="#selected-work">selected work</a>
          <a href="#honors">honors</a>
          <a href="#press">press</a>
        </>
      ) : null}
      <button
        type="button"
        className="cv-jump-more"
        aria-expanded={more}
        onClick={() => setMore(!more)}
      >
        {more ? "less" : "+ 3 more"}
      </button>
    </>
  );
}
