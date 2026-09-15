// three tiers, decreasing weight: featuredWork (full cards + process
// reveal) > secondaryWork (compact cards) > moreProjects (lightest).
// everything else lives at electrocute.io.
//
// disciplines (optional): "design" | "code" | "hardware" — renders as badges.
// process (featuredWork only): { problem, approach, result }.
// swatches (optional): design tokens rendered as live color chips.

export const featuredWork = [
  {
    title: "electrocute-ui",
    imageUrl: "/assets/ecuteui.gif",
    category: "code",
    description:
      "Design system and React component library published on npm: 18 design tokens, 8 components, and a live documentation site. Designed, built, documented, and shipped end to end.",
    stack: "React · npm · Storybook",
    tags: ["design systems", "design engineering", "frontend", "open source"],
    disciplines: ["design", "code"],
    links: {
      web: "https://ui.electrocute.io",
      npm: "https://www.npmjs.com/package/electrocute-ui",
      code: "https://github.com/yafira/electrocute-ui",
    },
    process: {
      problem:
        "Every project was accumulating its own one-off palette and spacing decisions. Nothing was reusable, and an early attempt at fixing that overcorrected into 30+ tokens — more categories than anyone could actually keep straight while building.",
      approach:
        "Cut back to 18 tokens organized around function rather than hue — wisteria for structure, blush for accents, matcha for confirmation states, butter for highlights — so a component's color choice reads as a decision, not a guess. The 8 components shipped were the ones that kept getting rebuilt from scratch across other projects: buttons, tags, pills, the pieces with the most repeated, and most inconsistent, prior implementations.",
      result:
        "Published to npm with a live Storybook documentation site, and now the actual dependency the rest of electrocute.io builds on — including this portfolio's own pill and badge components.",
    },
    swatches: [
      { name: "wisteria", color: "#faf6ff" },
      { name: "blush", color: "#fdf1f9" },
      { name: "matcha", color: "#f3faea" },
      { name: "butter", color: "#ffffd8" },
      { name: "lilac", color: "#f7ecfb" },
      { name: "sky", color: "#eef8fd" },
    ],
  },
  {
    title: "cache",
    imageUrl: "/assets/cache.gif",
    category: "code",
    description:
      "A moodboard tool where you paste, drag, and style inspiration like you actually think. Create a patch, collect your stash, keep everything cached!",
    stack: "Next.js · React · CSS Modules",
    tags: ["design engineering", "web tooling", "frontend"],
    disciplines: ["design", "code"],
    links: {
      web: "https://cachecraft.io/",
      code: "https://github.com/yafira/cache",
      casestudy: "https://cachecraft.io/case-study",
    },
    process: {
      problem:
        "Most moodboard tools force inspiration into a rigid grid or board layout — but visual reference doesn't actually get collected that way. It gets pasted in fast, layered, and revisited out of order.",
      approach:
        "Built around one core interaction: paste an image or link and it drops onto a freely-positioned canvas immediately, no upload flow in the way. Kept the organizing model to just two concepts — a patch (a working canvas) and a stash (a saved collection) — so styling and arranging stays fast instead of growing into folder-and-database overhead.",
      result:
        "A tool that gets out of the way: paste, drag, style, done. Full write-up in the case study.",
    },
  },
  {
    title: "Spot Mapper",
    imageUrl: "/assets/spot-mapper.gif",
    category: "code",
    description:
      "Real-time collaborative floor plan tool used by 150+ participants to claim exhibition spots at ITP Camp's showcase. Admin and viewer modes, token-based access, live sync, and handoff docs.",
    stack: "Leaflet · SheetJS · Redis · Vercel",
    tags: ["full-stack", "web tooling", "real-time collaboration"],
    disciplines: ["design", "code"],
    links: {
      demo: "https://spot-mapper.vercel.app",
      casestudy: "https://spot-mapper-case-study.vercel.app",
    },
    process: {
      problem:
        "150+ participants needed to claim physical exhibition spots on a shared floor plan during ITP Camp's showcase setup, without an admin manually resolving conflicting claims by hand.",
      approach:
        "Built the floor plan on Leaflet, with Redis backing shared state so one participant's claim appears live for everyone else immediately. Token-based access scoped each participant to claiming and editing only their own spot, with separate admin and viewer modes so instructors could oversee the whole map without opening every claim up to everyone.",
      result:
        "A live tool that ran the actual showcase setup for 150+ participants, plus handoff docs so ITP staff can run it themselves in future years without needing a developer on call.",
    },
  },
];

export const secondaryWork = [
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
      code: "https://github.com/yafira/tinytinker-tools",
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
      "wearables",
    ],
    disciplines: ["design", "hardware"],
    links: {
      prototype: "https://lumi-wearable.vercel.app",
      casestudy: "https://lumi-case-study.vercel.app",
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
];

// r&d / physical computing — soft electronics, e-textiles, and hardware
// work. Kept as a visually distinct, lower-weight tier from the
// software/product work above so a design-engineering-focused reader
// hits the product work first and this reads as R&D rather than the
// main pitch.
export const rdWork = [
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
      code: "https://github.com/yafira/soft-components",
    },
    process: {
      problem:
        "Static diagrams can't show how a soft circuit actually behaves — the squish of a felt button, the slide of a fabric potentiometer, the give of a pressure sensor. Documentation for e-textiles usually flattens exactly the quality that makes them worth using.",
      approach:
        "Prototyped three different animation approaches — plain CSS transforms, GSAP timeline sequencing, and Motion's spring physics — before realizing the right answer wasn't picking one, but matching the animation model to the material behavior each component actually needed to demonstrate. A felt button's squash-and-release needed spring easing; a fabric potentiometer's slide needed timeline-driven interpolation instead.",
      result:
        "A library where every component's demo teaches its physical behavior first, material science second — interaction as documentation rather than a diagram bolted on afterward.",
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
    title: "AirSense",
    imageUrl: "/assets/airsense.png",
    category: "electronics",
    description:
      "An indoor air quality sensor housed in a transparent, house-shaped acrylic enclosure with a color-coded display for at-a-glance readability, paired with a live web dashboard. Rebuilt from HTTP polling to an MQTT pub/sub pipeline to support real-time historical charting.",
    stack: "Arduino · BME680 · MQTT · Chart.js · React",
    tags: [
      "real-time systems",
      "iot",
      "data visualization",
      "physical computing",
    ],
    disciplines: ["design", "code", "hardware"],
    links: {
      demo: "https://months-tap-da9.craft.me/airsense",
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

// kept for backward compatibility with anything importing selectedWork
export const selectedWork = [...featuredWork, ...secondaryWork, ...rdWork];

export const moreProjects = [
  {
    title: "Department of Lost Circuits",
    imageUrl: "/assets/dlc.gif",
    category: "design",
    description:
      "A generative system that creates Riso-printable stamps from obsolete electronics.",
    tags: ["generative design", "creative coding", "print"],
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
    tags: ["client work", "frontend", "archive"],
    link: "https://uselessmachines.vercel.app/",
  },
  {
    title: "Print + Code",
    imageUrl: "/assets/pc.png",
    category: "code",
    description:
      "A documentation hub for computational craft: riso-printed generative animation, a plotter-drawn machine drawing series, a generative postage stamp system, and a soft-circuits zine.",
    stack: "p5.js · HTML/CSS/JS",
    tags: ["generative design", "frontend", "creative coding", "print"],
    link: "https://print-code.netlify.app/",
  },
  {
    title: "Cute Technologies",
    imageUrl: "/assets/cute-tech.gif",
    category: "code",
    description:
      "A cute tech tools blog built with Next.js and the Notion API.",
    stack: "Next.js · Notion API",
    tags: ["cms", "full-stack", "content"],
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
    tags: ["hardware", "generative text", "embedded systems"],
    link: "https://months-tap-da9.craft.me/ribbon-logic",
  },
  {
    title: "PetalByte",
    imageUrl: "/assets/petalbyte.png",
    category: "electronics",
    description:
      "A flower-shaped laser-cut USB drive and generative text device running a custom pygame file explorer on a Raspberry Pi.",
    stack: "Raspberry Pi · pygame",
    tags: ["hardware", "generative text", "physical computing"],
    link: "https://months-tap-da9.craft.me/petalbyte",
  },
  {
    title: "Puffcast",
    imageUrl: "/assets/puffcast.png",
    category: "electronics",
    description:
      "A handmade craft foam controller for Philips Hue, inspired by soft foam novelty phones of the 80s-90s.",
    stack: "Arduino · Philips Hue API",
    tags: ["hardware", "physical computing", "smart home"],
    link: "https://months-tap-da9.craft.me/cIaDWsryPp9LdS",
  },
];

// kept for backward compatibility with anything importing allProjects
export const allProjects = [...selectedWork, ...moreProjects];
