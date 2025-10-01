import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  const card = (
    <div className="proj-imgbx">
      <img src={imgUrl} alt={`${title} screenshot`} />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );

  return (
    <Col size={12} sm={6} md={4}>
      {url ? (
        <a className="project-link" href={url} target="_blank" rel="noreferrer">
          {card}
        </a>
      ) : (
        card
      )}
    </Col>
  );
};
