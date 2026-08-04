"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";
import { isEmbeddable } from "./IframePanel";
import styles from "./ProjectBox.module.css";

const IframePanel = dynamic(() => import("./IframePanel"), { ssr: false });

// a plain outward arrow, used instead of the "↗" character — on
// mobile (iOS/Android), that Unicode glyph gets rendered by the
// system's colored emoji font instead of as plain text, which broke
// reader mode's fully-monochrome goal. An inline SVG using
// currentColor can't be hijacked by an emoji font, so it renders
// consistently everywhere, in every theme.
const ArrowUpRight = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
    style={{
      display: "inline-block",
      marginLeft: "3px",
      verticalAlign: "-0.5px",
    }}
  >
    <path
      d="M2 8 L8 2 M3.4 2 H8 V6.6"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
//
// reader mode: every link (thumbnail + corner links) falls back to
// plain new-tab navigation, same as DirectoryList — no IframePanel
// overlay. Reader mode's whole premise is predictability over
// cleverness (no motion, no custom overlays), so the in-page preview
// panel is skipped there regardless of whether a URL is embeddable.
// Detected directly off <html data-theme="accessible">, the same
// attribute the CSS itself keys off of — no theme context needed.
// A MutationObserver keeps this in sync if theme is toggled without
// a full page reload.

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
  const [isReaderMode, setIsReaderMode] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 640px)").matches);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const updateReaderMode = () => {
      setIsReaderMode(document.documentElement.dataset.theme === "accessible");
    };
    updateReaderMode();

    const observer = new MutationObserver(updateReaderMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (e, url) => {
    if (!url) return;
    if (isMobile) return;
    if (isReaderMode) return; // let the link navigate normally, no overlay
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
        target:
          isReaderMode || !isEmbeddable(primaryLink) ? "_blank" : undefined,
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
              {tags.slice(0, 3).map((t) => (
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
                target={
                  isReaderMode || !isEmbeddable(url) ? "_blank" : undefined
                }
                rel="noopener noreferrer"
                className={styles.linkPill}
                aria-label={`${title} — ${String(key).toLowerCase()}`}
                onClick={(e) => handleClick(e, url)}
              >
                {String(key).toLowerCase()} <ArrowUpRight />
              </a>
            ))}
          </div>
        )}
      </div>

      {!isReaderMode && panel}
    </>
  );
};

export default ProjectBox;
