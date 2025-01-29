"use client";

import React from "react";
import Sidebar from "@/Components/Sidebar";
import Mainbar from "@/Components/Mainbar";
import RightSidebar from "@/Components/RightSidebar";
import { Project, Blog, Testimonial } from '@/types';

interface DesktopLayoutProps {
  projects: Project[];
  blogs: Blog[];
  testimonials: Testimonial[];
}

const DesktopLayout = ({ projects, blogs, testimonials }: DesktopLayoutProps) => {
  return (
    <div className="hidden md:block">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="w-72 bg-white border-2 ml-2 mt-2 border-black fixed flex flex-col overflow-auto">
            <Sidebar />
          </div>
          <div className="flex-1 p-2 ml-[295px] mr-[295px] overflow-y-auto no-scrollbar">
            <Mainbar projects={projects} blogs={blogs} />
          </div>
          <div className="w-72 fixed right-0 bg-white border-2 mr-2 mt-2 border-black h-[98vh] flex flex-col overflow-y-auto no-scrollbar">
            <RightSidebar testimonials={testimonials} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout; 