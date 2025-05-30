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
import perry from "../../asset/perrypay.png";
import mowo from "../../asset/mowo.png";
import cyclex from "../../asset/cyclex.png";
import paybond from "../../asset/paybond.png";
import milarn from "../../asset/milarn.png";
import cyclexAgent from "../../asset/cyclex_agent.png";

const initialProjects = [
  {
    title: "CycleX",
    description:
      "CycleX is a platform that helps users trade waste for cash, fostering a cleaner and greener environment.",
    link: "https://play.google.com/store/apps/details?id=com.cyclex.mobile",
    imageSrc: cyclex,
  },
  {
    title: "CycleX Agent",
    description:
      "CycleX Africa Agent is a platform that helps cyclex agent in collecting waste from various regions, and recycling it into valuable resources, fostering a cleaner and greener environment.",
    link: "https://play.google.com/store/apps/details?id=com.cyclex.agent",
    imageSrc: cyclexAgent,
  },
  {
    title: "Mowo Africa",
    description:
      "Mowo Africa is a platform designed to connect buyers and sellers seamlessly. It enables sellers to create stores, generate invoices, and receive payments, while buyers can easily discover stores, pay invoices, and redeem coupons. The platform also incorporates features like virtual accounts, referrals, notifications, and admin controls for verification and management.",
    link: "https://play.google.com/store/apps/details?id=com.mobile.mowo",
    imageSrc: mowo,
  },
  {
    title: "PerryPay",
    description:
      "A mobile app where users can have a seamless and engaging trading experience right at there fingertips. Dive into the world of cryptocurrencies, gift cards, and exclusive rewards with innovative features designed to cater to all trading needs where you can buy and sell crypto currency, gift cards, purchase airtime and data, and chat with agents",
    link: "https://play.google.com/store/apps/details?id=co.perrypays.app",
    imageSrc: perry,
  },
  {
    title: "Milarn",
    description:
      "Get paid when you need it! With Milarn EWA, employees can access their earned wages before payday—giving you financial flexibility and control over your money. No more waiting for your paycheck or relying on high-interest loans.",
    link: "https://play.google.com/store/apps/details?id=com.milarn.mobile&hl=en",
    imageSrc: milarn,
  },
  {
    title: "Pay Bond",
    description:
      "Pay Bond is a reliable, safe, and secure platform that allows you to buy airtime, mobile data, and make utility payments with ease and convenience.",
    link: "https://play.google.com/store/apps/details?id=com.paybond.paybondapp",
    imageSrc: paybond,
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
    title: "Explore",
    description:
      "A mobile app that gets the details from all the country in the world, using a open source country API",
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