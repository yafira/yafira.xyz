"use client";

import { useState, useRef, useEffect } from "react";

export default function BackgroundPattern() {
  return (
    <>
      <svg
        className="bg-pattern"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 1200"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* everything in here is purely decorative and non-interactive —
          aria-hidden + pointer-events:none live on this wrapper instead
          of the root svg element now, since the five doodles below are
          real focusable buttons and can't sit inside an aria-hidden
          ancestor (that would hide them from screen readers and create
          a focusable-but-unannounced trap for keyboard users). */}
        <g aria-hidden="true" style={{ pointerEvents: "none" }}>
          {/* circuit trace, top-left — the engineering thread */}
          <g
            style={{ stroke: "var(--electronics-color)", opacity: 0.2 }}
            fill="none"
            strokeWidth="2"
          >
            <path d="M -20 120 H 140 V 220 H 260 V 160 H 380" />
            <circle
              cx="140"
              cy="120"
              r="5"
              fill="var(--electronics-color)"
              stroke="none"
            />
            <circle
              cx="260"
              cy="220"
              r="5"
              fill="var(--electronics-color)"
              stroke="none"
            />
            <circle
              cx="380"
              cy="160"
              r="5"
              fill="var(--electronics-color)"
              stroke="none"
            />
          </g>

          {/* circuit trace, bottom-right — mirrored */}
          <g
            style={{ stroke: "var(--code-color)", opacity: 0.2 }}
            fill="none"
            strokeWidth="2"
          >
            <path d="M 1620 1080 H 1460 V 980 H 1340 V 1040 H 1220" />
            <circle
              cx="1460"
              cy="1080"
              r="5"
              fill="var(--code-color)"
              stroke="none"
            />
            <circle
              cx="1340"
              cy="980"
              r="5"
              fill="var(--code-color)"
              stroke="none"
            />
            <circle
              cx="1220"
              cy="1040"
              r="5"
              fill="var(--code-color)"
              stroke="none"
            />
          </g>

          {/* small circuit trace, mid-right */}
          <g
            style={{ stroke: "var(--design-color)", opacity: 0.18 }}
            fill="none"
            strokeWidth="2"
          >
            <path d="M 1620 560 H 1500 V 640 H 1420" />
            <circle
              cx="1500"
              cy="560"
              r="4"
              fill="var(--design-color)"
              stroke="none"
            />
            <circle
              cx="1420"
              cy="640"
              r="4"
              fill="var(--design-color)"
              stroke="none"
            />
          </g>

          {/* circuit trace, upper-mid-left */}
          <g
            style={{ stroke: "var(--craft-color)", opacity: 0.18 }}
            fill="none"
            strokeWidth="2"
          >
            <path d="M -20 460 H 90 V 380 H 200" />
            <circle
              cx="90"
              cy="460"
              r="4"
              fill="var(--craft-color)"
              stroke="none"
            />
            <circle
              cx="200"
              cy="380"
              r="4"
              fill="var(--craft-color)"
              stroke="none"
            />
          </g>

          {/* circuit trace, lower-mid-right */}
          <g
            style={{ stroke: "var(--text-color)", opacity: 0.18 }}
            fill="none"
            strokeWidth="2"
          >
            <path d="M 1620 900 H 1540 V 960 H 1450" />
            <circle
              cx="1540"
              cy="900"
              r="4"
              fill="var(--text-color)"
              stroke="none"
            />
            <circle
              cx="1450"
              cy="960"
              r="4"
              fill="var(--text-color)"
              stroke="none"
            />
          </g>

          {/* flower silhouette, top-right corner — the craft thread */}
          <g
            style={{ fill: "#1a1a1a", opacity: 0.05 }}
            transform="translate(1480, -40)"
          >
            <circle cx="0" cy="-38" r="38" />
            <circle cx="36" cy="-12" r="38" />
            <circle cx="22" cy="32" r="38" />
            <circle cx="-22" cy="32" r="38" />
            <circle cx="-36" cy="-12" r="38" />
          </g>

          {/* flower silhouette, bottom-left corner, smaller */}
          <g
            style={{ fill: "#1a1a1a", opacity: 0.045 }}
            transform="translate(40, 1240) scale(0.7)"
          >
            <circle cx="0" cy="-38" r="38" />
            <circle cx="36" cy="-12" r="38" />
            <circle cx="22" cy="32" r="38" />
            <circle cx="-22" cy="32" r="38" />
            <circle cx="-36" cy="-12" r="38" />
          </g>

          {/* flower silhouette, mid-right edge, small */}
          <g
            style={{ fill: "#1a1a1a", opacity: 0.04 }}
            transform="translate(1590, 500) scale(0.5)"
          >
            <circle cx="0" cy="-38" r="38" />
            <circle cx="36" cy="-12" r="38" />
            <circle cx="22" cy="32" r="38" />
            <circle cx="-22" cy="32" r="38" />
            <circle cx="-36" cy="-12" r="38" />
          </g>

          {/* running-stitch thread, drifting across the middle background */}
          <path
            d="M -20 700 Q 200 630, 420 700 T 860 700 T 1300 660 T 1620 720"
            fill="none"
            style={{ stroke: "#8b7ab8", opacity: 0.16 }}
            strokeWidth="2"
            strokeDasharray="7 6"
            strokeLinecap="round"
          />

          {/* second running-stitch thread, lower in the background */}
          <path
            d="M -20 980 Q 240 1040, 480 980 T 940 1000 T 1400 950 T 1620 1000"
            fill="none"
            style={{ stroke: "#c76a8f", opacity: 0.14 }}
            strokeWidth="2"
            strokeDasharray="6 5"
            strokeLinecap="round"
          />

          {/* sketched UI wireframe, top-right — as if roughed out on graph
          paper: a browser-ish box, a heading line, two body lines,
          and a small pill button */}
          <g
            style={{ stroke: "var(--design-color)", opacity: 0.16 }}
            fill="none"
            strokeWidth="2"
            transform="translate(1180, 60)"
          >
            <rect x="0" y="0" width="220" height="150" rx="6" />
            <line x1="0" y1="28" x2="220" y2="28" />
            <circle
              cx="16"
              cy="14"
              r="4"
              fill="var(--design-color)"
              stroke="none"
            />
            <circle
              cx="32"
              cy="14"
              r="4"
              fill="var(--design-color)"
              stroke="none"
            />
            <line x1="20" y1="50" x2="140" y2="50" strokeWidth="3" />
            <line x1="20" y1="70" x2="190" y2="70" />
            <line x1="20" y1="86" x2="160" y2="86" />
            <rect x="20" y="108" width="70" height="22" rx="11" />
          </g>

          {/* punch card, right margin — a Hollerith-style card: the
          classic clipped top-left corner real punch cards use for
          orientation, a dashed border reading as a perforated edge
          (matching the dashed-line language used elsewhere on the
          site), and a fixed, hand-picked hole pattern instead of the
          plain solid rounded rect it used to be. static/decorative —
          this group sits behind all page content (z-index:-1), rather
          than the small clickable doodles above, which sit in front. */}
          <g
            style={{ stroke: "var(--electronics-color)", opacity: 0.32 }}
            fill="none"
            strokeWidth="2.5"
            transform="translate(1420, 780) scale(1.5)"
          >
            <path
              d="M -26 -24 L 40 -24 L 40 24 L -40 24 L -40 -10 Z"
              strokeDasharray="5 4"
            />
            <circle
              cx="-24"
              cy="-8"
              r="3"
              fill="var(--electronics-color)"
              stroke="none"
            />
            <circle cx="0" cy="-8" r="3" />
            <circle
              cx="24"
              cy="-8"
              r="3"
              fill="var(--electronics-color)"
              stroke="none"
            />
            <circle
              cx="-24"
              cy="10"
              r="3"
              fill="var(--electronics-color)"
              stroke="none"
            />
            <circle cx="0" cy="10" r="3" />
            <circle
              cx="24"
              cy="10"
              r="3"
              fill="var(--electronics-color)"
              stroke="none"
            />
          </g>

          {/* code bracket glyph, bottom-mid-left — a simple </> sketch,
          like a doodle in the margin of a notebook */}
          <g
            style={{ stroke: "var(--code-color)", opacity: 0.18 }}
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(300, 1080)"
          >
            <path d="M 30 0 L 0 30 L 30 60" />
            <path d="M 80 0 L 110 30 L 80 60" />
            <line x1="60" y1="-6" x2="48" y2="66" />
          </g>

          {/* small dashed rule + dot, upper-mid — like a caption label
          jotted next to a sketch */}
          <g style={{ stroke: "#999", opacity: 0.14 }} strokeWidth="1.5">
            <line x1="700" y1="180" x2="820" y2="180" strokeDasharray="4 4" />
            <circle cx="826" cy="180" r="3" fill="#999" stroke="none" />
          </g>
        </g>
      </svg>

      {/* second, separate layer for the five interactive doodles. the
        decorative svg above sits at z-index:-1 (behind everything, as
        designed) — pointer-events hit-testing follows that same
        stacking order regardless of visual transparency, so normal
        page content (body/main) would intercept clicks meant for
        anything behind it, even in empty-looking margin space. this
        layer sits at a low *positive* z-index instead (above content,
        below real UI like nav), with pointer-events:none on the svg
        itself so it's invisible to clicks everywhere except the tiny
        doodle shapes, which opt back in via .doodle-interactive. */}
      <svg
        className="bg-pattern-interactive"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 1200"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* end of decorative wrapper — everything below is a real,
          focusable, clickable doodle. each is a tiny hidden toy: click
          or press Enter/Space to trigger its own small animation.
          pointer-events are re-enabled per-doodle via .doodle-interactive
          in globals.css, since the rest of .bg-pattern-interactive
          stays pointer-events:none so it never blocks clicks on real
          page content. */}

        {/* void spiral, left margin — an archimedean spiral instead of
          the resting dashed circle it used to be. click to set it
          spinning continuously (a little "infinite" void); click again
          to let it rest. */}
        <VoidSpiralDoodle />

        {/* e-ink pixel cluster, left margin — a scattered dither pattern,
          like the soft computer's e-ink display. click to reshuffle
          into a new random pattern, like the display refreshing. */}
        <EInkDoodle />

        {/* markov chain node graph, right margin — a tiny connected
          graph, like the generative text pieces (ribbon_logic, PetalByte,
          the soft computer's text engine). click to send a pulse down
          a random path through the graph. */}
        <MarkovGraphDoodle />

        {/* wavy stitch line, left margin — a smooth running-stitch curve,
          like the machine-knit panels from Punch Card Studio / the soft
          computer. click to send a ripple down the line. */}
        <WavyLineDoodle />
      </svg>
    </>
  );
}

// each doodle below is a real <g role="button"> — focusable, operable
// with click or Enter/Space, with its own aria-label. .doodle-interactive
// (globals.css) re-enables pointer-events for just these, since the
// parent .bg-pattern is pointer-events:none everywhere else so the
// background never blocks clicks on real page content.

// archimedean spiral (r = maxRadius * t, angle = turns * 2π * t) —
// winds outward from the center over `turns` full rotations.
function spiralPath(turns, maxRadius, steps = 90) {
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const angle = t * Math.PI * 2 * turns;
    const radius = t * maxRadius;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    d += `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}

const VOID_SPIRAL_PATH = spiralPath(3, 22);

function VoidSpiralDoodle() {
  const [falling, setFalling] = useState(false);

  const trigger = () => {
    if (falling) return; // already playing — let it finish
    setFalling(true);
    // fallback in case onAnimationEnd never fires (e.g.
    // prefers-reduced-motion disables the animation entirely) —
    // without this the doodle would get stuck unclickable after
    // the first press for those users.
    setTimeout(() => setFalling(false), 2700);
  };

  return (
    <g
      role="button"
      tabIndex={0}
      aria-label="send the void spiraling away"
      className="doodle-interactive"
      style={{ stroke: "var(--craft-color)", opacity: 0.32 }}
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      transform="translate(150, 780) scale(1.5)"
      onClick={trigger}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          trigger();
        }
      }}
    >
      <g
        className={falling ? "void-spiral-falling" : undefined}
        onAnimationEnd={() => setFalling(false)}
      >
        <path d={VOID_SPIRAL_PATH} />
        <circle cx="0" cy="0" r="2.5" fill="var(--craft-color)" stroke="none" />
      </g>
    </g>
  );
}

// candidate 4x3 grid of cell positions the e-ink doodle reshuffles
// across — a fixed pool it randomly picks 6-8 cells from each click.
const E_INK_GRID = Array.from({ length: 12 }, (_, i) => ({
  x: (i % 4) * 12,
  y: Math.floor(i / 4) * 12,
}));

function randomEInkPattern() {
  const count = 6 + Math.floor(Math.random() * 3);
  const indices = E_INK_GRID.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices.slice(0, count);
}

// same accent tokens the other doodles already use (craft/code/design/
// electronics/text) — picking from this shared set instead of new
// colors keeps the e-ink doodle's palette consistent with the rest of
// the background pattern.
const E_INK_PALETTE = [
  "var(--text-color)",
  "var(--craft-color)",
  "var(--code-color)",
  "var(--design-color)",
  "var(--electronics-color)",
];

function randomEInkColor(current) {
  const options = E_INK_PALETTE.filter((c) => c !== current);
  return options[Math.floor(Math.random() * options.length)];
}

function EInkDoodle() {
  const [active, setActive] = useState(() => [0, 1, 4, 6, 9, 3, 10]);
  const [color, setColor] = useState(E_INK_PALETTE[0]);

  const trigger = () => {
    setActive(randomEInkPattern());
    setColor((c) => randomEInkColor(c));
  };

  return (
    <g
      role="button"
      tabIndex={0}
      aria-label="reshuffle the pixel pattern"
      className="doodle-interactive"
      style={{ fill: color, opacity: 0.3, transition: "fill 0.25s ease" }}
      transform="translate(110, 480) scale(1.5)"
      onClick={trigger}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          trigger();
        }
      }}
    >
      {active.map((idx) => {
        const cell = E_INK_GRID[idx % E_INK_GRID.length];
        return <rect key={idx} x={cell.x} y={cell.y} width="8" height="8" />;
      })}
    </g>
  );
}

function MarkovGraphDoodle() {
  const [pulse, setPulse] = useState(null);

  const trigger = () => {
    setPulse(Math.random() < 0.5 ? "top" : "bottom");
    setTimeout(() => setPulse(null), 500);
  };

  const lit = (side) => (pulse === side ? 1 : 0.5);
  const litWidth = (side) => (pulse === side ? 3 : 2);

  return (
    <g
      role="button"
      tabIndex={0}
      aria-label="send a pulse through the graph"
      className="doodle-interactive"
      style={{ stroke: "var(--design-color)", opacity: 0.32 }}
      fill="none"
      transform="translate(1440, 340) scale(1.5)"
      onClick={trigger}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          trigger();
        }
      }}
    >
      <line
        x1="0"
        y1="0"
        x2="40"
        y2="-20"
        style={{ opacity: lit("top"), transition: "opacity 0.2s ease" }}
        strokeWidth={litWidth("top")}
      />
      <line
        x1="0"
        y1="0"
        x2="40"
        y2="20"
        style={{ opacity: lit("bottom"), transition: "opacity 0.2s ease" }}
        strokeWidth={litWidth("bottom")}
      />
      <line
        x1="40"
        y1="-20"
        x2="80"
        y2="0"
        style={{ opacity: lit("top"), transition: "opacity 0.2s ease" }}
        strokeWidth={litWidth("top")}
      />
      <line
        x1="40"
        y1="20"
        x2="80"
        y2="0"
        style={{ opacity: lit("bottom"), transition: "opacity 0.2s ease" }}
        strokeWidth={litWidth("bottom")}
      />
      <circle cx="0" cy="0" r="4" fill="var(--design-color)" stroke="none" />
      <circle
        cx="40"
        cy="-20"
        r="4"
        fill="var(--design-color)"
        stroke="none"
        style={{ opacity: lit("top"), transition: "opacity 0.2s ease" }}
      />
      <circle
        cx="40"
        cy="20"
        r="4"
        fill="var(--design-color)"
        stroke="none"
        style={{ opacity: lit("bottom"), transition: "opacity 0.2s ease" }}
      />
      <circle cx="80" cy="0" r="4" fill="var(--design-color)" stroke="none" />
    </g>
  );
}

// computes the wave's path at a given phase — a sine wave tapered to
// zero amplitude at both ends (via the second sin() factor) so the
// line's endpoints stay anchored while the middle undulates.
function wavePathAt(phase) {
  const width = 76;
  const amplitude = 6;
  const segments = 12;
  let d = "";
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const x = width * t;
    const y =
      10 +
      Math.sin(t * Math.PI * 2 + phase) * amplitude * Math.sin(t * Math.PI);
    d += `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return d;
}

function WavyLineDoodle() {
  const [phase, setPhase] = useState(0);
  const rafRef = useRef(null);

  const trigger = () => {
    if (rafRef.current) return; // already wiggling — let it finish
    const duration = 700;
    const start = performance.now();
    const step = (now) => {
      const elapsed = now - start;
      if (elapsed >= duration) {
        setPhase(0);
        rafRef.current = null;
        return;
      }
      // two full cycles over the duration, landing back at phase 0
      // (mod 2π) so it settles without a visible snap at the end.
      setPhase((elapsed / duration) * Math.PI * 4);
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <g
      role="button"
      tabIndex={0}
      aria-label="wiggle the stitch line"
      className="doodle-interactive"
      style={{ stroke: "#8b7ab8", opacity: 0.3 }}
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      transform="translate(140, 1100) scale(1.5)"
      onClick={trigger}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          trigger();
        }
      }}
    >
      <path d={wavePathAt(phase)} />
    </g>
  );
}
