// src/components/home/home.js
import React from "react";
import "./skills.css";
import kolin from "../../asset/kotlin.png"; // Make sure this path is correct
import nodejs from "../../asset/nodejs.png"; // Make sure this path is correct
import python from "../../asset/python.png"; // Make sure this path is correct
import flutter from "../../asset/fluttericon.png"; // Make sure this path is correct
import git from "../../asset/git.png"; // Make sure this path is correct
import github from "../../asset/github.png"; // Make sure this path is correct
import api from "../../asset/restapi.png"; // Make sure this path is correct
import bit from "../../asset/bit.png"; // Make sure this path is correct

const Skills = () => {
  return (
    <div className="skill-container">
      <div className="skill-content">
        <div class="skill-image">
          <div class="icon-row">
            <img src={kolin} alt="Icon 1" class="icon" />
            <img src={nodejs} alt="Icon 2" class="icon" />
            <img src={python} alt="Icon 3" class="icon" />
          </div>
          <div class="icon-row">
            <img src={github} alt="Icon 4" class="icon" />
            <img src={flutter} alt="Big Icon" class="big-icon" />
            <img src={bit} alt="Icon 5" class="icon" />
          </div>
          <div class="icon-row">
            <img src={git} alt="Icon 6" class="icon" />
            <img src={api} alt="Icon 7" class="icon" />
            {/* <img src="icon8.png" alt="Icon 8" class="icon" /> */}
          </div>
        </div>
        {/* <div className="home-image">
          <img src={googleSearchImage} alt="Google Search" />
        </div> */}
        <div className="skill-text">
          <span className="skill-tag">SKILLS</span>

          <div className="skill-title">
            <h2>Fast and proficient</h2>
          </div>

          <p>
            <ol>
              <strong>Programming Languages: </strong>Flutter, Dart, Kotlin,
              Nodejs, Python.<span></span>
            </ol>
            <ol>
              <strong>State Management: </strong> Provider, Stacked, Riverpod.
            </ol>
            <ol>
              <strong>Version Control: </strong>Git, Github, BitBucket.
            </ol>
            <ol>
            <strong>Developer Collaboration </strong>
            </ol>
            <ol>
              <strong>Leadership Skill </strong>
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
