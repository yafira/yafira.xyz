"use client";

import { useState, useMemo } from "react";
import "@/app/styles/globals.css";
import { selectedWork, moreProjects } from "@/app/lib/projectData";
import ProjectBox from "@/app/components/ProjectBox";
import WorkHero from "@/app/components/WorkHero";

const allProjects = [...selectedWork, ...moreProjects];
const featuredTitles = new Set(selectedWork.map((p) => p.title));

// explicit pill order — previously the order was whatever sequence
// categories first appeared in the data, which put electronics
// before design. any category in the data but not listed here still
// shows up, appended at the end.
const CATEGORY_ORDER = ["all", "code", "design", "electronics"];

// pill color classes in globals.css are numbered, and the palette is
// tied to category identity (matcha = code, wisteria = electronics,
// lilac = design), so map by name instead of render index — otherwise
// reordering the pills would shuffle their colors
const PILL_STYLE = {
  all: 0,
  code: 1,
  electronics: 2,
  design: 3,
  craft: 4,
  text: 5,
};

export default function WorkPage() {
  const [filter, setFilter] = useState("all");

  const categories = useMemo(() => {
    const seen = new Set(allProjects.map((p) => p.category));
    const ordered = CATEGORY_ORDER.filter((c) => c === "all" || seen.has(c));
    const extras = [...seen].filter((c) => !CATEGORY_ORDER.includes(c));
    return [...ordered, ...extras];
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return null; // "all" renders the two sections below
    const matches = allProjects.filter((p) => p.category === filter);
    // featured pieces sort first within the filtered view, so the
    // curated work still leads even inside a single category
    return [...matches].sort((a, b) => {
      const aFeatured = featuredTitles.has(a.title) ? 1 : 0;
      const bFeatured = featuredTitles.has(b.title) ? 1 : 0;
      return bFeatured - aFeatured;
    });
  }, [filter]);

  const renderCards = (projects) =>
    projects.map((project) => (
      <ProjectBox
        key={project.title}
        {...project}
        category={project.category}
        showLinksAlways
      />
    ));

  return (
    <div className="main-content work-page">
      <WorkHero />

      <div
        className="work-filter-row"
        role="tablist"
        aria-label="filter by category"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            className={`work-filter-pill work-filter-pill-${PILL_STYLE[cat] ?? 0} ${
              filter === cat ? "active" : ""
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filter === "all" ? (
        <>
          <h2 className="work-section-heading">selected work</h2>
          <div className="projects-grid featured">
            {renderCards(selectedWork)}
          </div>

          <h2 className="work-section-heading work-more-heading">
            more projects
          </h2>
          <div className="projects-grid featured">
            {renderCards(moreProjects)}
          </div>
        </>
      ) : (
        <div className="projects-grid featured">
          {renderCards(filteredProjects)}
        </div>
      )}
    </div>
  );
}
