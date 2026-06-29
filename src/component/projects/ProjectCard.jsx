import React from "react";
import "./projectcard.css";

const ProjectCard = ({title, description, androidLink, iosLink, imageSrc }) => {
  const hasAndroidLink = Boolean(androidLink);
  const hasIosLink = Boolean(iosLink);

  return (
    <div className="project-card">
      <div className="project-card-title">{title}</div>
      <p className="project-card-description">{description}</p>
      {(hasAndroidLink || hasIosLink) && (
        <div className="project-card-links">
          {hasAndroidLink && (
            <a
              href={androidLink}
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Android App
            </a>
          )}
          {hasIosLink && (
            <a
              href={iosLink}
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              iOS App
            </a>
          )}
        </div>
      )}
      <div className="spacer"></div>
      <div className="project-card-image">
        <img src={imageSrc} alt="" />
      </div>
    </div>
  );
};

export default ProjectCard;
