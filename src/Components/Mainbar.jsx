"use client";

import React, { useState } from "react";
import {
  Work as Briefcase,
  FolderOpen,
  Book as BookOpen,
  Phone,
  Mail,
  GitHub as Code,
  ArrowForward as ArrowRight,
  OpenInNew as ExternalLink,
} from "@mui/icons-material";
import Link from "next/link";
import ScrollingText from "@/Components/ScrollingText";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Image from "next/image";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import About from "@/Components/About";
import Education from "@/Components/Education";

const MainComponent = ({ projects, blogs }) => {
  const blogContainerRef = useRef(null);
  const scrollTween = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error.message || "An error occurred while sending the message");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const container = blogContainerRef.current;

    // Auto-scrolling effect with GSAP
    scrollTween.current = gsap.to(container, {
      scrollTop: container.scrollHeight - container.clientHeight,
      duration: 10, // Adjust for slower or faster scrolling
      ease: "linear",
      repeat: -1, // Infinite scrolling
      yoyo: true, // Reverses scroll back to the top
    });

    // Pause on hover
    const handleMouseEnter = () => scrollTween.current.pause();
    const handleMouseLeave = () => scrollTween.current.play();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      scrollTween.current?.kill();
    };
  }, []);

  return (
    <div className="">
      {/* Scrolling Text */}
      <div className="hidden md:block mb-2">
        <ScrollingText />
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:block">
        <Navbar />
      </div>


      <div className="max-w-5xl mx-auto space-y-2">
        {/* About Section */}
        <div className="hidden md:block">
          <About/>
        </div>

        {/* Experience Section */}
        <div className="hidden md:block">
          <Education />
        </div>

        {/* Projects Section */}
        <section id="projects" className="bg-white border-2 border-black">
          <div className="bg-black text-white px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FolderOpen fontSize="small" />
              <span>PROJECTS.exe</span>
            </div>
            <div className="flex gap-2">
              <button className="w-3 h-3 bg-white rounded-full" />
              <button className="w-3 h-3 bg-white rounded-full" />
              <button className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.slice(0, 4).map((project, index) => (
                <div
                  key={index}
                  className="border-2 border-black flex flex-col transform transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="bg-black text-white px-4 py-2 flex items-center justify-between">
                    <span>{project.title}</span>
                    <div className="flex gap-2">
                      <button className="w-3 h-3 bg-white rounded-full" />
                      <button className="w-3 h-3 bg-white rounded-full" />
                      <button className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="p-4 flex flex-col h-full">
                    <div className="relative w-full h-48 mb-4 border-2 border-black">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <p className="text-sm text-black mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-col xs:flex-row gap-4 p-1 xs:p-2 sm:p-4">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 border-2 border-black px-1 xs:px-2 sm:px-4 py-1 xs:py-2 hover:bg-black hover:text-white transition-colors text-xs xs:text-sm sm:text-base"
                      >
                        <LaunchIcon fontSize="small" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 border-2 border-black px-1 xs:px-2 sm:px-4 py-1 xs:py-2 hover:bg-black hover:text-white transition-colors text-xs xs:text-sm sm:text-base"
                      >
                        <GitHubIcon fontSize="small" />
                        <span>Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                href="/projects"
                className="mt-6 block p-2 w-full md:w-[30%] bg-black border-2 border-black text-white hover:bg-white hover:border-black hover:border-2 hover:text-black transition-colors duration-300"
              >
                <div className="flex items-center justify-between">
                  <span>See More Projects</span>
                  <ArrowRight fontSize="small" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section id="blogs" className="bg-white border-2 border-black">
          <div className="bg-black text-white px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen size={16} />
              <span>BLOGS.exe</span>
            </div>
            <div className="flex gap-2">
              <button className="w-3 h-3 bg-white rounded-full" />
              <button className="w-3 h-3 bg-white rounded-full" />
              <button className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
          <div
            ref={blogContainerRef}
            className="p-6 h-[200px] overflow-y-auto no-scrollbar"
          >
            <div className="space-y-4">
              {blogs.map((blog, index) => (
                <a
                  key={index}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-2 border-black transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <div className="bg-black text-white px-4 py-2 flex items-center">
                    <span className="underline flex-1">{blog.title} - {blog.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white border-2 border-black">
          <div className="bg-black text-white px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>CONTACT.exe</span>
            </div>
            <div className="flex gap-2">
              <button className="w-3 h-3 bg-white rounded-full" />
              <button className="w-3 h-3 bg-white rounded-full" />
              <button className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg text-black font-bold mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border-2 border-black focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg text-black font-bold mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border-2 border-black focus:outline-none"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg text-black font-bold mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-2 border-2 border-black focus:outline-none resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="retro-button w-full flex items-center justify-center gap-2 hover:bg-black hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Mail size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default MainComponent;
