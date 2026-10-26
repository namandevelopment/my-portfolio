import { Col } from "react-bootstrap";
import { BoxArrowUpRight, Check2 } from "react-bootstrap-icons";

export const ProjectCard = ({
  title,
  subtitle,
  scale,
  description,
  bullets = [],
  tags = [],
  url,
  urlLabel = "View Application",
  imgUrl,
  featured = false
}) => {
  const handleClick = () => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Col xs={12} lg={featured ? 6 : 4} className="mb-4">
      <div className={`project-card-box ${featured ? 'featured-card' : ''}`}>
        {scale && (
          <div className="project-scale-badge">
            <span>{scale}</span>
          </div>
        )}

        <div className="project-card-header">
          {subtitle && <span className="project-subtitle">{subtitle}</span>}
          <h3 className="project-title">{title}</h3>
        </div>

        <p className="project-description">{description}</p>

        {bullets && bullets.length > 0 && (
          <ul className="project-bullets">
            {bullets.map((bullet, idx) => (
              <li key={idx}>
                <Check2 size={15} className="bullet-check" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {tags && tags.length > 0 && (
          <div className="project-tags">
            {tags.map((tag, idx) => (
              <span key={idx} className="project-tag-pill">{tag}</span>
            ))}
          </div>
        )}

        {url && url !== "#" && (
          <div className="project-card-footer mt-3">
            <button className="project-link-btn" onClick={handleClick}>
              <span>{urlLabel}</span>
              <BoxArrowUpRight size={14} className="ms-1" />
            </button>
          </div>
        )}
      </div>
    </Col>
  );
};
