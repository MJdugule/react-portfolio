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
              <strong>Programming Languages: </strong>Flutter, Dart, Kotlin, Swift, JavaScript, Node.js, TypeScript, Python, Java, C, C++, .NET/ASP.NET Core.<span></span>
            </ol>
            <ol>
              <strong>State Management: </strong> Provider, Stacked, Riverpod, Bloc, GetX.
            </ol>
            <ol>
              <strong>Data & System Design: </strong>Data Structures, Postgres, MongoDb, Relational and NoSQL data modelling, Redis, Local Storage, Data Caching, Offline-First Architecture, Background Synchronisation.
            </ol>
            <ol>
              <strong>DevOps & Tools: </strong>CI/CD, GitHub Actions, AWS, Docker, Azure, Shorebird, Git, GitHub, Bitbucket, Postman, Firebase Crashlytics, Jira, Confluence, Figma.
            </ol>
            <ol>
            <strong>Ways of Working: </strong>Agile, Scrum, Technical Ownership, Cross-functional Collaboration, Team Leadership.
            </ol>
            <ol>
              <strong>APIs & Integrations: </strong>REST APIs, GraphQL, JSON, Third-party Integrations, Authentication, OAuth, WebSockets, Data Streams, vector search concepts, Error Handling.
            </ol>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
