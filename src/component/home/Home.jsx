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
            Hello I am <strong>Morka Joshua</strong>, an experienced mobile app
            developer passionate about using technology to solve real-world
            problems. Proficient in Flutter and Kotlin programming languages,
            with 3 years of experience working with teams to develop successful
            mobile applications.
          </p>
          <a
            href="https://drive.google.com/file/d/1jrxxe0K3X3mPt6IGQ-kuXVZdQZVU7Dee/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="home-cv"
              // onClick="https://drive.google.com/file/d/1rZE2Gg_l_CE7boDzCeO-r-NDhqYNG1EW/view"
            >
              View CV
            </button>
          </a>

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
