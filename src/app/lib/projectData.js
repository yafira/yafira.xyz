// three tiers, decreasing weight: featuredWork (full cards + process
// reveal) > secondaryWork (compact cards) > moreProjects (lightest).
// everything else lives at electrocute.io.
//
// disciplines (optional): "design" | "code" | "hardware" — renders as badges.
// process (featuredWork only): { problem, approach, result }.
// swatches (optional): design tokens rendered as live color chips.
// status (optional): "shipped" | "concept" | "prototype" — renders as a
// small always-visible tag on the thumbnail. "shipped" = live/published/
// in real use; "prototype" = built and working but not published/
// distributed (most hardware); "concept" = speculative/design-only, no
// working build (e.g. a Figma case study).

export const featuredWork = [
  {
    title: "electrocute-ui",
    imageUrl: "/assets/ecuteui.gif",
    category: "code",
    status: "shipped",
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
    status: "shipped",
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
    title: "alt-loom",
    imageUrl: "/assets/alt-loom.gif",
    category: "code",
    status: "shipped",
    description:
      "An accessibility audit tool that flags missing or weak alt text in pasted HTML, then drafts candidates using a word-level Markov chain — the same technique behind ribbon_logic and PetalByte.",
    stack: "Vanilla JavaScript · Markov chains",
    tags: ["accessibility", "generative text", "web tooling"],
    disciplines: ["design", "code"],
    links: {
      web: "https://alt-loom.vercel.app/",
      code: "https://github.com/yafira/alt-loom",
    },
    process: {
      problem:
        "Alt-text checkers either need to crawl a live URL (permission and CORS headaches) or lean on a vision model to actually see the image — an API dependency and a cost. Most just flag the gap and leave the blank field, which is exactly the moment someone tired types 'image' and moves on.",
      approach:
        "Runs entirely on pasted markup, no crawling: parses the HTML client-side and flags missing alt, alt that's just the filename, and single-word alt as a general rule rather than a fixed list of bad words, so 'chart' and 'logo' both get caught, not just the obvious ones. For each flag, pulls whatever text context already exists — a figcaption, a title attribute, the filename itself — and runs it through an actual order-2 Markov chain trained on alt-text sentence structures to draft candidates. The tool says plainly, in its own UI, that it reads text and not pixels — drafts are a starting point, never a description to trust blindly.",
      result:
        "A standalone accessibility tool that also makes the case that the generative-text practice and the engineering-rigor practice aren't two different skills.",
    },
  },
];

export const secondaryWork = [
  {
    title: "tinytinker.tools",
    imageUrl: "/assets/tinytinker.png",
    category: "code",
    status: "shipped",
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
    title: "Fluoro",
    imageUrl: "/assets/fluoro.gif",
    imageAlt:
      "Fluoro's press panel: loading an image, cycling ink presets, switching screens, and adjusting the print-flaw sliders",
    category: "code",
    status: "shipped",
    description:
      "Riso-fy (almost) anything. A zero-dependency browser toolkit that rebuilds the risograph process instead of faking it with a filter: per-ink separation, 1-bit screening, and multiply overprint with misregistration. Works on images via canvas, and on live web pages via CSS and SVG filters. Published on npm, so any site can add a Riso-fy button with one script tag.",
    stack: "Vanilla JavaScript · Canvas · SVG filters · npm",
    tags: ["creative coding", "web tooling", "generative design"],
    disciplines: ["design", "code"],
    links: {
      web: "https://fluoro-riso.vercel.app",
      npm: "https://www.npmjs.com/package/fluoro-riso",
      code: "https://github.com/yafira/fluoro-riso",
    },
  },
  {
    title: "Lumi",
    imageUrl: "/assets/lumi-preview.gif",
    category: "design",
    status: "concept",
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
    title: "Equitable Syllabus Project",
    imageUrl: "/assets/esp.gif",
    category: "code",
    status: "shipped",
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

// a single standalone showcase, not part of any grid — deliberately
// full-width and visually distinct, sitting between the software/
// product tier above and the r&d tier below as a surprise beat rather
// than another card in a row. no "process" field: this one's meant to
// read fast and punchy, not like another case study.
export const spotlightProject = {
  eyebrow: "a live experiment",
  title: "pixel picnic",
  gifUrl: "/assets/pixel-picnic.gif",
  gifAlt:
    "Pixel Picnic's live mode: a person on camera dithered in one style while the background is dithered in another, separated in real time by an on-device segmentation model",
  description:
    "Pixel Picnic started as a browser-based dithering tool — upload a photo, choose from four algorithms, export real fabrication-ready files for laser engraving or embroidery. This is its newest, liveliest feature: real-time, region-aware dithering over your camera, where an on-device segmentation model finds you in the frame and gives you one treatment while the background gets another — live, with nothing ever sent anywhere.",
  stack: "Next.js · TypeScript · MediaPipe · Canvas",
  tags: ["on-device ML", "computer vision", "creative coding"],
  links: {
    demo: "https://pixel-picnic.vercel.app/live",
    code: "https://github.com/yafira/pixel-picnic",
  },
};

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
    status: "shipped",
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
      web: "https://www.softcomponents.xyz/",
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
    status: "shipped",
    description:
      "A circuit simulator for e-textiles and soft electronics, so makers can test soft circuits before stitching them.",
    stack: "JavaScript · Canvas",
    tags: ["simulation", "circuits", "e-textiles", "web tooling", "frontend"],
    disciplines: ["code", "hardware"],
    links: {
      demo: "https://tinkerthread.netlify.app/",
      code: "https://github.com/yafira/tinker-thread",
    },
  },
  {
    title: "AirSense",
    imageUrl: "/assets/airsense.png",
    category: "electronics",
    status: "prototype",
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
      documentation: "https://months-tap-da9.craft.me/airsense",
    },
  },
  {
    title: "the soft computer",
    imageUrl: "/assets/tsc.png",
    category: "electronics",
    status: "prototype",
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
    title: "Spot Mapper",
    imageUrl: "/assets/spot-mapper.gif",
    category: "code",
    description:
      "Real-time collaborative floor plan tool used by 150+ participants to claim exhibition spots at ITP Camp's showcase. Admin and viewer modes, token-based access, live sync, and handoff docs.",
    stack: "Leaflet · SheetJS · Redis · Vercel",
    tags: ["full-stack", "web tooling", "real-time collaboration"],
    link: "https://spot-mapper.vercel.app",
  },
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
    title: "ml5.js contributions",
    imageUrl: "/assets/ml5.gif",
    category: "code",
    description:
      "Open source contributions to ml5.js: custom Docsify plugins for the documentation site, adding inline code explanations and copy-to-clipboard with a toast.",
    stack: "Docsify · JavaScript",
    tags: ["open source", "machine learning", "documentation"],
    link: "https://ml5js.org/blog/docsify-plugins-soft-ui/",
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
