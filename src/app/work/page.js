"use client";

import { useState, useMemo } from "react";
import "@/app/styles/globals.css";
import { selectedWork, moreProjects } from "@/app/lib/projectData";
import ProjectBox from "@/app/components/ProjectBox";
import WorkHero from "@/app/components/WorkHero";

const allProjects = [...selectedWork, ...moreProjects];
const featuredTitles = new Set(selectedWork.map((p) => p.title));

export default function WorkPage() {
  const [filter, setFilter] = useState("all");

  const categories = useMemo(() => {
    const seen = new Set(allProjects.map((p) => p.category));
    return ["all", ...seen];
  }, []);

  const filteredProjects = useMemo(() => {
    const matches =
      filter === "all"
        ? allProjects
        : allProjects.filter((p) => p.category === filter);
    // featured pieces sort first within whatever's currently shown,
    // so the curated work still leads without needing its own
    // separate, unfiltered section
    return [...matches].sort((a, b) => {
      const aFeatured = featuredTitles.has(a.title) ? 1 : 0;
      const bFeatured = featuredTitles.has(b.title) ? 1 : 0;
      return bFeatured - aFeatured;
    });
  }, [filter]);

  return (
    <div className="main-content work-page">
      <WorkHero />

      <div
        className="work-filter-row"
        role="tablist"
        aria-label="filter by category"
      >
        {categories.map((cat, i) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            className={`work-filter-pill work-filter-pill-${i} ${
              filter === cat ? "active" : ""
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid featured">
        {filteredProjects.map((project) => (
          <ProjectBox
            key={project.title}
            {...project}
            category={project.category}
            showLinksAlways
          />
        ))}
      </div>

      <footer className="work-footer">
        <a
          href="https://electrocute.io"
          target="_blank"
          rel="noopener noreferrer"
          className="link-btn electrocute"
        >
          more experiments at electrocute lab ↗
        </a>
      </footer>
    </div>
  );
}
