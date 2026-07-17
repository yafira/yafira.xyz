"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import ProjectBox from "@/app/components/ProjectBox";
import Reveal from "@/app/components/Reveal";
import useMediaQuery from "@/app/hooks/useMediaQuery";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isMobile = useMediaQuery("(max-width: 640px)");
  if (!mounted) return null;

  const projectSections = {
    code: [
      {
        title: "Spot Mapper",
        imageUrl: "/assets/spot-mapper.gif",
        description:
          "A real-time collaborative floor plan tool for event spot assignments. Built with Leaflet and Vercel KV for 150+ participants at ITP Camp's Showcase.",
        links: {
          demo: "https://spot-mapper.vercel.app",
          casestudy: "https://spot-mapper-case-study.vercel.app",
        },
      },
      {
        title: "tinytinker.tools",
        imageUrl: "/assets/tinytinker.png",
        link: "https://tinytinker.tools",
        description:
          "A handmade web toolkit for makers & tinkerers. 22+ free, open source browser tools.",
      },
      {
        title: "electrocute-ui",
        imageUrl: "/assets/ecuteui.gif",
        description:
          "Design system and React component library for Electrocute Lab: tokens, 8 components, and a live Storybook. Published on npm.",
        links: {
          site: "https://ui.electrocute.io",
          npm: "https://www.npmjs.com/package/electrocute-ui",
          github: "https://github.com/yafira/electrocute-ui",
        },
      },
      {
        title: "NYU ITP's Equitable Syllabus Project",
        imageUrl: "/assets/esp.gif",
        link: "https://itp.nyu.edu/esp#/",
        description:
          "A redesigned and rebuilt website for the Equitable Syllabus Project, developed with Next.js.",
      },
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
        description: "A circuit simulator for e-textiles and soft electronics.",
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
        title: "Lumi",
        imageUrl: "/assets/lumi-preview.gif",
        description:
          "A speculative wearable and companion app for migraine prodrome detection, designed and built end-to-end in React and TypeScript.",
        links: {
          prototype: "https://lumi-wearable.vercel.app",
          casestudy: "https://lumi-case-study.vercel.app",
        },
      },
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
        title: "PetalByte",
        imageUrl: "/assets/petalbyte.png",
        link: "https://months-tap-da9.craft.me/petalbyte",
        description:
          "A flower-shaped laser-cut USB drive and generative text device running a custom pygame file explorer on a Raspberry Pi.",
      },
      {
        title: "the soft computer",
        imageUrl: "/assets/tsc.png",
        link: "https://thesoft.computer/",
        description:
          "A textile-based computing object exploring calm technology, slow tech, and soft interfaces.",
      },
      {
        title: "ribbon_logic",
        imageUrl: "/assets/rlogic.png",
        link: "https://months-tap-da9.craft.me/ribbon-logic",
        description:
          "A handheld poetry generator that creates generative text based on Markov chains.",
      },
      {
        title: "Puffcast",
        imageUrl: "/assets/puffcast.png",
        link: "https://months-tap-da9.craft.me/cIaDWsryPp9LdS",
        description:
          "A handmade craft foam controller for Philips Hue, inspired by soft foam novelty phones of the 80s-90s.",
      },
      {
        title: "Pocket Oracle of Time",
        imageUrl: "/assets/oracle.png",
        link: "https://months-tap-da9.craft.me/oracle",
        description:
          "A small timekeeping object for slower encounters with time. Softly present.",
      },
      {
        title: "tendertronic",
        imageUrl: "/assets/nime.png",
        link: "https://months-tap-da9.craft.me/tendertronic",
        description:
          "An analog electronic instrument built from raw circuitry and slow tuning.",
      },
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
        link: "https://months-tap-da9.craft.me/airsense",
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
        title: "Static Chic",
        imageUrl: "/assets/static.png",
        link: "https://months-tap-da9.craft.me/static-chic",
        description:
          "A wearable experiment in wireless energy, where LEDs glow through electromagnetic coupling.",
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
    text: [],
  };

  if (isMobile) {
    return <MobilePortfolioView projectSections={projectSections} />;
  }
  return <DesktopPortfolioView projectSections={projectSections} />;
}

/* shared hero, used by both mobile and desktop */
function HomeHero() {
  return (
    <div className="home-hero">
      <div className="home-hero-flower">
        <Image
          src="/assets/flower-network-logo.png"
          alt="Yafira's flower mark"
          width={300}
          height={300}
          style={{ objectFit: "contain", mixBlendMode: "multiply" }}
          priority
        />
      </div>
      <h1 className="home-hero-role">
        i&apos;m <span className="hero-name-accent">yafira</span>, a design
        engineer &amp; creative technologist.
      </h1>
      <p className="home-hero-tagline">
        i design and build interactive products across software, hardware, and
        emerging interfaces.
      </p>
      <div className="home-hero-cta">
        <a href="/work" className="link-btn primary">
          <span>view my work</span>
          <span aria-hidden="true">→</span>
        </a>
        <a href="/contact" className="link-btn">
          get in touch
        </a>
      </div>
    </div>
  );
}

/* MOBILE VIEW */
function MobilePortfolioView({ projectSections }) {
  const [active, setActive] = useState(null);
  const [showFlowerMenu, setShowFlowerMenu] = useState(false);
  const listRef = useRef(null);

  const closeMenu = () => setShowFlowerMenu(false);

  const categories = [
    { id: "code", label: "code", icon: "/assets/code.png" },
    { id: "design", label: "design", icon: "/assets/design.png" },
    { id: "electronics", label: "electronics", icon: "/assets/circuit.png" },
    { id: "craft", label: "craft", icon: "/assets/tools.png" },
    { id: "text", label: "text", icon: "/assets/text.png" },
  ];

  const getItemLinks = (item) => {
    if (item?.links && typeof item.links === "object") {
      return Object.entries(item.links)
        .filter(([k]) => k !== "description")
        .map(([label, href]) => ({ label: String(label).toUpperCase(), href }));
    }
    if (item?.link) return [{ label: "→", href: item.link }];
    return [];
  };

  const items = active ? (projectSections[active] ?? []) : [];

  const handleSelect = (id) => {
    setShowFlowerMenu(false);
    setActive((prev) => (prev === id ? null : id));
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  return (
    <div className="page-container mobile-wrap home-flow">
      <div className="mobile-header">
        <h1 className="mobile-title">yafira://</h1>
      </div>

      <div className="mobile-categories" role="tablist" aria-label="sections">
        {categories.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={active === c.id}
            data-cat={c.id}
            className={`chip-btn raised ${active === c.id ? "is-active" : ""}`}
            onClick={() => handleSelect(c.id)}
          >
            <Image src={c.icon} alt="" width={36} height={36} />
            <span>{c.label}</span>
          </button>
        ))}

        <button
          type="button"
          className="chip-btn flower-mobile-tile"
          aria-haspopup="true"
          aria-expanded={showFlowerMenu}
          onClick={() => {
            setActive(null); // close whatever category is open
            setShowFlowerMenu((v) => !v);
          }}
        >
          <Image
            src="/assets/flower-network-logo.png"
            alt="open menu"
            width={90}
            height={90}
          />
          <span className="sr-only"></span>
        </button>
      </div>

      {showFlowerMenu && !active && (
        <nav className="flower-menu" aria-label="site">
          <button
            className="flower-menu-close"
            onClick={closeMenu}
            aria-label="close menu"
          >
            ×
          </button>
          <a href="/about" onClick={closeMenu}>
            about
          </a>
          <a href="/cv" onClick={closeMenu}>
            cv
          </a>
          <a href="/contact" onClick={closeMenu}>
            contact
          </a>
        </nav>
      )}

      {active && (
        <div ref={listRef} className="mobile-links">
          <h2 className="mobile-section-title">{active}</h2>
          <ul className="mobile-list" aria-label={`${active} projects`}>
            {items.map((item, i) => {
              const links = getItemLinks(item);
              return (
                <li
                  key={`${active}-${i}`}
                  className="mobile-row"
                  data-cat={active}
                >
                  <div className="row-main">
                    {item.imageUrl && active !== "text" && (
                      <Image
                        className="row-thumb"
                        src={item.imageUrl}
                        alt=""
                        width={40}
                        height={40}
                      />
                    )}
                    <span className="row-title">{item.title}</span>
                  </div>
                  <div className="row-actions">
                    {links.length > 0 ? (
                      links.map((lnk, idx) => (
                        <a
                          key={idx}
                          href={lnk.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-btn"
                        >
                          {lnk.label}
                        </a>
                      ))
                    ) : (
                      <span className="no-link">no link</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {active === "text" && (
            <div className="mobile-blog-shortcuts">
              <a
                href="https://blog.electrocute.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn electrocute"
              >
                electrocute blog
              </a>
              <a
                href="https://electrocuteitp.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn itp"
              >
                itp blog
              </a>
              <a href="/posts" className="link-btn archive">
                view full archive
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* DESKTOP VIEW */
function DesktopPortfolioView({ projectSections }) {
  const [activeSection, setActiveSection] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogLoading, setBlogLoading] = useState(false);
  const [blogError, setBlogError] = useState(null);

  // drag state for the category blobs — each blob tracks only its own
  // offset, nothing measures any other element, so this can't develop
  // the fragility the old connector-lines system had
  const [offsets, setOffsets] = useState({
    code: { x: 0, y: 0 },
    electronics: { x: 0, y: 0 },
    design: { x: 0, y: 0 },
    craft: { x: 0, y: 0 },
    text: { x: 0, y: 0 },
  });
  const [draggingId, setDraggingId] = useState(null);
  const [jigglingId, setJigglingId] = useState(null);
  const dragRef = useRef({
    id: null,
    startX: 0,
    startY: 0,
    startOffset: { x: 0, y: 0 },
    moved: false,
  });
  const jiggleTimeoutRef = useRef(null);

  const categories = [
    { id: "code", label: "code", icon: "/assets/code.png" },
    { id: "electronics", label: "electronics", icon: "/assets/circuit.png" },
    { id: "design", label: "design", icon: "/assets/design.png" },
    { id: "craft", label: "craft", icon: "/assets/tools.png" },
    { id: "text", label: "text", icon: "/assets/text.png" },
  ];

  // Fetch blog posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setBlogLoading(true);
        const res = await fetch("/api/blog");
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const data = await res.json();

        const decode = (s = "") => {
          const el = document.createElement("textarea");
          el.innerHTML = s;
          return el.value;
        };

        setBlogPosts(
          data.map((p) => ({
            ...p,
            title: decode(p.title),
          })),
        );
      } catch (e) {
        setBlogError(e.message);
      } finally {
        setBlogLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsDrawerOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    return () => {
      if (jiggleTimeoutRef.current) clearTimeout(jiggleTimeoutRef.current);
    };
  }, []);

  const handleBoxClick = (section) => {
    if (activeSection === section) setIsDrawerOpen(!isDrawerOpen);
    else {
      setActiveSection(section);
      setIsDrawerOpen(true);
    }
  };

  const handleCloseDrawer = () => setIsDrawerOpen(false);

  const handlePointerDown = (e, id) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = {
      id,
      startX: e.clientX,
      startY: e.clientY,
      startOffset: offsets[id],
      moved: false,
    };
    setDraggingId(id);
  };

  const handlePointerMove = (e) => {
    const drag = dragRef.current;
    if (!drag.id) return;
    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) drag.moved = true;
    setOffsets((prev) => ({
      ...prev,
      [drag.id]: {
        x: drag.startOffset.x + dx,
        y: drag.startOffset.y + dy,
      },
    }));
  };

  const handlePointerUp = (e, id) => {
    const drag = dragRef.current;
    const wasMoved = drag.moved;
    dragRef.current = {
      id: null,
      startX: 0,
      startY: 0,
      startOffset: { x: 0, y: 0 },
      moved: false,
    };
    setDraggingId(null);

    if (wasMoved) {
      setJigglingId(id);
      if (jiggleTimeoutRef.current) clearTimeout(jiggleTimeoutRef.current);
      jiggleTimeoutRef.current = setTimeout(() => setJigglingId(null), 450);
    } else {
      handleBoxClick(id);
    }
  };

  return (
    <div className="page-container home-flow">
      <div className="hero-blob-field">
        <svg
          className="hero-connector-lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 50 20 L 10.75 12.35"
            style={{ stroke: "var(--code-color)" }}
          />
          <path
            d="M 50 20 L 91.25 14.35"
            style={{ stroke: "var(--electronics-color)" }}
          />
          <path
            d="M 50 20 L 4.75 56.35"
            style={{ stroke: "var(--design-color)" }}
          />
          <path
            d="M 50 20 L 95.25 56.35"
            style={{ stroke: "var(--craft-color)" }}
          />
          <path
            d="M 50 20 L 50 87.65"
            style={{ stroke: "var(--text-color)" }}
          />
        </svg>

        <HomeHero />

        <div className="category-blob-layer">
          {categories.map((cat, i) => {
            const offset = offsets[cat.id];
            const hasMoved = offset.x !== 0 || offset.y !== 0;
            return (
              <button
                key={cat.id}
                type="button"
                className={`category-blob category-${cat.id} blob-${i + 1} ${
                  activeSection === cat.id ? "active" : ""
                } ${draggingId === cat.id ? "dragging" : ""} ${
                  jigglingId === cat.id ? "jiggling" : ""
                }`}
                style={{
                  "--drag-x": `${offset.x}px`,
                  "--drag-y": `${offset.y}px`,
                  animationPlayState:
                    hasMoved || draggingId === cat.id ? "paused" : "running",
                }}
                onPointerDown={(e) => handlePointerDown(e, cat.id)}
                onPointerMove={handlePointerMove}
                onPointerUp={(e) => handlePointerUp(e, cat.id)}
                aria-pressed={activeSection === cat.id}
              >
                <Image src={cat.icon} alt="" width={52} height={52} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {activeSection && (
        <div
          className={`projects-drawer ${isDrawerOpen ? "open" : ""}`}
          data-section={activeSection}
        >
          <button className="drawer-close" onClick={handleCloseDrawer}>
            <ChevronDown />
          </button>

          <div className="projects-scroll-container">
            {activeSection === "text" && (
              <div style={{ padding: "0 1rem", marginBottom: ".5rem" }}>
                {blogLoading && <p style={{ opacity: 0.8 }}>loading posts…</p>}
                {blogError && (
                  <p style={{ color: "crimson" }}>error: {blogError}</p>
                )}
                {!blogLoading && !blogError && blogPosts.length === 0 && (
                  <p style={{ opacity: 0.8 }}>no posts found.</p>
                )}
              </div>
            )}

            <div className="projects-drawer-grid">
              {(activeSection === "text"
                ? blogPosts
                : projectSections[activeSection] || []
              ).map((item, index) => (
                <Reveal
                  key={`${activeSection}-${index}`}
                  delay={Math.min(index * 70, 350)}
                >
                  <ProjectBox
                    {...item}
                    category={activeSection}
                    badge={
                      activeSection === "text" ? item.siteLabel : undefined
                    }
                    showLinksAlways
                  />
                </Reveal>
              ))}
            </div>
          </div>

          {activeSection === "text" && (
            <nav className="posts-all" aria-label="more">
              <span className="posts-all-label">more:</span>
              <a
                href="https://blog.electrocute.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn electrocute"
                aria-label="open Electrocute blog"
              >
                electrocute
              </a>
              <a
                href="https://electrocuteitp.wordpress.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-btn itp"
                aria-label="open ITP blog"
              >
                itp
              </a>
              <a
                href="/posts"
                className="link-btn archive primary"
                aria-label="view full archive"
              >
                <span>view full archive</span>
                <span aria-hidden="true">→</span>
              </a>
            </nav>
          )}
        </div>
      )}
    </div>
  );
}
