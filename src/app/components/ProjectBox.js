/* eslint-disable @next/next/no-img-element */
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
  const isDesign =
    category === "design" || (links && Object.keys(links).length > 0);

  // if a design card has a `link`, make the whole card clickable
  const DesignWrapper = link ? "a" : "div";

  return (
    <div
      className={`project-box line-box ${isDesign ? "design-project" : ""}`}
      data-category={category}
    >
      {isDesign ? (
        <>
          <DesignWrapper
            className="box-content"
            {...(link
              ? {
                  href: link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  style: { textDecoration: "none" },
                }
              : {})}
          >
            {badge && <span className={`project-badge ${badge}`}>{badge}</span>}
            <span className="box-text">{title}</span>

            <img
              src={imageUrl}
              alt={title}
              className="project-image"
              style={{ background: "transparent" }}
            />
          </DesignWrapper>

          {(description || links?.description) && (
            <p className="project-description">
              {description || links.description}
            </p>
          )}

          {links && (
            <div
              className={`project-links design-links ${
                showLinksAlways ? "always-visible" : ""
              }`}
            >
              {Object.entries(links)
                .filter(([key]) => key !== "description")
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
          href={link}
          target="_blank"
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
        </a>
      )}
    </div>
  );
};

export default ProjectBox;
