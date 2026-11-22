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

// Import local SVG icons
import cppIcon from "@/assets/Images/icons8-c.svg";
import javascriptIcon from "@/assets/Images/icons8-javascript.svg";
import typescriptIcon from "@/assets/Images/icons8-typescript.svg";
import reactIcon from "@/assets/Images/icons8-react.svg";
import nextjsIcon from "@/assets/Images/icons8-nextjs.svg";
import nodejsIcon from "@/assets/Images/icons8-nodejs.svg";
import expressIcon from "@/assets/Images/icons8-express-js.svg";
import mongodbIcon from "@/assets/Images/icons8-mongodb.svg";
import sqlIcon from "@/assets/Images/icons8-mysql.svg";
import postgresqlIcon from "@/assets/Images/icons8-postgresql.svg";
import tailwindIcon from "@/assets/Images/icons8-tailwind-css.svg";
import reduxIcon from "@/assets/Images/icons8-redux.svg";
import gitIcon from "@/assets/Images/icons8-git.svg";
import postmanIcon from "@/assets/Images/icons8-postman-api.svg";

const RightSidebar = ({ testimonials }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds as per your original code
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const technicalSkills = [
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      isRemote: true,
    },
    {
      name: ".NET Core",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
      isRemote: true,
    },
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
      isRemote: true,
    },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "React JS", icon: reactIcon },
    { name: "Next.js", icon: nextjsIcon },
    { name: "Node.js", icon: nodejsIcon },
    { name: "Express.js", icon: expressIcon },
    {
      name: "Microsoft Azure",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
      isRemote: true,
    },
    {
      name: "C++",
      icon: cppIcon,
    },
    {
      name: "Azure SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
      isRemote: true,
    },
    { name: "PostgreSQL", icon: postgresqlIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "SQL", icon: sqlIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    {
      name: "Swagger",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
      isRemote: true,
    },
    { name: "Postman", icon: postmanIcon },
    { name: "Git", icon: gitIcon },
    {
      name: "Azure DevOps",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg",
      isRemote: true,
    },
  ];

  return (
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
              <h3 className="mt-2 text-lg font-bold mb-2">Technical Skills</h3>
              <div className="grid grid-cols-6 gap-2">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} title={skill.name}>
                    <div className="flex flex-col items-center gap-2 m-0 p-0">
                      {skill.isRemote ? (
                        <img
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          width={50}
                          height={50}
                        />
                      ) : (
                        <Image
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          width={50}
                          height={50}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Soft Skills</h3>
              <div className="space-y-2">
                {[
                  "System Ownership & RCA",
                  "Cross-Team Collaboration",
                  "Agile & Release Delivery",
                ].map((skill) => (
                  <div key={skill} className="border-2 border-black p-2">
                    <span>{skill}</span>
                  </div>
                ))}
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
                name: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
                time: "6/2026",
                link: "https://learn.microsoft.com/api/credentials/share/en-us/ShawAbhijit-2542/9ADCB884F35CFDAA?sharingId=96B93C59B2D97791",
              },
              {
                name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
                time: "2025",
                link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=FDBE4ED2076F0594D8277D00EAFC9CAEF6395BA61B4C8858EFBF6BF26336C375",
              },
              {
                name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
                time: "2025",
                link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=FDA290693ED72009951E714D05B6AA32CD2B7069B5951134C83948CC1760C5E1",
              },
              {
                name: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
                time: "2025",
                link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=A4FC190C273CF3C1EE030C9505B559C7EC811971ABA95B2660F6FC9F5C7F59EC",
              },
              {
                name: "Accenture – Internship Completion Certificate",
                time: "6/2025",
                link: "/Abhijit Shaw- Internship certificate.pdf",
                isPdf: true,
              },
            ].map((cert) => (
              <div key={cert.name} className="border-2 border-black p-2">
                <div className="flex justify-between items-center gap-2">
                  {cert.isPdf ? (
                    <a
                      href={cert.link}
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      {cert.name}
                    </a>
                  ) : (
                    <a
                      href={cert.link}
                      className="underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {cert.name}
                    </a>
                  )}
                  <span className="text-sm">{cert.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section - Hidden on small screens */}
      <div className="hidden md:block bg-white pt-2">
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
        <div className="p-2 flex flex-col gap-2 justify-between h-[calc(100%-3rem)]">
          <div className="space-y-2">
            <AnimatePresence>
              {testimonials.map((testimonial, index) =>
                index === currentTestimonial ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="border-2 border-black">
                      <div className="bg-black text-white flex items-center justify-center px-4 py-2">
                        <span>{testimonial.author}</span>
                      </div>
                      <div className="p-4">
                        <p className="text-lg font-bold italic">
                          "{testimonial.text}"
                        </p>
                        <p className="text-sm mt-2 text-gray-600 flex justify-end">
                          — {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : null,
              )}
            </AnimatePresence>
          </div>
          <Link
            href="/add-testimonial"
            className="retro-button block hover:bg-black hover:text-white transition-colors duration-700 ease-in-out"
          >
            <div className="flex items-center justify-between">
              <span>Add Testimonial</span>
              <ArrowForward fontSize="small" />
            </div>
          </Link>
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
    }),
  ).isRequired,
};

export default RightSidebar;
