import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FeatureSildes from "../components/FeatureSildes";

function Main() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

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

  console.log(data);

  return loader ? (
    <div className="loader" />
  ) : (
    <div>
      <Hero data={data} />
      <FeatureSildes data={data} />
    </div>
  );
}

export default Main;
