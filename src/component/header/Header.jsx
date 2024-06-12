import React from 'react';
import "./header.css"
import linkedinLogo from '../../asset/flutter.png'
// import gitLogo from '../../asset/github.png'
import backgroundImage from "../../asset/flutterHead.jpg";

const Header = () => {
  return (
    <div className="header-container">
      <img src={backgroundImage} alt="Background" className="header-bg" />

        <div className="header-content">
          <h1>Your Mobile App Developer</h1>
          <p>Let's build the next inspiring product together.</p>
        </div>
        <div className="logos">
          <div className="logo-container">
            <img src={linkedinLogo} alt="LinkedIn Logo" className="logo" />
          </div>

          {/* <div className="logo-container">
            <img src={gitLogo} alt="Github Logo" className="logo" />
          </div> */}
        </div>
    
    </div>
  );
};

export default Header;