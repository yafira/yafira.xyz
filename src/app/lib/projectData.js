// selected work: the projects that carry the professional pitch,
// ordered by design-engineering focus.
// more projects: strong secondary work, with the electronics
// cluster grouped at the end.
// everything else lives at electrocute.io.
//
// `disciplines` (optional): which halves of "design engineer" a
// project touched — renders as small icon badges on the card.
// values: "design" | "code" | "hardware"
//
// `process` + `swatches` (optional, electrocute-ui only for now):
// powers the expandable "the process" reveal — a short problem /
// approach / result plus the actual design tokens rendered live.

export const selectedWork = [
  {
    title: "electrocute-ui",
    imageUrl: "/assets/ecuteui.gif",
    category: "code",
    description:
      "Design system and React component library published on npm: 18 design tokens, 8 components, and a live documentation site. Designed, built, documented, and shipped end to end.",
    stack: "React · npm · Storybook",
    tags: ["design systems", "design engineering", "frontend"],
    disciplines: ["design", "code"],
    links: {
      web: "https://ui.electrocute.io",
      npm: "https://www.npmjs.com/package/electrocute-ui",
      code: "https://github.com/yafira/electrocute-ui",
    },
  },
  {
    title: "Soft Components",
    imageUrl: "/assets/soft-components.gif",
    category: "code",
    description:
      "Interactive reference library for soft electronic components — felt buttons, fabric potentiometers, pressure sensors — each pairing a live physics-based demo with the material science underneath it.",
    stack: "Next.js · TypeScript · GSAP · Motion",
    tags: [
      "design engineering",
      "e-textiles",
      "physical computing",
      "creative coding",
    ],
    disciplines: ["design", "code"],
    links: {
      web: "https://soft-components.vercel.app/",
      code: "https://github.com/yafira/tinytinker-tools",
    },
  },

  {
    title: "tinytinker.tools",
    imageUrl: "/assets/tinytinker.png",
    category: "code",
    description:
      "A growing suite of free browser-based tools for makers, featuring utilities for electronics, programming, color, generative text, accessibility, print, and other creative workflows.",
    stack: "Next.js · TypeScript",
    tags: ["open source", "web tooling", "frontend"],
    disciplines: ["design", "code"],
    links: {
      web: "https://tinytinker.tools",
      code: "https://github.com/yafira/soft-components",
    },
  },
  {
    title: "Lumi",
    imageUrl: "/assets/lumi-preview.gif",
    category: "design",
    description:
      "Speculative migraine-detection wearable taken from research to a working prototype, spanning three hardware form factors and a companion app.",
    stack: "React · TypeScript · Vite",
    tags: [
      "speculative design",
      "product design",
      "case study",
      "mobile ux/ui",
      "hardware",
    ],
    disciplines: ["design", "hardware"],
    links: {
      prototype: "https://lumi-wearable.vercel.app",
      casestudy: "https://lumi-case-study.vercel.app",
    },
  },
  {
    title: "Spot Mapper",
    imageUrl: "/assets/spot-mapper.gif",
    category: "code",
    description:
      "Real-time collaborative floor plan tool used by 150+ participants to claim exhibition spots at ITP Camp's showcase. Admin and viewer modes, token-based access, live sync, and handoff docs.",
    stack: "Leaflet · SheetJS · Redis · Vercel",
    tags: ["full-stack", "web tooling"],
    disciplines: ["design", "code"],
    links: {
      demo: "https://spot-mapper.vercel.app",
      casestudy: "https://spot-mapper-case-study.vercel.app",
    },
  },
  {
    title: "TinkerThread",
    imageUrl: "/assets/tt.gif",
    category: "code",
    description:
      "A circuit simulator for e-textiles and soft electronics, so makers can test soft circuits before stitching them.",
    stack: "JavaScript · Canvas",
    tags: ["simulation", "circuits", "e-textiles", "web tooling", "frontend"],
    disciplines: ["code", "hardware"],
    links: {
      demo: "https://tinkerthread.netlify.app/",
    },
  },
  {
    title: "ml5.js contributions",
    imageUrl: "/assets/ml5.gif",
    category: "code",
    description:
      "Open source contributions to ml5.js: custom Docsify plugins for the documentation site, adding inline code explanations and copy-to-clipboard with a toast.",
    stack: "Docsify · JavaScript",
    tags: ["open source", "machine learning", "web tooling", "documentation"],
    disciplines: ["code"],
    links: {
      blog: "https://ml5js.org/blog/docsify-plugins-soft-ui/",
    },
  },
  {
    title: "Equitable Syllabus Project",
    imageUrl: "/assets/esp.gif",
    category: "code",
    description:
      "Redesigned and rebuilt the Equitable Syllabus Project's website for NYU ITP as lead developer, migrating to Next.js with a new information architecture.",
    stack: "Next.js",
    tags: ["client work", "ui design", "frontend", "digital accessibility"],
    disciplines: ["design", "code"],
    links: {
      web: "https://itp.nyu.edu/esp#/",
    },
  },
  {
    title: "the soft computer",
    imageUrl: "/assets/tsc.png",
    category: "electronics",
    description:
      "A textile-based computer: four haptic felt buttons, a capacitive fabric trackpad, an e-ink display, and generative text. Exhibited at ITP's thesis show and the Open Hardware Summit Berlin.",
    stack: "Raspberry Pi · RP2350 · Python · machine knitting",
    tags: [
      "interaction design",
      "HCI",
      "e-textiles",
      "embedded systems",
      "alt hardware",
    ],
    disciplines: ["design", "code", "hardware"],
    links: {
      web: "https://thesoft.computer/",
    },
  },
];

export const moreProjects = [
  {
    title: "Department of Lost Circuits",
    imageUrl: "/assets/dlc.gif",
    category: "design",
    description:
      "A generative system that creates Riso-printable stamps from obsolete electronics.",
    tags: ["generative design", "frontend"],
    stack: "p5.js · Riso print",
    link: "https://lost-circuits.netlify.app/",
  },
  {
    title: "Useless Machines",
    imageUrl: "/assets/um.gif",
    category: "code",
    description:
      "A digital archive of whimsical, conceptual, and defiant machines, built as a commissioned client project.",
    stack: "Next.js · Are.na API",
    tags: ["client work", "frontend"],
    link: "https://uselessmachines.vercel.app/",
  },
  {
    title: "Print + Code",
    imageUrl: "/assets/pc.png",
    category: "code",
    description:
      "A documentation hub for computational craft: riso-printed generative animation, a plotter-drawn machine drawing series, a generative postage stamp system, and a soft-circuits zine.",
    stack: "p5.js · HTML/CSS/JS",
    tags: ["generative design", "frontend", "creative coding"],
    link: "https://print-code.netlify.app/",
  },
  {
    title: "Cute Technologies",
    imageUrl: "/assets/cute-tech.gif",
    category: "code",
    description:
      "A cute tech tools blog built with Next.js and the Notion API.",
    stack: "Next.js · Notion API",
    tags: ["cms", "full-stack"],
    link: "https://cutetech.tools/",
  },
  {
    title: "Seedling",
    imageUrl: "/assets/seedling.gif",
    category: "design",
    description:
      "A tool to help people develop their creativity, designed end-to-end from research through a high-fidelity prototype.",
    stack: "Figma",
    tags: ["ux design", "ux research", "mobile app design"],
    disciplines: ["design"],
    links: {
      mobile:
        "https://www.figma.com/proto/5iTIwNSNoKFmnuOhgL2ocn/Seedling?page-id=36%3A1963&node-id=36%3A2223&viewport=245%2C48%2C0.22&scaling=min-zoom&starting-point-node-id=36%3A2223",
      web: "https://www.figma.com/proto/5iTIwNSNoKFmnuOhgL2ocn/Seedling?page-id=46%3A1304&node-id=50%3A3254&viewport=245%2C48%2C0.07&scaling=min-zoom&starting-point-node-id=50%3A3254&show-proto-sidebar=1",
      casestudy: "assets/Seedling - Case study.pdf",
    },
  },
  {
    title: "Cosmic Snax",
    imageUrl: "/assets/cosmic-snax.gif",
    category: "design",
    description:
      "A snack ordering app for a movie theater, taken from user flows through a high-fidelity prototype.",
    stack: "Figma",
    tags: ["ux design", "mobile app design"],
    links: {
      prototype:
        "https://www.figma.com/proto/oTPH8BW7owaY91IVOlR6KC/Cosmic-Snax?page-id=248%3A2311&node-id=256%3A1892&viewport=245%2C48%2C0.23&scaling=min-zoom&starting-point-node-id=256%3A1892",
      casestudy: "assets/Cosmic Snax - Case study.pdf",
    },
  },
  // electronics cluster
  {
    title: "ribbon_logic",
    imageUrl: "/assets/rlogic.png",
    category: "electronics",
    description:
      "A handheld poetry generator that creates generative text with Markov chains, built on an ESP32-S3 in CircuitPython.",
    stack: "ESP32-S3 · CircuitPython",
    tags: ["hardware", "generative text"],
    link: "https://months-tap-da9.craft.me/ribbon-logic",
  },
  {
    title: "PetalByte",
    imageUrl: "/assets/petalbyte.png",
    category: "electronics",
    description:
      "A flower-shaped laser-cut USB drive and generative text device running a custom pygame file explorer on a Raspberry Pi.",
    stack: "Raspberry Pi · pygame",
    tags: ["hardware"],
    link: "https://months-tap-da9.craft.me/petalbyte",
  },
  {
    title: "AirSense",
    imageUrl: "/assets/airsense.png",
    category: "electronics",
    description:
      "Indoor air quality monitor and live dashboard, built with Arduino and React.",
    stack: "Arduino · React",
    tags: ["hardware", "dashboard", "hardware + web"],
    link: "https://months-tap-da9.craft.me/airsense",
  },
  {
    title: "Puffcast",
    imageUrl: "/assets/puffcast.png",
    category: "electronics",
    description:
      "A handmade craft foam controller for Philips Hue, inspired by soft foam novelty phones of the 80s-90s.",
    stack: "Arduino · Philips Hue API",
    tags: ["hardware", "networks"],
    link: "https://months-tap-da9.craft.me/cIaDWsryPp9LdS",
  },
];

// kept for backward compatibility with anything importing allProjects
export const allProjects = [...selectedWork, ...moreProjects];
