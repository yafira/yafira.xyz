import Link from "next/link";
import Image from "next/image";

// a small chevron for the category disclosure toggle — rotates via
// CSS based on the parent <details>'s [open] state.
const Chevron = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
    className="directory-group-chevron"
  >
    <path
      d="M3 4.5 L6 7.5 L9 4.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// a plain rightward arrow — replaces the "→" character, which on
// mobile gets rendered by the system emoji font instead of as plain
// text. Same fix as ProjectBox's ArrowUpRight, applied here for
// consistency across every arrow in reader mode's directory view.
const ArrowRight = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M2 6 H10 M6.5 2.5 L10 6 L6.5 9.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Category label colors follow the same convention used elsewhere
// on the site (matcha = code, lilac = design, wisteria = electronics).
const CATEGORY_LABEL = {
  code: "code",
  design: "design",
  electronics: "electronics",
};

// Projects link out two ways in this data: a plain `link` string
// (the electronics cluster), or a `links` object with named keys
// like { web, demo, casestudy, code, npm }. This picks whichever
// key reads as the most "primary" destination when there's a
// choice, falling back to whatever key exists first.
const LINK_PRIORITY = [
  "web",
  "demo",
  "prototype",
  "mobile",
  "casestudy",
  "code",
  "npm",
  "blog",
];

function firstLink(project) {
  if (project.link) return { href: project.link };
  if (project.links) {
    for (const key of LINK_PRIORITY) {
      if (project.links[key]) return { href: project.links[key] };
    }
    const values = Object.values(project.links);
    if (values.length > 0) return { href: values[0] };
  }
  return null;
}

export default function DirectoryList({ projects, order }) {
  const categories = order.filter((cat) =>
    projects.some((p) => p.category === cat),
  );

  return (
    <div className="directory-list">
      {categories.map((cat) => {
        const items = projects.filter((p) => p.category === cat);
        return (
          <details className="directory-group" key={cat}>
            <summary className="directory-group-label" data-cat={cat}>
              {CATEGORY_LABEL[cat] ?? cat}
              <span className="directory-group-count">({items.length})</span>
              <Chevron />
            </summary>
            {items.map((project) => {
              const link = firstLink(project);
              const row = (
                <>
                  {project.imageUrl && (
                    <div className="directory-row-thumb">
                      <Image
                        src={project.imageUrl}
                        alt=""
                        width={88}
                        height={88}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  )}
                  <div className="directory-row-text">
                    <p className="directory-row-title">{project.title}</p>
                    {project.description && (
                      <p className="directory-row-desc">
                        {project.description}
                      </p>
                    )}
                    <div className="directory-row-meta">
                      {project.stack && (
                        <span className="directory-row-stack">
                          {project.stack}
                        </span>
                      )}
                      {Array.isArray(project.tags) &&
                        project.tags.length > 0 && (
                          <span className="directory-row-tags">
                            {project.tags.slice(0, 2).join(" · ")}
                          </span>
                        )}
                    </div>
                  </div>
                  <span className="directory-row-arrow" aria-hidden="true">
                    <ArrowRight />
                  </span>
                </>
              );

              return link ? (
                <Link
                  key={project.title}
                  href={link.href}
                  target={link.href?.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href?.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="directory-row"
                >
                  {row}
                </Link>
              ) : (
                <div className="directory-row" key={project.title}>
                  {row}
                </div>
              );
            })}
          </details>
        );
      })}
    </div>
  );
}
