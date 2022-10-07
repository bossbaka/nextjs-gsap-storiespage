import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function HeroFooter() {
  const ref = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        scrub: true,
      },
    });
    tl.to(
      ".hero-container",
      {
        backgroundColor: "white",
        duration: 0.25,
      },
      "-=2"
    );
  }, []);

  return (
    <div ref={ref} className="hero-text-section">
      <h1>Stories meet their widest audience ever</h1>
    </div>
  );
}

export default HeroFooter;
