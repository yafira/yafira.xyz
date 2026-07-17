// app/lib/projectData.js
//
// selected work: the six projects that carry the professional pitch.
// more projects: strong secondary work.
// everything else lives at electrocute.io.

export const selectedWork = [
  {
    title: "Spot Mapper",
    imageUrl: "/assets/spot-mapper.gif",
    category: "code",
    description:
      "Real-time collaborative floor plan tool used by 150+ participants to claim exhibition spots at ITP Camp's showcase. Admin and viewer modes, token-based access, live sync, and handoff docs.",
    stack: "Leaflet · SheetJS · Redis · Vercel",
    tags: ["product design", "full-stack"],
    links: {
      demo: "https://spot-mapper.vercel.app",
      casestudy: "https://spot-mapper-case-study.vercel.app",
    },
  },
  {
    title: "electrocute-ui",
    imageUrl: "/assets/ecuteui.gif",
    category: "code",
    description:
      "Design system and React component library published on npm: 18 design tokens, 8 components, and a live documentation site. Designed, built, documented, and shipped end to end.",
    stack: "React · npm · Storybook",
    tags: ["design systems", "design engineering", "frontend"],
    links: {
      web: "https://ui.electrocute.io",
      npm: "https://www.npmjs.com/package/electrocute-ui",
      github: "https://github.com/yafira/electrocute-ui",
    },
  },
  {
    title: "the soft computer",
    imageUrl: "/assets/tsc.png",
    category: "electronics",
    description:
      "A textile-based computer: four haptic felt buttons, a capacitive fabric trackpad, an e-ink display, and generative text. Exhibited at ITP's thesis show and the Open Hardware Summit Berlin.",
    stack: "Raspberry Pi · RP2350 · Python · machine knitting",
    tags: ["interaction design", "hardware ux", "hardware + web"],
    links: {
      web: "https://thesoft.computer/",
    },
  },
  {
    title: "tinytinker.tools",
    imageUrl: "/assets/tinytinker.png",
    category: "code",
    description:
      "A suite of 22+ free browser tools for makers, built as one product family on a shared design system. Designed, developed, and maintained solo.",
    stack: "Next.js · TypeScript",
    tags: ["product design", "web tooling", "frontend"],
    link: "https://tinytinker.tools",
  },
  {
    title: "Lumi",
    imageUrl: "/assets/lumi-preview.gif",
    category: "design",
    description:
      "Speculative migraine-detection wearable taken from research to a working prototype, spanning three hardware form factors and a companion app.",
    stack: "React · TypeScript · Vite",
    tags: ["end-to-end product", "ux", "frontend"],
    links: {
      prototype: "https://lumi-wearable.vercel.app",
      casestudy: "https://lumi-case-study.vercel.app",
    },
  },
  {
    title: "Equitable Syllabus Project",
    imageUrl: "/assets/esp.gif",
    category: "code",
    description:
      "Redesigned and rebuilt the Equitable Syllabus Project's website for NYU ITP as lead developer, migrating to Next.js with a new information architecture.",
    stack: "Next.js",
    tags: ["client work", "frontend"],
    link: "https://itp.nyu.edu/esp#/",
  },
];

export const moreProjects = [
  {
    title: "TinkerThread",
    imageUrl: "/assets/tt.gif",
    category: "code",
    description:
      "A circuit simulator for e-textiles and soft electronics, so makers can test soft circuits before stitching them.",
    stack: "JavaScript · Canvas",
    tags: ["hardware tooling", "web tooling", "frontend"],
    link: "https://tinkerthread.netlify.app/",
  },
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
    title: "Print + Code",
    imageUrl: "/assets/pc.png",
    category: "code",
    description:
      "A documentation hub for computational craft: riso-printed generative animation, a plotter-drawn machine drawing series, a generative postage stamp system, and a soft-circuits zine.",
    stack: "p5.js · HTML/CSS/JS",
    tags: ["generative design", "frontend"],
    link: "https://print-code.netlify.app/",
  },
  {
    title: "Useless Machines",
    imageUrl: "/assets/um.gif",
    category: "code",
    description:
      "A digital archive of whimsical, conceptual, and defiant machines, built as a commissioned client project.",
    stack: "Next.js",
    tags: ["client work", "frontend"],
    link: "https://uselessmachines.vercel.app/",
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
    title: "Cosmic Snax",
    imageUrl: "/assets/cosmic-snax.gif",
    category: "design",
    description:
      "A snack ordering app for a movie theater, taken from user flows through a high-fidelity prototype.",
    stack: "Figma",
    tags: ["product design", "ux design"],
    links: {
      prototype:
        "https://www.figma.com/proto/oTPH8BW7owaY91IVOlR6KC/Cosmic-Snax?page-id=248%3A2311&node-id=256%3A1892&viewport=245%2C48%2C0.23&scaling=min-zoom&starting-point-node-id=256%3A1892",
      casestudy: "assets/Cosmic Snax - Case study.pdf",
    },
  },
  {
    title: "Seedling",
    imageUrl: "/assets/seedling.gif",
    category: "design",
    description:
      "A tool to help people develop their creativity, designed end-to-end from research through a high-fidelity prototype.",
    stack: "Figma",
    tags: ["product design", "ux design"],
    links: {
      mobile:
        "https://www.figma.com/proto/5iTIwNSNoKFmnuOhgL2ocn/Seedling?page-id=36%3A1963&node-id=36%3A2223&viewport=245%2C48%2C0.22&scaling=min-zoom&starting-point-node-id=36%3A2223",
      web: "https://www.figma.com/proto/5iTIwNSNoKFmnuOhgL2ocn/Seedling?page-id=46%3A1304&node-id=50%3A3254&viewport=245%2C48%2C0.07&scaling=min-zoom&starting-point-node-id=50%3A3254&show-proto-sidebar=1",
      casestudy: "assets/Seedling - Case study.pdf",
    },
  },
  {
    title: "Kawaii ML",
    imageUrl: "/assets/kawaii-ml.png",
    category: "design",
    description: "Cute digital card deck exploring machine learning concepts.",
    stack: "Figma",
    tags: ["illustration"],
    link: "https://www.figma.com/community/file/1282166884816539041/kawaii-ml-card-deck",
  },
  {
    title: "Cute Technologies",
    imageUrl: "/assets/cute-tech.gif",
    category: "code",
    description:
      "A cute tech tools blog built with Next.js and the Notion API.",
    stack: "Next.js · Notion API",
    tags: ["web tooling", "full-stack"],
    link: "https://cutetech.tools/",
  },
];

// kept for backward compatibility with anything importing allProjects
export const allProjects = [...selectedWork, ...moreProjects];
