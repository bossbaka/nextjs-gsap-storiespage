import React, { useState, useEffect } from "react";
import Image from "next/image";

function RenderImages({ activeFeatureIndex }) {
  return data.featureSildes.map(({ imageUrl }, index) => (
    <Image
      key={imageUrl}
      src={src}
      //className={`${"as-primary" : activeFeatureIndex === index}`}
      alt=""
      layout="responsive"
      width={200}
      height={360}
    />
  ));
}

function FeatureSildes() {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  return (
    <div className="feature-slides-container">
      <div className="feature-slides-left"></div>
      <div className="feature-slides-right"></div>
    </div>
  );
}

export default FeatureSildes;
