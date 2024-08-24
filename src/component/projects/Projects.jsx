// src/components/project-page/ProjectPage.jsx
import React, { useState } from "react";
import ProjectCard from "../projects/ProjectCard";
import "./projects.css";
// import googleSearchImage from "../../asset/containers.png";
import peersapp from "../../asset/peersapp.png";
import warelogtech from "../../asset/warelogtech.png";
import speakbetter from "../../asset/speakbetter.png";
import repairHome from "../../asset/repair.png";
import explore from "../../asset/explore.png";
import weather from "../../asset/weather.png";
import perry from "../../asset/perry.png";

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
    link: "https://drive.google.com/file/d/1tTj67iD_JDXn1K_I0rjXOywDBwELS7br/view",
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
    title: "PerryPay",
    description:
      "A mobile app user where users can buy and sell crypto currency, gift cards,airtime and data, and chat with agents",
    link: "https://drive.google.com/file/d/1Nd0CORqy7Ep0ax-zhyLYVHpfYS7BBJOU/view?usp=sharing",
    imageSrc: perry,
  },
  {
    title: "Explore",
    description:
      "A mobile app thhat gets the details from all the country in the world, using a open source country API",
    link: "https://drive.google.com/file/d/1k28Gm89Wt8_WugXxjBSRqYIOjReBVwk6/view",
    imageSrc: explore,
  },
  {
    title: "Weather App",
    description:
      "A weather app that gets the current weather data for specific locations and displays the data based on selected locations",
    link: "https://drive.google.com/file/d/1hL74c04-i9qiUAGRV-ObFinLG6skT_SX/view",
    imageSrc: weather,
  },
  {
    title: "Repair Home",
    description: "A simple UI design for a repair management app",
    link: "https://github.com/MJdugule/Group-61-capstone2",
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