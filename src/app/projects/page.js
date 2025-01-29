"use client";

import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/utils/data/projectData";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
      className="min-h-screen bg-white text-black"
    >
      <div className="flex flex-col p-6 max-w-6xl mx-auto ">
        <h1 className="text-4xl font-bold text-center mb-12 pb-2 font-mono border-b-4 border-black inline-block">
          My Projects
        </h1>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="transform transition-all duration-300 hover:scale-[1.02]">
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="border-2 border-black rounded-lg shadow-lg overflow-hidden"
              >
                {/* Project Header */}
                <div className="bg-black text-white px-6 py-4 flex items-center justify-between">
                  <span className="text-2xl font-mono">{project.title}</span>
                  <div className="flex gap-2">
                    <button className="w-3 h-3 bg-white rounded-full" />
                    <button className="w-3 h-3 bg-white rounded-full" />
                    <button className="w-3 h-3 bg-white rounded-full" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col md:flex-row">
                  {/* Image Section */}
                  <div className="md:w-1/3 p-6 flex items-center justify-center ">
                    <div className="relative w-full h-0 pb-[56.25%] border-2 border-black rounded-md overflow-hidden ">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>



                  {/* Details Section */}
                  <div className="md:w-2/3 p-6 space-y-6">
                    <p className="text-base text-black">{project.detailedDescription}</p>

                    {/* Technologies Used */}
                    <div>
                      <h3 className="font-bold text-lg">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies?.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-sm font-mono border-2 border-black rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center justify-center gap-6 pt-4 w-full">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 w-1/2 border-black flex items-center justify-center gap-2 p-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <LaunchIcon fontSize="small" />
                          <span>Live Demo</span>
                        </div>
                      </a>
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 w-1/2 border-black flex items-center justify-center gap-2 p-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <GitHubIcon fontSize="small" />
                          <span>Source Code</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
