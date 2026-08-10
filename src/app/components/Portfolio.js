"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Inkbloom } from "electrocute-ui";
import CycleWord from "@/app/components/CycleWord";
import ProjectBox from "@/app/components/ProjectBox";
import DirectoryList from "@/app/components/DirectoryList";
import Reveal from "@/app/components/Reveal";
import {
  featuredWork,
  secondaryWork,
  moreProjects,
} from "@/app/lib/projectData";

// homepage: hero → featured work → secondary work → more projects → contact.
// /work redirects here. craft lives at electrocute lab; blogs live in the lab flyout.
//
// section marks perform their tier instead of naming it — checkmark draws
// in, stitch draws in, magnet follows the cursor. sr-only text carries the
// real label for screen readers.

// pill colors are tied to category identity site-wide (matcha = code,
// wisteria = electronics, lilac = design) — map by name, not render order.
const MORE_CATEGORY_ORDER = ["code", "design", "electronics"];
const PILL_STYLE = { code: 1, design: 3, electronics: 2 };

// curated slice of the résumé skills, colored using the same category
// tokens as elsewhere.
const SKILLS = [
  { label: "React", cat: "code" },
  { label: "Next.js", cat: "code" },
  { label: "TypeScript", cat: "code" },
  { label: "JavaScript", cat: "code" },
  { label: "p5.js", cat: "code" },
  { label: "Computational Text", cat: "code" },
  { label: "Figma", cat: "design" },
  { label: "Design Systems", cat: "design" },
  { label: "UX/UI", cat: "design" },
  { label: "Interaction Design", cat: "design" },
  { label: "Digital Accessibility", cat: "design" },
  { label: "Arduino", cat: "electronics" },
  { label: "Raspberry Pi", cat: "electronics" },
  { label: "Physical Computing", cat: "electronics" },
  { label: "E-Textiles", cat: "electronics" },
  { label: "Fabrication", cat: "electronics" },
];

// dashed circuit trace with a pulse traveling along it (CSS offset-path) —
// current flowing through a trace.
const SignalTrace = () => (
  <svg
    viewBox="0 0 60 44"
    fill="none"
    aria-hidden="true"
    className="signal-trace-svg"
  >
    <path
      d="M2 40 L2 24 L20 24 L20 8 L58 8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeDasharray="1 5"
      opacity="0.55"
    />
    <circle cx="2" cy="40" r="2.2" fill="currentColor" opacity="0.55" />
    <circle cx="58" cy="8" r="2.2" fill="currentColor" opacity="0.55" />
    <circle className="signal-pulse" r="2.6" fill="currentColor" />
  </svg>
);

// dot that drifts toward the cursor within a bounded field — capped
// travel distance so it never wanders far.
function MagnetDot() {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const MAX = 9;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const field = 90; // px radius the dot responds within
      if (dist > field) {
        setPos({ x: 0, y: 0 });
        return;
      }
      const pull = 1 - dist / field;
      setPos({
        x: Math.max(-MAX, Math.min(MAX, dx * pull * 0.3)),
        y: Math.max(-MAX, Math.min(MAX, dy * pull * 0.3)),
      });
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <span className="magnet-field" ref={ref} aria-hidden="true">
      <span
        className="magnet-dot"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      />
    </span>
  );
}

// checkmark that draws itself on first scroll into view. sr-only
// text carries the real label for screen readers.
function SelectedMark() {
  const ref = useRef(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <h2 className="selected-mark-heading" ref={ref}>
      <span className="sr-only">featured work</span>
      <svg
        viewBox="0 0 28 28"
        aria-hidden="true"
        className={`selected-mark-check ${drawn ? "is-drawn" : ""}`}
      >
        <circle cx="14" cy="14" r="12" fill="none" strokeWidth="1.6" />
        <path d="M8 14.5 L12 18.5 L20 9.5" fill="none" strokeWidth="2" />
      </svg>
      <span aria-hidden="true" className="selected-mark-label">
        work
      </span>
    </h2>
  );
}

// running-stitch line that draws itself on scroll into view — same
// pattern as SelectedMark. extends the duality-stitch motif from the hero.
function StitchMark() {
  const ref = useRef(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <h2 className="stitch-mark-heading" ref={ref}>
      <span className="sr-only">also</span>
      <svg
        viewBox="0 0 120 12"
        aria-hidden="true"
        className={`stitch-mark-line ${drawn ? "is-drawn" : ""}`}
      >
        <path
          d="M2 6 L118 6"
          fill="none"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="6 5"
        />
      </svg>
    </h2>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const categories = useMemo(() => {
    const present = new Set(moreProjects.map((p) => p.category));
    return MORE_CATEGORY_ORDER.filter((c) => present.has(c));
  }, []);

  const handlePillClick = (cat) => {
    if (activeCategory === cat) {
      setIsDrawerOpen((v) => !v);
    } else {
      setActiveCategory(cat);
      setIsDrawerOpen(true);
    }
  };
  const handleCloseDrawer = () => setIsDrawerOpen(false);

  const drawerItems = activeCategory
    ? moreProjects.filter((p) => p.category === activeCategory)
    : [];

  const isDrawerScrollable = drawerItems.length > 2;

  return (
    <div className="home-page">
      <section className="home-claim-wrap">
        <div className="home-hero-flower">
          <Image
            src="/assets/flower-logo.png"
            alt="Yafira's flower mark"
            width={340}
            height={340}
            priority
            style={{ objectFit: "contain", mixBlendMode: "multiply" }}
          />
        </div>
        <h1 className="home-claim">
          i&apos;m <span className="hero-name-accent">yafira</span>, a design
          engineer and creative technologist building <CycleWord />.
        </h1>
        <p className="home-proof">
          NYU ITP · electrocute-ui on npm · 22+ tools at tinytinker.tools · open
          hardware summit berlin fellow
        </p>
        <div className="duality-strip" aria-label="design, code, hardware">
          <span className="duality-item">
            <img src="/assets/design.png" alt="" />
            design
          </span>
          <span className="duality-stitch" aria-hidden="true" />
          <span className="duality-item">
            <img src="/assets/code.png" alt="" />
            code
          </span>
          <span className="duality-stitch" aria-hidden="true" />
          <span className="duality-item">
            <img src="/assets/circuit.png" alt="" />
            hardware
          </span>
        </div>
        <ul className="skills-strip" aria-label="core skills">
          {SKILLS.map((s) => (
            <li key={s.label} className="skill-chip" data-cat={s.cat}>
              {s.label}
            </li>
          ))}
        </ul>
      </section>

      {/* tier 1 — full cards, always-visible links, expandable process reveal. */}
      <div className="index-block">
        <span className="section-mark mark-signal" aria-hidden="true">
          <SignalTrace />
        </span>
        <SelectedMark />
        <div className="projects-grid featured">
          {featuredWork.map((project) => (
            <ProjectBox
              key={project.title}
              {...project}
              category={project.category}
              showLinksAlways
            />
          ))}
        </div>
      </div>

      {/* tier 2 — same cards, compact sizing. */}
      <div className="index-block">
        <StitchMark />
        <div className="projects-grid secondary">
          {secondaryWork.map((project) => (
            <ProjectBox
              key={project.title}
              {...project}
              category={project.category}
              showLinksAlways
              compact
            />
          ))}
        </div>
      </div>

      <div className="index-block">
        <span className="section-mark mark-magnet" aria-hidden="true">
          <MagnetDot />
        </span>
        <h2 className="work-section-heading work-more-heading">
          <span className="sr-only">more projects</span>
        </h2>

        {/* light/dark: filter pills + drawer. reader mode hides this via CSS. */}
        <div className="drawer-mode-projects">
          <div
            className="work-filter-row"
            role="tablist"
            aria-label="more projects by category"
          >
            {categories.map((cat) => {
              const count = moreProjects.filter(
                (p) => p.category === cat,
              ).length;
              const isActive = activeCategory === cat && isDrawerOpen;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`work-filter-pill work-filter-pill-${PILL_STYLE[cat] ?? 0} ${isActive ? "active" : ""}`}
                  onClick={() => handlePillClick(cat)}
                >
                  {cat} <span className="pill-count">({count})</span>
                </button>
              );
            })}
          </div>

          {activeCategory && isDrawerOpen && (
            <div className="more-drawer" data-section={activeCategory}>
              <button
                className="more-drawer-close"
                onClick={handleCloseDrawer}
                aria-label="close"
              >
                <ChevronDown />
              </button>
              <div
                className={`more-drawer-grid ${isDrawerScrollable ? "scrollable" : ""}`}
              >
                {drawerItems.map((item, i) => (
                  <Reveal key={item.title} delay={Math.min(i * 60, 300)}>
                    <ProjectBox
                      {...item}
                      category={item.category}
                      showLinksAlways
                      compact
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* reader mode: flat directory list, hidden outside reader mode via CSS. */}
        <div className="directory-mode-projects">
          <DirectoryList projects={moreProjects} order={MORE_CATEGORY_ORDER} />
        </div>
      </div>

      <section className="home-contact">
        <p className="home-contact-line">
          currently looking for design engineering &amp; creative technologist
          roles{" "}
          <span className="contact-inkbloom" aria-hidden="true">
            <Inkbloom />
          </span>
        </p>
        <div className="home-hero-cta">
          <Link href="/contact" className="link-btn primary">
            <span>get in touch</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/cv" className="link-btn">
            view cv
          </Link>
        </div>
      </section>
    </div>
  );
}
