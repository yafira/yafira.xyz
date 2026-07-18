"use client";

import { useState, useEffect, useRef } from "react";

// the cycling word — shared between the work page hero and the
// homepage claim so both tell the same story. alternates craft
// word / engineering word.

const DEFAULT_WORDS = [
  "soft",
  "functional",
  "cute",
  "tactile",
  "playful",
  "useful",
  "gentle",
  "interactive",
];

export default function CycleWord({ words = DEFAULT_WORDS }) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const timersRef = useRef([]);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) return;

    const cycle = setInterval(() => {
      setFading(true);
      const swap = setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setFading(false);
      }, 250);
      timersRef.current.push(swap);
    }, 2600);

    return () => {
      clearInterval(cycle);
      timersRef.current.forEach(clearTimeout);
    };
  }, [words]);

  return (
    <>
      <span
        className={`work-headline-cycle ${fading ? "is-fading" : ""}`}
        aria-hidden="true"
      >
        {words[index]}
      </span>
      <span className="sr-only">{words[0]}</span>
    </>
  );
}
