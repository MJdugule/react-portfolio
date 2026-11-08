// src/components/home/home.js
import React from "react";
import "./home.css";
import googleSearchImage from "../../asset/aboutil.png"; // Make sure this path is correct

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <span className="home-tag">ABOUT ME</span>

          <div className="home-title">
            <h2>You can find me everywhere!</h2>
          </div>

          <p>
            Hello I am <strong>Morka Joshua</strong>, A Software Engineer with 6+ years of experience building and maintaining production-ready products across fintech, SaaS, e-commerce and AI-enabled applications. Works across the software lifecycle, from technical discovery and system design through backend services, web and mobile applications using .NET, JavaScript, TypeScript, Python, Node.js, Flutter, Dart, Kotlin, Swift, Java, React and React Native. Skilled in software architecture, Clean Architecture, state management, database design, offline-first systems, and performance optimisation. Comfortable collaborating with product, design and engineering teams and taking ownership of features through to release..
          </p>
          {/* <a
            href="https://drive.google.com/file/d/1Koh0b5qA2pfu-WfiZiNAAN3zxpDvzhD4/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="home-cv"
            // onClick="https://drive.google.com/file/d/1rZE2Gg_l_CE7boDzCeO-r-NDhqYNG1EW/view"
            >
              View CV
            </button>
          </a> */}

          {/* <ol>
            <li>
              Open a <strong>New tab</strong> <span>+</span>.
            </li>
            <li>
              Click the search box to see suggestions related to your previous
              searches.
            </li>
            <li>Click on the topics to view search results.</li>
          </ol> */}
        </div>
        <div className="home-image">
          <img src={googleSearchImage} alt="Google Search" />
        </div>
      </div>
    </div>
  );
};

export default Home;
