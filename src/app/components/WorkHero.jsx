"use client";

import { useState, useEffect, useRef } from "react";

// alternating rhythm: engineering word, craft word, engineering word…
// so the cycle itself performs the design-engineer duality
const WORDS = [
  "soft",
  "functional",
  "cute",
  "tactile",
  "playful",
  "useful",
  "gentle",
  "interactive",
];

export default function WorkHero() {
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
        setIndex((i) => (i + 1) % WORDS.length);
        setFading(false);
      }, 250);
      timersRef.current.push(swap);
    }, 2600);

    return () => {
      clearInterval(cycle);
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  return (
    <header className="work-intro">
      <h1 className="work-headline">
        design engineer making{" "}
        <span
          className={`work-headline-cycle ${fading ? "is-fading" : ""}`}
          aria-hidden="true"
        >
          {WORDS[index]}
        </span>
        <span className="sr-only">soft</span> things that compute
      </h1>
      <p className="work-cred">
        nyu itp · itp camp · ml5.js · open hardware summit berlin · npm · nyc
        resistor
      </p>
    </header>
  );
}
