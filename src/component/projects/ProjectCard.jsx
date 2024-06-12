import React from "react";
import "./projectcard.css";

const ProjectCard = ({title, description, link, imageSrc }) => {
  return (
    <div className="project-card">
      <div className="project-card-title">{title}</div>
      <p className="project-card-description">{description}</p>
      <a
        href={link}
        className="project-card-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View
      </a>
      <div className="project-card-image">
        <img src={imageSrc} alt="" />
      </div>
    </div>
  );
};

export default ProjectCard;
