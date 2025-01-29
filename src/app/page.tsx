"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DesktopLayout from "@/Components/layouts/DesktopLayout";
import MobileLayout from "@/Components/layouts/MobileLayout";
import { projects } from "@/utils/data/projectData";
import { blogs } from "@/utils/data/blogData";

const Page = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/testimonials");
        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
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
      <DesktopLayout 
        projects={projects} 
        blogs={blogs} 
        testimonials={testimonials} 
      />
      <MobileLayout 
        projects={projects} 
        blogs={blogs} 
        testimonials={testimonials} 
      />
    </motion.div>
  );
};

export default Page;
