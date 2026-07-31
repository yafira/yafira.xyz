"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import { isEmbeddable } from "./IframePanel";
import styles from "./ProjectBox.module.css";

const IframePanel = dynamic(() => import("./IframePanel"), { ssr: false });

// card redesign: thumbnail fills the card top edge-to-edge with a
// category tag floating on it, hairline border + shadow instead of
// the old .line-box 3px border, description clamped to 2 lines, and
// tags/links merged into a single meta row instead of three stacked
// rows. same props and embeddable-link/IframePanel behavior as before.
//
// note: deliberately does NOT include "line-box" in its class list —
// that class still carries a leftover `border: solid 3px` from the
// old flower-network feature, which is what was drawing the thick
// black border. project-box alone is enough for this component.

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
  compact = false,
}) => {
  const [panelUrl, setPanelUrl] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 640px)").matches);
  }, []);

  const handleClick = (e, url) => {
    if (!url) return;
    if (isMobile) return;
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

  const linkEntries = links
    ? Object.entries(links).filter(([k]) => k !== "description")
    : link
      ? [["view", link]]
      : [];

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

  // render as a real link only when there's somewhere to go — otherwise
  // a plain, non-focusable wrapper so it doesn't eat a tab stop
  const ThumbTag = primaryLink ? "a" : "div";
  const thumbLinkProps = primaryLink
    ? {
        href: primaryLink,
        target: !isEmbeddable(primaryLink) ? "_blank" : undefined,
        rel: "noopener noreferrer",
        onClick: (e) => handleClick(e, primaryLink),
      }
    : {};

  return (
    <>
      <div
        className={`project-box ${styles.card}`}
        data-category={category}
        data-compact={compact ? "true" : undefined}
      >
        {imageUrl ? (
          <ThumbTag className={styles.thumb} {...thumbLinkProps}>
            <img src={imageUrl} alt={title} className={styles.thumbImg} />
            <span className={styles.catTag}>{category}</span>
            {badge && (
              <span className={`project-badge ${badge} ${styles.badgeOverlay}`}>
                {badge}
              </span>
            )}
          </ThumbTag>
        ) : (
          <ThumbTag
            className={`${styles.thumb} ${styles.thumbPlaceholder}`}
            {...thumbLinkProps}
          >
            <span className={styles.catTag}>{category}</span>
            {badge && (
              <span className={`project-badge ${badge} ${styles.badgeOverlay}`}>
                {badge}
              </span>
            )}
          </ThumbTag>
        )}

        <div className={styles.body}>
          <h3 className={styles.title}>{title}</h3>
          {(description || links?.description) && (
            <p className={styles.desc}>{description || links.description}</p>
          )}

          {stack && (
            <div className={styles.metaRow}>
              <span className={styles.stack}>{stack}</span>
            </div>
          )}

          {Array.isArray(tags) && tags.length > 0 && (
            <div className={styles.tagRow}>
              {tags.map((t) => (
                <span key={t} className={styles.tag}>
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {linkEntries.length > 0 && (
          <div
            className={`${styles.cornerLinks} ${showLinksAlways ? "" : styles.linksHoverOnly}`}
          >
            {linkEntries.map(([key, url]) => (
              <a
                key={key}
                href={url}
                target={!isEmbeddable(url) ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={styles.linkPill}
                aria-label={`${title} — ${String(key).toLowerCase()}`}
                onClick={(e) => handleClick(e, url)}
              >
                {String(key).toLowerCase()} ↗
              </a>
            ))}
          </div>
        )}
      </div>

      {panel}
    </>
  );
};

export default ProjectBox;
