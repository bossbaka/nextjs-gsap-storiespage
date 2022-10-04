import React, { useEffect } from "react";
import { gsap } from "gsap";

function HeroHeader() {
  useEffect(() => {
    gsap.fromTo(
      ".hero-text",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
      }
    );
  });
  return (
    <div className="hero-text-section">
      <h1 className="hero-text">Stories meet their</h1>
    </div>
  );
}

export default HeroHeader;
