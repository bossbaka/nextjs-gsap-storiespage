import React, { useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";

function VideoElement({ src }) {
  useEffect(() => {
    gsap.config({
      nullTargetWarn: false,
      trialWarn: false,
    });

    const tl = gsap.timeline({
      delay: 0.5,
    });

    tl.fromTo(
      ".hero-element",
      { y: 300 },
      {
        y: 0,
        duration: 1,
        delay: function (index) {
          return 0.2 * index;
        },
      }
    );
  }, []);
  return (
    <div className="hero-element">
      <video
        className="collage-element"
        playsInline=""
        autoPlay
        webkit-playsinline=""
        loop
        src={src}
      ></video>
    </div>
  );
}

function ImageElement({ src }) {
  return (
    <div className="hero-element">
      <Image
        src={src}
        className="collage-element"
        alt=""
        layout="responsive"
        width={200}
        height={360}
      />
    </div>
  );
}

function HeroCollage() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  const leftImages = data.photos.slice(0, 2);
  const rightImages = data.photos.slice(2, data.photos.length);

  const [leftVideo, rightVideo] = data.videos;

  return (
    <div className="hero-collage">
      <div className="left-column">
        {leftImages.map((item, index) => (
          <ImageElement src={item} key={index} />
        ))}
        <VideoElement src={leftVideo} />
      </div>
      <div className="right-column">
        {rightImages.map((item, index) => (
          <ImageElement src={item} key={index} />
        ))}
        <VideoElement src={rightVideo} />
      </div>
    </div>
  );
}

export default HeroCollage;