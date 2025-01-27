"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "@/Components/Sidebar";
import Mainbar from "@/Components/Mainbar";
import RightSidebar from "@/Components/RightSidebar";

import { projects } from "@/utils/data/projectData";
import { blogs } from "@/utils/data/blogData";

const Page = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row">
          <Sidebar />
          <Mainbar projects={projects} blogs={blogs} />
          <RightSidebar testimonials={testimonials} />
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
