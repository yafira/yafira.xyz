"use client";

import { useState, useEffect, useRef } from "react";

// the cycling phrase in the homepage headline. cycles adjective +
// noun together as a pair, rather than a fixed noun with a rotating
// adjective — guarantees every combination reads naturally instead
// of hoping any adjective works against one fixed word. rotates
// across interfaces / tools / systems, so the phrase itself covers
// software, utility, and hardware-architecture framing in turn.

const DEFAULT_PAIRS = [
  ["soft", "interfaces"],
  ["systematic", "tools"],
  ["tactile", "systems"],
  ["scalable", "tools"],
  ["playful", "interfaces"],
  ["resilient", "systems"],
  ["gentle", "interfaces"],
  ["intentional", "tools"],
];

export default function CycleWord({ pairs = DEFAULT_PAIRS }) {
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
        setIndex((i) => (i + 1) % pairs.length);
        setFading(false);
      }, 250);
      timersRef.current.push(swap);
    }, 2600);

    return () => {
      clearInterval(cycle);
      timersRef.current.forEach(clearTimeout);
    };
  }, [pairs]);

  const [adjective, noun] = pairs[index];

  return (
    <>
      <span
        className={`work-headline-cycle ${fading ? "is-fading" : ""}`}
        aria-hidden="true"
      >
        {adjective} {noun}
      </span>
      <span className="sr-only">
        {pairs[0][0]} {pairs[0][1]}
      </span>
    </>
  );
}
