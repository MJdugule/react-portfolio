// src/components/project-page/ProjectPage.jsx
import React, { useState } from "react";
import ProjectCard from "../projects/ProjectCard";
import "./projects.css";
// import googleSearchImage from "../../asset/containers.png";
import peersapp from "../../asset/peersapp.png";
import warelogtech from "../../asset/warelogtech.png";
import speakbetter from "../../asset/speakbetter.png";
import repairHome from "../../asset/repair.png";

const initialProjects = [
  {
    title: "PeersApp",
    description:
      "PeersApp provides a built-in reading platform where users can comfortably read books within the application itself.",
    link: "https://play.google.com/store/apps/details?id=com.peersapp.mobile.peersapp_mobile",
    imageSrc: peersapp,
  },
  {
    title: "WareLogTech",
    description:
      "Warelogtech enables you to effortlessly book apartments, warehouses, and trucks from the comfort of your home. ",
    link: "#",
    imageSrc: warelogtech,
  },
  {
    title: "Speak Better",
    description:
      "An AI-powered grammar checker designed to check and correct grammar for multiple languages",
    link: "https://drive.google.com/file/d/1uo-kgAuFeU19lH-1U1VKTHAUk1hbBHgd/view?usp=drivesdk",
    imageSrc: speakbetter,
  },
];

const moreProjects = [
  {
    title: "Repair Home",
    description: "Discover the newly reimagined Chrome Web Store.",
    link: "https://github.com/MJdugule/Group-61-capstone2",
    imageSrc: repairHome,
  },
  {
    title: "MindPal",
    description: "More features description.",
    link: "#",
    imageSrc: repairHome,
  },
  // {
  //   title: "November 2023",
  //   description: "Even more features description.",
  //   link: "#",
  //   imageSrc: googleSearchImage,
  // },
];

const Project = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    setProjects([...projects, ...moreProjects]);
    setShowMore(true);
  };
  
  const handleViewLess = () => {
    setProjects(initialProjects);
    setShowMore(false);
  };

  return (
    <div className="project-page">
      <h2>Projects</h2>
      <div className="project-page-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      {!showMore && (
        <button className="project-page-view-more" onClick={handleViewMore}>
          View more
        </button>
      )} 
      
       {showMore && (
        <button className="project-page-view-more" onClick={handleViewLess}>
          View less
        </button>
      )}
    </div>
  );
};

export default Project;