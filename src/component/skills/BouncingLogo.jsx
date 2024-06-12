// src/components/bouncing-logos/BouncingLogos.jsx
import React, { useEffect, useRef } from "react";
import "./skills.css";
import logo1 from "../../asset/flutter.png";
import logo2 from "../../asset/flutter.png";
import logo3 from "../../asset/flutter.png";
import logo4 from "../../asset/flutter.png";
import logo5 from "../../asset/flutter.png";

const BouncingLogos = () => {
  const containerRef = useRef(null);
  const logosRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const logos = logosRef.current;
    const speed = 1;
    const directions = logos.map(() => ({
      x: Math.random() < 0.5 ? speed : -speed,
      y: Math.random() < 0.5 ? speed : -speed,
    }));

    const moveLogos = () => {
      logos.forEach((logo, index) => {
        const { left, top } = logo.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        if (
          left <= containerRect.left ||
          left + logo.offsetWidth >= containerRect.right
        ) {
          directions[index].x = -directions[index].x;
        }
        if (
          top <= containerRect.top ||
          top + logo.offsetHeight >= containerRect.bottom
        ) {
          directions[index].y = -directions[index].y;
        }

        logo.style.left = `${
          left + directions[index].x - containerRect.left
        }px`;
        logo.style.top = `${top + directions[index].y - containerRect.top}px`;
      });

      requestAnimationFrame(moveLogos);
    };

    moveLogos();
  }, []);

  return (
    <div className="skilllogo-container" ref={containerRef}>
      {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Logo ${index + 1}`}
          className="logo"
          ref={(el) => (logosRef.current[index] = el)}
          style={{
            left: `${Math.random() * 600}px`,
            top: `${Math.random() * 100}px`,
          }}
        />
      ))}
    </div>
  );
};

export default BouncingLogos;
