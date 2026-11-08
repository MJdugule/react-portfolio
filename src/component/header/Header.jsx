import React, { useEffect, useState } from 'react';
import "./header.css"
import linkedinLogo from '../../asset/flutter.png'
import gitLogo from '../../asset/github.png'
import backgroundImage from "../../asset/flutterHead.jpg";

const headlines = [
  "Let's build the next inspiring product together.",
  "Mobile Engineer",
  "Backend Developer",
  "Frontend Developer",
];

const Header = () => {
  const [displayedHeadline, setDisplayedHeadline] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayedHeadline(headlines[0]);
      return;
    }

    let headlineIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeHeadline = () => {
      const headline = headlines[headlineIndex];

      if (isDeleting) {
        characterIndex -= 1;
        setDisplayedHeadline(headline.slice(0, characterIndex));

        if (characterIndex === 0) {
          isDeleting = false;
          headlineIndex = (headlineIndex + 1) % headlines.length;
        }
      } else {
        characterIndex += 1;
        setDisplayedHeadline(headline.slice(0, characterIndex));

        if (characterIndex === headline.length) {
          isDeleting = true;
          timeoutId = window.setTimeout(typeHeadline, 1600);
          return;
        }
      }

      timeoutId = window.setTimeout(typeHeadline, isDeleting ? 45 : 85);
    };

    timeoutId = window.setTimeout(typeHeadline, 85);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="header-container">
      <img src={backgroundImage} alt="Background" className="header-bg" />

        <div className="header-content">
          <h1 >
            <span aria-hidden="true">Software Engineer | Building Products That Scales</span>
            {/* <span className="typing-cursor" aria-hidden="true" /> */}
          </h1>
          <p>
            <span aria-hidden="true">{displayedHeadline}</span>
          <span className="typing-cursor" aria-hidden="true"/>
          </p>
          
        </div>
        <div className="logos">
          <div className="logo-container">
            <img src={linkedinLogo} alt="LinkedIn Logo" className="logo" />
          </div>

          <div className="logo-container">
            <img src={gitLogo} alt="Github Logo" className="logo" />
          </div>
        </div>
    
    </div>
  );
};

export default Header;