import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const videoUrl =
  "https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0";

function HeroPhoneBlock() {
  const phoneRef = useRef(null);

  useEffect(() => {
    function intro() {
      const tl = gsap.timeline();

      tl.fromTo(phoneRef.current, { y: 200 }, { y: 0, duration: 1 });
      return tl;
    }

    function stopTrigger() {
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: phoneRef.current,
          start: "top top",
          end: "+=1000",
          pin: true,
          scrub: true,
        },
      });
      tl.to(phoneRef.current, { scale: 1.2 }, "+=0.2");
      tl.to(
        ".hero-container",
        {
          backgroundColor: "black",
          duration: 0.25,
        },
        "-=0.5"
      );
      return tl;
    }

    const master = gsap.timeline();
    master.add(intro());
    setTimeout(() => {
      master.add(stopTrigger());
    }, 1000);
  }, []);

  return (
    <div className="hero-phone-black" ref={phoneRef}>
      <div
        className="hero-phone-template"
        style={{
          backgroundImage: `url(
            "https://stories-google.netlify.app/static/hero-phone-frame-v2-84b6d171137e37e08bc89dcf712cb3c2.png"
          )`,
        }}
      >
        <video
          className="collage-element"
          playsInline=""
          autoPlay
          webkit-playsinline=""
          loop
          src={videoUrl}
        ></video>
      </div>
    </div>
  );
}

export default HeroPhoneBlock;
