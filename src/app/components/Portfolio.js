"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import ProjectBox from "@/app/components/ProjectBox";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const WP_API =
  "https://electrocuteblog.wordpress.com/wp-json/wp/v2/posts?per_page=12&_embed";

export default function Portfolio() {
  // wait for client mount to avoid ssr/client mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // lock page scroll while the homepage (portfolio) is mounted
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("home-locked");
    return () => {
      html.classList.remove("home-locked");
    };
  }, []);

  const isMobile = useMediaQuery("(max-width: 640px)");
  if (!mounted) return null;

  // Shared data: project sections (used by both views)
  const projectSections = {
    code: [
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

  if (isMobile) {
    return <MobilePortfolioView projectSections={projectSections} />;
  }
  return <DesktopPortfolioView projectSections={projectSections} />;
}

/* -------------------- MOBILE VIEW -------------------- */
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

  const items = active ? projectSections[active] ?? [] : [];

  const handleSelect = (id) => {
    setShowFlowerMenu(false); // close site menu if open
    setActive((prev) => (prev === id ? null : id));
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  };

  return (
    <div className="page-container mobile-wrap">
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

        {/* 6th tile: flower (always rendered) */}
        <button
          type="button"
          className={`chip-btn flower-mobile-tile ${
            active ? "is-disabled" : ""
          }`}
          aria-haspopup="true"
          aria-expanded={showFlowerMenu}
          aria-disabled={!!active}
          tabIndex={active ? -1 : 0}
          onClick={() => {
            if (!active) setShowFlowerMenu((v) => !v);
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

      {/* mini menu (about / cv / contact) */}
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
                          className="link-btn" // ← now inherits --accent color
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
                href="https://electrocuteblog.wordpress.com/"
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

/* -------------------- DESKTOP/TABLET VIEW -------------------- */
function DesktopPortfolioView({ projectSections }) {
  const [activeSection, setActiveSection] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [lines, setLines] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogLoading, setBlogLoading] = useState(false);
  const [blogError, setBlogError] = useState(null);

  const [active, setActive] = useState(null);
  const [showFlowerMenu, setShowFlowerMenu] = useState(false); // <-- add
  const closeMenu = () => setShowFlowerMenu(false); // <-- add
  const listRef = useRef(null);

  const svgRef = useRef(null);
  const flowerRef = useRef(null);

  const colors = {
    code: "var(--code-color)",
    electronics: "var(--electronics-color)",
    design: "var(--design-color)",
    craft: "var(--craft-color)",
    text: "var(--text-color)",
  };

  // fetch blog posts (desktop only)
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
          }))
        );
      } catch (e) {
        setBlogError(e.message);
      } finally {
        setBlogLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const categories = ["code", "electronics", "design", "craft", "text"];

  const updateLines = () => {
    if (!svgRef.current) return;

    const network = document.querySelector(".flower-network");
    const flower = document.querySelector(".image-box");
    const boxes = network ? network.querySelectorAll(":scope > .line-box") : [];

    if (!flower || boxes.length < 5) return;

    const svgRect = svgRef.current.getBoundingClientRect();
    const flowerRect = flower.getBoundingClientRect();
    const centerX = flowerRect.left + flowerRect.width / 2 - svgRect.left;
    const centerY = flowerRect.top + flowerRect.height / 2 - svgRect.top;

    const newLines = Array.from(boxes)
      .slice(0, 5)
      .map((box) => {
        const r = box.getBoundingClientRect();
        return {
          x1: centerX,
          y1: centerY,
          x2: r.left + r.width / 2 - svgRect.left,
          y2: r.top + r.height / 2 - svgRect.top,
        };
      });

    setLines(newLines);
  };

  useEffect(() => {
    const t = setTimeout(updateLines, 100);
    window.addEventListener("resize", updateLines);
    window.addEventListener("load", updateLines);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("load", updateLines);
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(updateLines, 100);
    window.addEventListener("resize", updateLines);
    window.addEventListener("load", updateLines);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", updateLines);
      window.removeEventListener("load", updateLines);
    };
  }, [activeSection]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setIsDrawerOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleBoxClick = (section) => {
    if (activeSection === section) setIsDrawerOpen(!isDrawerOpen);
    else {
      setActiveSection(section);
      setIsDrawerOpen(true);
    }
  };

  const handleCloseDrawer = () => setIsDrawerOpen(false);

  const itemsForSection =
    activeSection === "text" ? blogPosts : projectSections[activeSection] || [];

  return (
    <div className="page-container">
      <div className="main-section fixed">
        <div className="flower-network">
          <svg
            className="connector-lines"
            ref={svgRef}
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            {categories.map((sec, i) => {
              const hot = hovered === sec || activeSection === sec;
              return (
                <line
                  key={sec}
                  x1={lines[i]?.x1 ?? 0}
                  y1={lines[i]?.y1 ?? 0}
                  x2={lines[i]?.x2 ?? 0}
                  y2={lines[i]?.y2 ?? 0}
                  stroke={hot ? colors[sec] : "#333"}
                  strokeWidth={hot ? 4 : 2}
                  strokeOpacity={hot ? 1 : 0.7}
                />
              );
            })}
          </svg>

          <div className="image-box" ref={flowerRef} aria-hidden="true">
            <div style={{ position: "relative", width: 500, height: 500 }}>
              <Image
                src="/assets/flower-network-logo.png"
                alt="portfolio flower hub"
                fill
                style={{ objectFit: "contain" }}
                className="flower-image"
                priority
              />
            </div>
          </div>

          {/* 5 category nodes */}
          <div
            className={`line-box box1 ${
              activeSection === "code" ? "active" : ""
            }`}
            onClick={() => handleBoxClick("code")}
            onMouseEnter={() => setHovered("code")}
            onMouseLeave={() => setHovered(null)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && handleBoxClick("code")
            }
            aria-pressed={activeSection === "code"}
          >
            <Image
              src="/assets/code.png"
              alt="code icon"
              width={60}
              height={60}
            />
            <span className="box-text">code</span>
          </div>

          <div
            className={`line-box box2 ${
              activeSection === "electronics" ? "active" : ""
            }`}
            onClick={() => handleBoxClick("electronics")}
            onMouseEnter={() => setHovered("electronics")}
            onMouseLeave={() => setHovered(null)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") &&
              handleBoxClick("electronics")
            }
            aria-pressed={activeSection === "electronics"}
          >
            <Image
              src="/assets/circuit.png"
              alt="electronics icon"
              width={60}
              height={60}
            />
            <span className="box-text">electronics</span>
          </div>

          <div
            className={`line-box box3 ${
              activeSection === "design" ? "active" : ""
            }`}
            onClick={() => handleBoxClick("design")}
            onMouseEnter={() => setHovered("design")}
            onMouseLeave={() => setHovered(null)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && handleBoxClick("design")
            }
            aria-pressed={activeSection === "design"}
          >
            <Image
              src="/assets/design.png"
              alt="design icon"
              width={60}
              height={60}
            />
            <span className="box-text">design</span>
          </div>

          <div
            className={`line-box box4 ${
              activeSection === "craft" ? "active" : ""
            }`}
            onClick={() => handleBoxClick("craft")}
            onMouseEnter={() => setHovered("craft")}
            onMouseLeave={() => setHovered(null)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && handleBoxClick("craft")
            }
            aria-pressed={activeSection === "craft"}
          >
            <Image
              src="/assets/tools.png"
              alt="craft icon"
              width={60}
              height={60}
            />
            <span className="box-text">craft</span>
          </div>

          <div
            className={`line-box box5 ${
              activeSection === "text" ? "active" : ""
            }`}
            onClick={() => handleBoxClick("text")}
            onMouseEnter={() => setHovered("text")}
            onMouseLeave={() => setHovered(null)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && handleBoxClick("text")
            }
            aria-pressed={activeSection === "text"}
          >
            <Image
              src="/assets/text.png"
              alt="text icon"
              width={60}
              height={60}
            />
            <span className="box-text">text</span>
          </div>
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
                <ProjectBox
                  key={index}
                  {...item}
                  category={activeSection}
                  badge={activeSection === "text" ? item.siteLabel : undefined}
                />
              ))}
            </div>
          </div>

          {activeSection === "text" && (
            <nav className="posts-all" aria-label="more">
              <span className="posts-all-label">more:</span>
              <a
                href="https://electrocuteblog.wordpress.com/"
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
