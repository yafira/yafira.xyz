"use client";

/* eslint-disable @next/next/no-img-element */
import styles from "./ProjectBox.module.css";

// note: the in-page preview window (IframePanel) has been removed from
// this component — all project links now open in a normal new tab, with
// the corner ↗ as the affordance. IframePanel.jsx itself is untouched
// on disk so it can be reused on electrocute.io later.

const ProjectBox = ({
  title,
  imageUrl,
  link,
  description,
  links,
  category,
  stack,
  tags,
  showLinksAlways = false,
  badge,
}) => {
  const isDesign =
    category === "design" || (links && Object.keys(links).length > 0);

  const primaryLink =
    link ||
    (links
      ? Object.values(links).find(
          (v) => typeof v === "string" && v.startsWith("http"),
        )
      : null);
  const showLaunchBtn = primaryLink && category !== "text";

  const metaBlock = (
    <>
      {stack && <p className="project-stack">{stack}</p>}
      {Array.isArray(tags) && tags.length > 0 && (
        <div className="project-tags">
          {tags.map((t) => (
            <span key={t} className="project-tag">
              {t}
            </span>
          ))}
        </div>
      )}
    </>
  );

  return (
    <div
      className={`project-box line-box ${isDesign ? "design-project" : ""} ${styles.card}`}
      data-category={category}
    >
      {isDesign ? (
        <>
          <a
            href={link ?? "#"}
            target={link ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="box-content"
            style={{ textDecoration: "none" }}
          >
            {badge && <span className={`project-badge ${badge}`}>{badge}</span>}
            <span className="box-text">{title}</span>
            <img
              src={imageUrl}
              alt={title}
              className="project-image"
              style={{ background: "transparent" }}
            />
          </a>
          {(description || links?.description) && (
            <p className="project-description">
              {description || links.description}
            </p>
          )}
          {metaBlock}
          {links && (
            <div
              className={`project-links design-links ${showLinksAlways ? "always-visible" : ""}`}
            >
              {Object.entries(links)
                .filter(([k]) => k !== "description")
                .map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link button-link"
                  >
                    {String(key).toUpperCase()}
                  </a>
                ))}
            </div>
          )}
        </>
      ) : (
        <a
          href={link ?? "#"}
          target={link ? "_blank" : undefined}
          rel="noopener noreferrer"
          className={`box-content ${category === "text" ? "text-only" : ""}`}
          style={{ textDecoration: "none", background: "transparent" }}
        >
          {badge && <span className={`project-badge ${badge}`}>{badge}</span>}
          <span className="box-text">{title}</span>
          {category !== "text" && imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="project-image"
              style={{ background: "transparent" }}
            />
          )}
          {category !== "text" && description && (
            <p className="project-description">{description}</p>
          )}
          {category !== "text" && metaBlock}
        </a>
      )}

      {showLaunchBtn && (
        <a
          className={styles.launchBtn}
          href={primaryLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`open ${title} in a new tab`}
        >
          ↗
        </a>
      )}
    </div>
  );
};

export default ProjectBox;
