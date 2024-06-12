// src/components/footer/Footer.jsx
import React, { useEffect } from "react";
import "./footer.css";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/twitter";
import "react-social-icons/email";
import "react-social-icons/whatsapp";
import "react-social-icons/telegram";

const Footer = () => {
   useEffect(() => {
     // JavaScript to dynamically update the current year
     const yearSpan = document.getElementById("current-year");
     if (yearSpan) {
       yearSpan.textContent = new Date().getFullYear();
     }
   }, []);
  return (
    <footer className="footer">
      <div className="footer-social">
        Contact me:
        <SocialIcon
          network="email"
          target="_blank"
          rel="noopener noreferrer"
          url="mailto:morkaj360@gmail.com"
          fgColor="white"
          bgColor="none"
          // href="https://github.com/MJdugule"
        />
        <SocialIcon
          network="whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          url="https://wa.me/+2348130652995"
          fgColor="white"
          bgColor="none"
          // href="https://github.com/MJdugule"
        />
        <SocialIcon
          network="telegram"
          target="_blank"
          rel="noopener noreferrer"
          url="https://t.me/Slasher56"
          fgColor="white"
          bgColor="none"
          // href="https://github.com/MJdugule"
        />
      </div>
      {/* <SocialIcon url="www.facebook.com" /> */}
      {/* <div className="footer-social-icons"> */}
      {/* <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubLogo} alt="Github" />
        </a>
        <a
          href="www.linkedin.com/in/donmj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitterLogo} alt="Twitter" />
        </a>
        <a
          href="https://linkedin.com/in/donmj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinLogo} alt="LinkedIn" />
        </a> */}
      {/* </div> */}
      <hr></hr>
      <div className="footer-social">
        <SocialIcon
          network="github"
          target="_blank"
          rel="noopener noreferrer"
          url="https://github.com/MJdugule"
          fgColor="white"
          bgColor="none"
          // href="https://github.com/MJdugule"
        />
        <SocialIcon
          network="linkedin"
          target="_blank"
          rel="noopener noreferrer"
          url="https://linkedin.com/in/donmj"
          fgColor="white"
          bgColor="none"
          // href="https://github.com/MJdugule"
        />
        <SocialIcon
          network="twitter"
          target="_blank"
          rel="noopener noreferrer"
          url="https://x.com/morka_j"
          fgColor="white"
          bgColor="none"
          // href="https://github.com/MJdugule"
        />
      </div>
      <div className="footer-text">
        <p>
          &copy; <span id="current-year"></span> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
