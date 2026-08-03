"use client";
import ProjectBox from "@/app/components/ProjectBox";

export default function ProjectsGrid({ projects }) {
  const grid = (
    <div className="projects-grid">
      {projects.map((project, i) => (
        <ProjectBox key={i} {...project} category={project.category} />
      ))}
    </div>
  );

  // scrolls horizontally instead of wrapping to an awkward extra row.
  if (projects.length > 3) {
    return <div className="projects-scroll-container">{grid}</div>;
  }

  return grid;
}
