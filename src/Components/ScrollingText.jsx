"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Animate the text from right to left
    gsap.fromTo(
      textRef.current,
      { x: "100%" }, // Start fully to the right of the container
      {
        x: "-100%", // Move fully to the left
        repeat: -1, // Infinite scrolling
        duration: 20, // Time to complete one scroll
        ease: "linear", // Smooth scrolling effect
      }
    );
  }, []);

  return (
    <div className="overflow-hidden w-full bg-black text-white py-2 relative">
      <div
        ref={textRef}
        className="whitespace-nowrap"
        style={{ display: "inline-block" }}
      >
        Welcome to my portfolio! Feel free to explore my projects and
        experiences || Check out my latest projects and blog posts!
      </div>
    </div>
  );
};

export default ScrollingText;
