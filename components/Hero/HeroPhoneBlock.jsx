import React from "react";
const videoUrl =
  "https://kstatic.googleusercontent.com/files/c44f15bb7e678d651e18fdee3058f2948aa733849e0dea3daf7429bf0f77ec23bd670dba63e71739d5b53489c98689bdbb80c47cf55f44649d9d1bfdf3e4f0a0";

function HeroPhoneBlock() {
  return (
    <div className="hero-phone-black">
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
