import "@/app/styles/globals.css";
const projectSections = {
  code: [
    {
      title: "Print + Code",
      imageUrl: "/assets/pc.png",
      link: "https://print-code.netlify.app/",
      description:
        "Generative print work exploring code, form, and materiality.",
    },
    {
      title: "Useless Machines",
      imageUrl: "/assets/um.gif",
      link: "https://uselessmachines.vercel.app/",
      description:
        "A digital archive of whimsical, conceptual, and defiant machines. ",
    },
    {
      title: "TinkerThread",
      imageUrl: "/assets/tt.gif",
      link: "https://tinkerthread.netlify.app/",
      description: "Circuit simulator made with JavaScript.",
    },

    {
      title: "Scribble Pop",
      imageUrl: "/assets/scribble.gif",
      link: "https://scribble-pop.netlify.app/",
      description: "Creative drawing tool using canvas.",
    },
    {
      title: "Cute Technologies",
      imageUrl: "/assets/cute-tech.gif",
      link: "https://cutetech.tools/",
      description: "A cute tech tools blog, Next.js and Notion API.",
    },
    {
      title: "Synthwave Chimes",
      imageUrl: "/assets/synthchime.gif",
      link: "https://synthwave-chimes.netlify.app/",
      description: "Interactive sound and shape sketch with p5.js.",
    },
    {
      title: "Write Mind",
      imageUrl: "/assets/write-mind.png",
      link: "https://the-write-mind.vercel.app/",
      description: "Simple writing tool exploring creative cognition.",
    },
    {
      title: "Markie",
      imageUrl: "/assets/notes.gif",
      link: "https://markie.netlify.app/",
      description: "Markdown editor and preview app built with React.",
    },
  ],
  design: [
    {
      title: "Department of Lost Circuits",
      imageUrl: "/assets/dlc.gif",
      link: "https://lost-circuits.netlify.app/",
      description:
        "A generative system that creates Riso-printable stamps from obsolete electronics. ",
    },
    {
      title: "Past, Pastry, Future",
      imageUrl: "/assets/ppf.gif",
      link: "https://electrocuteitp.wordpress.com/2024/12/20/past-pastry-future-an-ar-time-travel-experience-with-vuforia-and-unity/",
      description:
        "Time travel augmented reality experience, Unity/C# and Vuforia.",
    },
    {
      title: "Cosmic Snax",
      imageUrl: "/assets/cosmic-snax.gif",
      description: "A snack ordering app for a movie theater.",
      links: {
        prototype:
          "https://www.figma.com/proto/oTPH8BW7owaY91IVOlR6KC/Cosmic-Snax?page-id=248%3A2311&node-id=256%3A1892&viewport=245%2C48%2C0.23&scaling=min-zoom&starting-point-node-id=256%3A1892",
        casestudy: "assets/Cosmic Snax - Case study.pdf",
      },
    },
    {
      title: "Seedling",
      imageUrl: "/assets/seedling.gif",
      description: "A tool to help people develop their creativity.",
      links: {
        mobile:
          "https://www.figma.com/proto/5iTIwNSNoKFmnuOhgL2ocn/Seedling?page-id=36%3A1963&node-id=36%3A2223&viewport=245%2C48%2C0.22&scaling=min-zoom&starting-point-node-id=36%3A2223",
        web: "https://www.figma.com/proto/5iTIwNSNoKFmnuOhgL2ocn/Seedling?page-id=46%3A1304&node-id=50%3A3254&viewport=245%2C48%2C0.07&scaling=min-zoom&starting-point-node-id=50%3A3254&show-proto-sidebar=1",
        casestudy: "assets/Seedling - Case study.pdf",
      },
    },
    {
      title: "bDazzled",
      imageUrl: "/assets/bdazzled.gif",
      description: "A custom bicycle web shop.",
      links: {
        prototype:
          "https://www.figma.com/proto/GdO2Bto4BnWhiwRuo6coS1/bDazzled?node-id=38%3A5020&starting-point-node-id=38%3A5020",
        casestudy: "assets/bDazzled - Case study.pdf",
      },
    },
    {
      title: "Kawaii ML",
      imageUrl: "/assets/kawaii-ml.png",
      link: "https://www.figma.com/community/file/1282166884816539041/kawaii-ml-card-deck",
      description: "Cute digital card deck exploring machine learning.",
    },
  ],
  electronics: [
    {
      title: "Moon Pocket",
      imageUrl: "/assets/moonpocket.png",
      link: "https://months-tap-da9.craft.me/moonpocket",
      description:
        "A poetic connected device for tracking lunar and tidal cycles in real time.",
    },
    {
      title: "AirSense",
      imageUrl: "/assets/airsense.png",
      link: "https://electrocuteitp.wordpress.com/2025/03/16/troubleshooting-mqtt-connection-issues-in-react-from-vite-to-plain-javascript-back-to-react-more-updates/",
      description:
        "Indoor air quality monitor and dashboard built with Arduino and React.",
    },
    {
      title: "Glowmotion",
      imageUrl: "/assets/glow.gif",
      link: "https://months-tap-da9.craft.me/glowmotion",
      description: "Gesture-controlled interactive light.",
    },
    {
      title: "Custom LEDs",
      imageUrl: "/assets/leds.jpg",
      link: "https://months-tap-da9.craft.me/UPIseOWDQQ2AAx",
      description: "Custom LEDs experimenting with resin.",
    },
  ],
  craft: [
    {
      title: "TinkerStation",
      imageUrl: "/assets/tinkerstation.png",
      link: "https://electrocuteitp.wordpress.com/2025/03/07/cute-functional-objects-series-tinkerstation-a-compact-hub-for-electronics-projects/",
      description:
        "A compact organizer for neatly storing electronic components.",
    },
    {
      title: "PetalByte",
      imageUrl: "/assets/petalbyte.png",
      link: "https://electrocuteitp.wordpress.com/2025/02/21/cute-functional-objects-series-a-flower-shape-enclosure-for-my-2gb-usb-memory-stick/",
      description:
        "An iridescent, flower-shaped USB enclosure that organizes file storage with style.",
    },
    {
      title: "Trinket Swivel Box",
      imageUrl: "/assets/swivelbox.png",
      link: "https://electrocuteitp.wordpress.com/2025/02/01/swivel-box/",
      description:
        "A wooden swivel box for organizing small items/trinkets with big meanings.",
    },
    {
      title: "Mini Clippyboards",
      imageUrl: "/assets/clippyboards.png",
      link: "https://electrocuteitp.wordpress.com/2025/02/07/cute-functional-objects-series-mini-clippyboards-5x1/",
      description:
        "A collection of mini clippyboards for holding onto your biggest ideas on the go.",
    },
    {
      title: "Electrojute",
      imageUrl: "/assets/electrojute.png",
      link: "https://months-tap-da9.craft.me/n728rE3K9pjrQx",
      description:
        "E-textile tote bag exploring jute fiber and conductive materials.",
    },
  ],
  text: [], // will be populated from WordPress (blogPosts)
};

export const allProjects = Object.entries(projectSections).flatMap(
  ([category, arr]) => arr.map((p) => ({ ...p, category })),
);
