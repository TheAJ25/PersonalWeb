"use client";

import React from "react";
import TerminalIcon from "@mui/icons-material/Terminal";
import PersonIcon from "@mui/icons-material/Person";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";
import image from "@/assets/Images/peep (1).svg";
import resume from '@/assets/Pdfs/Abhijit_Shaw_Resume.pdf';

const Sidebar = () => {
  return (
    <div className="w-72 bg-white border-2 ml-2 mt-2 border-black fixed h-screen flex flex-col">
      {/* Header */}
      <div className="bg-black text-white px-2 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PersonIcon fontSize="small" />
          <span>PROFILE.exe</span>
        </div>
        <div className="flex gap-2">
          <button className="w-3 h-3 bg-white rounded-full" />
          <button className="w-3 h-3 bg-white rounded-full" />
          <button className="w-3 h-3 bg-white rounded-full" />
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex flex-col p-2 space-y-6 overflow-y-auto no-scrollbar">
        {/* Profile Item */}
        <div className="border-2 flex flex-col items-center border-black p-4">
          <Image
            src={image}
            alt="Image"
            className="w-full border-2 border-black rounded-full mb-2 object-cover"
          />
          <div className="flex flex-col border-b-2 border-black items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">Abhijit Shaw</span>
            </div>
            <span className="text-black">Full Stack Developer</span>
          </div>
          <p className="text-lg text-black">Kolkata, India</p>

          <a
            href={resume}
            download="Abhijit_Shaw_Resume.pdf"
            className="mt-2 flex items-center gap-2 border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
          >
            <DownloadIcon fontSize="small" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Add Social Links */}
      <div className="m-2 p-2 border-2 border-black flex flex-col gap-2">
        <div className="flex justify-center items-center font-bold">
          <p>Connect with me</p>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/abhijiit" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <GitHubIcon fontSize="medium" />
          </a>
          <a
            href="https://linkedin.com/in/abhijiit" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <LinkedInIcon fontSize="medium" />
          </a>
          <a
            href="https://instagram.com/abhijiit" // Replace with your Instagram URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <InstagramIcon fontSize="medium" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
