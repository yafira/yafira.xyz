"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import { isEmbeddable } from "./IframePanel";
import styles from "./ProjectBox.module.css";

const IframePanel = dynamic(() => import("./IframePanel"), { ssr: false });

const ProjectBox = ({
  title,
  imageUrl,
  link,
  description,
  links,
  category,
  showLinksAlways = false,
  badge,
}) => {
  const [panelUrl, setPanelUrl] = useState(null);

  const isDesign =
    category === "design" || (links && Object.keys(links).length > 0);

  const handleClick = (e, url) => {
    if (!url) return;
    if (isEmbeddable(url)) {
      e.preventDefault();
      setPanelUrl(url);
    }
  };

  const primaryLink =
    link ||
    (links
      ? Object.values(links).find(
          (v) => typeof v === "string" && v.startsWith("http"),
        )
      : null);
  const showLaunchBtn = primaryLink && category !== "text";

  const panel =
    panelUrl && typeof document !== "undefined"
      ? createPortal(
          <IframePanel
            url={panelUrl}
            title={title}
            onClose={() => setPanelUrl(null)}
          />,
          document.body,
        )
      : null;

  return (
    <>
      <div
        className={`project-box line-box ${isDesign ? "design-project" : ""} ${styles.card}`}
        data-category={category}
      >
        {isDesign ? (
          <>
            <a
              href={link ?? "#"}
              target={link && !isEmbeddable(link) ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="box-content"
              style={{ textDecoration: "none" }}
              onClick={(e) => handleClick(e, link)}
            >
              {badge && (
                <span className={`project-badge ${badge}`}>{badge}</span>
              )}
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
                      target={!isEmbeddable(url) ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="project-link button-link"
                      onClick={(e) => handleClick(e, url)}
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
            target={link && !isEmbeddable(link) ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`box-content ${category === "text" ? "text-only" : ""}`}
            style={{ textDecoration: "none", background: "transparent" }}
            onClick={(e) => handleClick(e, link)}
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
          </a>
        )}

        {showLaunchBtn && (
          <button
            className={styles.launchBtn}
            onClick={(e) => {
              e.stopPropagation();
              handleClick(e, primaryLink);
            }}
            aria-label={`open ${title}`}
          >
            ↗
          </button>
        )}
      </div>

      {panel}
    </>
  );
};

export default ProjectBox;
