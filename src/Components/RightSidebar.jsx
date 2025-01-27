"use client";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import {
  Build,
  EmojiEvents,
  ChatBubbleOutline,
  ArrowForward,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

// Import SVG icons
import javascriptIcon from "@/assets/Images/icons8-javascript.svg";
import typescriptIcon from "@/assets/Images/icons8-typescript.svg";
import reactIcon from "@/assets/Images/icons8-react.svg";
import nextjsIcon from "@/assets/Images/icons8-nextjs.svg";
import nodejsIcon from "@/assets/Images/icons8-nodejs.svg";
import expressIcon from "@/assets/Images/icons8-express-js.svg";
import mongodbIcon from "@/assets/Images/icons8-mongodb.svg";
import sqlIcon from "@/assets/Images/icons8-mysql.svg";
import postgresqlIcon from "@/assets/Images/icons8-postgresql.svg";
import htmlIcon from "@/assets/Images/icons8-html.svg";
import cssIcon from "@/assets/Images/icons8-css.svg";
import tailwindIcon from "@/assets/Images/icons8-tailwind-css.svg";
import reduxIcon from "@/assets/Images/icons8-redux.svg";
import gitIcon from "@/assets/Images/icons8-git.svg";
import cppIcon from "@/assets/Images/icons8-c.svg";
import pythonIcon from "@/assets/Images/icons8-python.svg";
import postmanIcon from "@/assets/Images/icons8-postman-api.svg";

const RightSidebar = ({ testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="w-72 fixed right-0 bg-white border-2 mr-2 mt-2 border-black h-[98vh] flex flex-col overflow-y-auto no-scrollbar">
      <div className="space-y-2">
        {/* Skills Section */}
        <div className="bg-white border-b-2 border-black">
          <div className="bg-black text-white px-2 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Build fontSize="small" />
              <span>SKILLS.exe</span>
            </div>
            <div className="flex gap-2">
              <button className="w-3 h-3 bg-white rounded-full" />
              <button className="w-3 h-3 bg-white rounded-full" />
              <button className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
          <div className="p-2">
            <div className="space-y-4">
              <div>
                <h3 className="mt-2 text-lg font-bold mb-2">
                  Technical Skills
                </h3>
                <div className="grid grid-cols-6 gap-2">
                  {[
                    { name: "JavaScript", icon: javascriptIcon },
                    { name: "TypeScript", icon: typescriptIcon },
                    { name: "React JS", icon: reactIcon },
                    { name: "Next.js", icon: nextjsIcon },
                    { name: "Node.js", icon: nodejsIcon },
                    { name: "Express.js", icon: expressIcon },
                    { name: "MongoDB", icon: mongodbIcon },
                    { name: "SQL", icon: sqlIcon },
                    { name: "PostgreSQL", icon: postgresqlIcon },
                    { name: "HTML", icon: htmlIcon },
                    { name: "CSS", icon: cssIcon },
                    { name: "Tailwind CSS", icon: tailwindIcon },
                    { name: "Redux", icon: reduxIcon },
                    { name: "Git", icon: gitIcon },
                    { name: "C++", icon: cppIcon },
                    { name: "Python", icon: pythonIcon },
                    { name: "Postman", icon: postmanIcon },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex flex-col items-center gap-2 m-0 p-0">
                        <Image
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          width={50}
                          height={50}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Soft Skills</h3>
                <div className="space-y-2">
                  {["Leadership", "Communication", "Problem Solving"].map(
                    (skill) => (
                      <div key={skill} className="border-2 border-black p-2">
                        <span>{skill}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-white pt-2 border-b-2 border-black">
          <div className="bg-black text-white px-2 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <EmojiEvents fontSize="small" />
              <span>CERTIFICATIONS.exe</span>
            </div>
            <div className="flex gap-2">
              <button className="w-3 h-3 bg-white rounded-full" />
              <button className="w-3 h-3 bg-white rounded-full" />
              <button className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
          <div className="p-2">
            <div className="space-y-2">
              {[
                {
                  name: "Programming for Everybody (Getting Started with Python)",
                  time: "3/2022",
                  link: "https://www.coursera.org/account/accomplishments/verify/HPWBP5CMJJ4T",
                },
                {
                  name: "Ethics, Technology and Engineering",
                  time: "2/2022",
                  link: "https://www.coursera.org/account/accomplishments/verify/U9ACQNRV8288",
                },
                {
                  name: "Teamwork Skills: Communicating Effectively in Groups",
                  time: "2/2022",
                  link: "https://www.coursera.org/account/accomplishments/verify/CU9353KGDCKB",
                },
              ].map((cert) => (
                <div key={cert.name} className="border-2 border-black p-2">
                  <div className="flex justify-between items-center gap-2">
                    <a
                      href={cert.link}
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cert.name}
                    </a>
                    <span className="text-sm">{cert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white pt-2">
          <div className="bg-black text-white px-2 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ChatBubbleOutline fontSize="small" />
              <span>TESTIMONIALS.exe</span>
            </div>
            <div className="flex gap-2">
              <button className="w-3 h-3 bg-white rounded-full" />
              <button className="w-3 h-3 bg-white rounded-full" />
              <button className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
          <div className="p-2">
            <div className="space-y-2 relative h-32">
              <AnimatePresence>
                {testimonials.map((testimonial, index) =>
                  index === currentTestimonial ? (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      className="absolute w-full"
                    >
                      <div className="border-2 border-black">
                        <div className="bg-black text-white flex items-center justify-center px-4 py-2">
                          <span>{testimonial.author}</span>
                        </div>
                        <div className="p-4">
                          <p className="text-lg font-bold italic">"{testimonial.text}"</p>
                          <p className="text-sm mt-2 text-gray-600 flex justify-end">
                            — {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
            </div>
            <Link
              href="/add-testimonial"
              className="retro-button mt-10 block hover:bg-black hover:text-white transition-colors duration-700 ease-in-out"
            >
              <div className="flex items-center justify-between">
                <span>Add Testimonial</span>
                <ArrowForward fontSize="small" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

RightSidebar.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RightSidebar;
