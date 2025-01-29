"use client";

import React from "react";
import { Info } from "@mui/icons-material";

const About = () => {
  return (
    <section id="about" className="bg-white border-2 border-black">
      <div className="bg-black text-white px-2 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Info fontSize="small" />
          <span>ABOUT.exe</span>
        </div>
        <div className="flex gap-2">
          <button className="w-3 h-3 bg-white rounded-full" />
          <button className="w-3 h-3 bg-white rounded-full" />
          <button className="w-3 h-3 bg-white rounded-full" />
        </div>
      </div>
      <div className="p-4">
        <p className="mb-2">Hello, I'm</p>
        <h1 className="text-4xl mb-4 glitch-text">Abhijit Shaw_</h1>
        <p className="text-black mb-2">
          a full-stack developer with a passion for crafting meaningful
          digital experiences. I see coding as an art form, where every line
          of code is a brushstroke on the canvas of innovation. Whether it's
          designing intuitive interfaces or building resilient backends, I
          love the challenge of transforming ideas into reality.
        </p>
        <p className="m-0 p-0">
          With a heart set on constant growth and a mind buzzing with
          curiosity, I'm always eager to explore new technologies and push
          boundaries. Outside the world of code, I find inspiration in
          digital art, cricket, and traveling to discover stories waiting to
          be told.
        </p>
      </div>
    </section>
  );
};

export default About;
