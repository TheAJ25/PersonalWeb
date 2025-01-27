"use client";

import React, { useState } from "react";
import {
  Info,
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

const MainComponent = ({ projects, blogs }) => {
  const blogContainerRef = useRef(null);
  const scrollTween = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(error.message || 'An error occurred while sending the message');
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
    <div className="flex-1 p-2 ml-[295px] mr-[295px] overflow-y-auto no-scrollbar">
      {/* Scrolling Text */}
      <div className="mb-2">
        <ScrollingText />
      </div>

      {/* Navigation Buttons */}
      <Navbar />

      <div className="max-w-5xl mx-auto space-y-2">
        {/* About Section */}
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
            <p className="mb-2">Hello, I'm</p>
            <h1 className="text-4xl mb-4 glitch-text">Abhijit Shaw_</h1>
            <p className="text-black mb-2">
              a full-stack developer with a passion for crafting meaningful
              digital experiences. I see coding as an art form, where every line
              of code is a brushstroke on the canvas of innovation. Whether it's
              designing intuitive interfaces or building resilient backends, I
              love the challenge of transforming ideas into reality.
            </p>
            <p className="m-0 p-0">
              With a heart set on constant growth and a mind buzzing with
              curiosity, I'm always eager to explore new technologies and push
              boundaries. Outside the world of code, I find inspiration in
              digital art, cricket, and traveling to discover stories waiting to
              be told.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="bg-white border-2 border-black">
          <div className="bg-black text-white px-2 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Briefcase fontSize="small" />
              <span>EXPERIENCE.exe & EDUCATION.exe</span>
            </div>
            <div className="flex gap-2">
              <button className="w-3 h-3 bg-white rounded-full" />
              <button className="w-3 h-3 bg-white rounded-full" />
              <button className="w-3 h-3 bg-white rounded-full" />
            </div>
          </div>
          <div className="p-4">
            <div className="space-y-6">
              <div className="border-b-2 border-black pb-4">
                <h3 className="text-xl font-bold mb-2">
                  B.Tech in Information Technology
                </h3>
                <p className="text-black mb-2">
                  Maulana Abul Kalam Azad University of Technology (2021-2025)
                </p>
                <ul className="list-disc ml-5 text-black">
                  <li>8.3 CGPA (upto 6th semester)</li>
                  {/* <li>Architected cloud-native solutions using AWS</li>
                  <li>Mentored junior developers and conducted code reviews</li> */}
                </ul>
              </div>
              <div className="space-y-6">
                <div className="border-b-2 border-black pb-4">
                  <h3 className="text-xl font-bold mb-2">
                    Higher Secondary Education (12th)
                  </h3>
                  <p className="text-black mb-2">
                    Ushumpur Adarsha Uchcha Vidyalaya
                  </p>
                  <ul className="list-disc ml-5 text-black">
                    <li>82.2%</li>
                    {/* <li>Architected cloud-native solutions using AWS</li>
                  <li>Mentored junior developers and conducted code reviews</li> */}
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Secondary Education (10th)
                </h3>
                <p className="text-black mb-2">
                  Ushumpur Adarsha Uchcha Vidyalaya
                </p>
                <ul className="list-disc ml-5 text-black">
                  <li>87.3%</li>
                  {/* <li>Implemented CI/CD pipelines and testing strategies</li>
                  <li>Optimized application performance and user experience</li> */}
                </ul>
              </div>
            </div>
          </div>
        </section>

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
            <div className="grid md:grid-cols-2 gap-4">
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
                    <div className="flex gap-4 mt-auto">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-button flex-1 hover:bg-black hover:text-white transition-colors duration-300"
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
                        className="retro-button flex-1 hover:bg-black hover:text-white transition-colors duration-300"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <GitHubIcon fontSize="small" />
                          <span>Source Code</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                href="/projects"
                className="mt-6 block p-2 w-[30%] bg-black border-2 border-black text-white hover:bg-white hover:border-black hover:border-2 hover:text-black transition-colors duration-300"
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
                    <span className="underline flex-1">{blog.title}</span>
                    <span className="text-sm ml-4">{blog.date}</span>
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
                <label htmlFor="name" className="block text-lg text-black font-bold mb-1">
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
                <label htmlFor="email" className="block text-lg text-black font-bold mb-1">
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
                <label htmlFor="message" className="block text-lg text-black font-bold mb-1">
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
