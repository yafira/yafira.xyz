export default function BackgroundPattern() {
  return (
    <svg
      className="bg-pattern"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1600 1200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
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
    </svg>
  );
}
