import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import cn from "classnames";
import FeatureSlide from "./FeatureSilde";
import { gsap } from "gsap";
function RenderImages({ activeFeatureIndex, data }) {
  //console.log(data);
  return data.featureSlides.map(({ imageUrl }, index) => (
    <>
      <picture>
        {/* <Image
        key={imageUrl}
        src={imageUrl}
        className={cn({ "as-primary": activeFeatureIndex === index })}
        alt="img"
        layout="responsive"
        width={200}
        height={360}
      /> */}
        <img
          className={cn({ "as-primary": activeFeatureIndex === index })}
          key={imageUrl}
          style={{ backgroundImage: `url(${imageUrl})` }}
          alt="img"
        />
      </picture>
    </>
  ));
}

function FeatureSlides({ data }) {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  const featureSliderRef = useRef(null);
  const featureSlidersRightRef = useRef(null);

  useEffect(() => {
    function stopTrigger() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureSlidersRightRef.current,
          start: "top top",
          end: () => `+=${featureSliderRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });
      return tl;
    }
    const master = gsap.timeline();
    master.add(stopTrigger());
  }, []);

  return (
    <div ref={featureSliderRef} className="feature-slides-container">
      <div className="feature-slide-left">
        {data.featureSlides.map((feature, index) => (
          <FeatureSlide
            updateActiveImage={setFeatureIndex}
            key={feature.imageUrl}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
      <div ref={featureSlidersRightRef} className="feature-slide-right">
        <RenderImages activeFeatureIndex={activeFeatureIndex} data={data} />
      </div>
    </div>
  );
}

export default FeatureSlides;
