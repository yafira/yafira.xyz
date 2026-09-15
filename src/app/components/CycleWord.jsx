"use client";

import { useState, useEffect, useRef } from "react";

// the cycling phrase in the homepage headline. cycles adjective +
// noun together as a pair, rather than a fixed noun with a rotating
// adjective — guarantees every combination reads naturally instead
// of hoping any adjective works against one fixed word. covers
// software, hardware-architecture, craft, and product framing in
// turn, so the phrase itself signals the breadth of the practice.
//
// first pair is fixed (index 0) so the pre-hydration / first-paint
// text is deterministic and leads with the software-forward framing.
// every swap after that picks a random next pair (never repeating
// the one just shown) instead of cycling in a fixed order, so the
// phrase feels different on every visit/reload rather than always
// running the same sequence.

const DEFAULT_PAIRS = [
  ["scalable", "tools"],
  ["systematic", "tools"],
  ["resilient", "systems"],
  ["soft", "interfaces"],
  ["tactile", "systems"],
  ["playful", "interfaces"],
  ["gentle", "interfaces"],
  ["intentional", "tools"],
  ["modular", "systems"],
  ["accessible", "interfaces"],
  ["expressive", "tools"],
  ["reliable", "products"],
  ["textured", "interfaces"],
  ["adaptive", "systems"],
  ["thoughtful", "products"],
  ["hand-built", "tools"],
  ["responsive", "interfaces"],
  ["poetic", "systems"],
];

// random index that's never the same as the one just shown, so
// consecutive swaps always visibly change.
function pickNext(current, length) {
  if (length <= 1) return 0;
  let next = Math.floor(Math.random() * length);
  while (next === current) {
    next = Math.floor(Math.random() * length);
  }
  return next;
}

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
        setIndex((i) => pickNext(i, pairs.length));
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
