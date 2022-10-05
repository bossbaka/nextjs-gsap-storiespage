import React from "react";
import HeroCollage from "./HeroCollage";
import HeroFooter from "./HeroFooter";
import HeroHeader from "./HeroHeader";
import HeroPhoneBlock from "./HeroPhoneBlock";
import HeroUsedBy from "./HeroUsedBy";

function Hero({ data }) {
  return (
    <div className="hero-container">
      <HeroHeader />
      <div className="hero-media">
        <HeroCollage data={data} />
        <HeroPhoneBlock />
      </div>
      <HeroUsedBy />
      <HeroFooter />
    </div>
  );
}

export default Hero;
