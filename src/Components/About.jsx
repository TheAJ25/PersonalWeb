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
        <p className="mb-2">Hello, I&apos;m</p>
        <h1 className="text-4xl mb-4 glitch-text">Abhijit Shaw_</h1>
        <p className="text-black mb-2">
          a software engineer who treats code like a craft—where clean
          architecture meets intuitive design. From building real-time
          collaborative canvases and interactive algorithm visualizers to
          engineering secure, cloud-backed enterprise systems, I love turning
          complex ideas into fast, reliable software across the JavaScript,
          TypeScript, and .NET ecosystems.
        </p>
        <p className="m-0 p-0">
          With a curious mind and an eye for detail, I enjoy bridging creative
          frontend experiences in React, Next.js, and Angular with resilient
          backends in Node.js, C#, and the cloud. Outside the terminal, I find
          inspiration in digital art, sports, music and traveling to discover new
          stories waiting to be told.
        </p>
      </div>
    </section>
  );
};

export default About;