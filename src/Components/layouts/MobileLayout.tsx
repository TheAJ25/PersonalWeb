"use client";

import React from "react";
import Sidebar from "@/Components/Sidebar";
import Mainbar from "@/Components/Mainbar";
import RightSidebar from "@/Components/RightSidebar";
// import ScrollingText from "@/Components/ScrollingText";
import About from "@/Components/About";
import Education from "@/Components/Education";
import { Project, Blog, Testimonial } from '@/types';

interface MobileLayoutProps {
  projects: Project[];
  blogs: Blog[];
  testimonials: Testimonial[];
}

const MobileLayout = ({ projects, blogs, testimonials }: MobileLayoutProps) => {
  return (
    <div className="block md:hidden">
      <div className="flex flex-col">
        <div className="relative">
          <div className="w-full bg-white mt-2 border-2 border-black">
            <Sidebar />
          </div>
          <div className="mt-2">
            <About />
          </div>
          <div className="mt-2">
            <Education />
          </div>
          <div className="w-full bg-white border-2 mt-2 border-black">
            <RightSidebar testimonials={testimonials} />
          </div>
          <div className="w-full mt-2">
            <Mainbar projects={projects} blogs={blogs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLayout; 