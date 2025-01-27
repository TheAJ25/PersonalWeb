"use client";

import React from "react";
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

const MainComponent = ({ projects, blogs }) => {
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
            a full-stack developer with a passion for crafting meaningful digital experiences. I see coding as an art form, where every line of code is a brushstroke on the canvas of innovation. Whether it’s designing intuitive interfaces or building resilient backends, I love the challenge of transforming ideas into reality.</p>
            <p className="m-0 p-0">
            With a heart set on constant growth and a mind buzzing with curiosity, I’m always eager to explore new technologies and push boundaries. Outside the world of code, I find inspiration in digital art, cricket, and traveling to discover stories waiting to be told.
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
              <div>
                <h3 className="text-xl font-bold mb-2">Senior Developer @ TechCorp</h3>
                <p className="text-black mb-2">2020 - Present</p>
                <ul className="list-disc ml-5 text-black">
                  <li>Led development of enterprise-scale React applications</li>
                  <li>Architected cloud-native solutions using AWS</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Full Stack Developer @ StartupX</h3>
                <p className="text-black mb-2">2018 - 2020</p>
                <ul className="list-disc ml-5 text-black">
                  <li>Built and maintained multiple client applications</li>
                  <li>Implemented CI/CD pipelines and testing strategies</li>
                  <li>Optimized application performance and user experience</li>
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
              {projects.slice(0, 2).map((project, index) => (
                <div key={index} className="border-2 border-black">
                  <div className="bg-black text-white px-4 py-2 flex items-center justify-between">
                    <span>{project.title}</span>
                    <ExternalLink fontSize="small" />
                  </div>
                  <div className="p-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover mb-4 border border-black grayscale"
                    />
                    <p className="text-sm text-black mb-4">{project.description}</p>
                    <div className="space-y-2">
                      {project.subProjects.map((subProject, subIndex) => (
                        <div key={subIndex} className="border-2 border-black p-2">
                          <h4 className="font-bold">{subProject.title}</h4>
                          <p className="text-sm">{subProject.description}</p>
                        </div>
                      ))}
                    </div>
                    <button className="retro-button mt-4">
                      <div className="flex items-center gap-2">
                        <ExternalLink fontSize="small" />
                        <span>View Project</span>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/projects" className="retro-button mt-6 block">
              <div className="flex items-center justify-between">
                <span>See More Projects</span>
                <ArrowRight fontSize="small" />
              </div>
            </Link>
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
          <div className="p-6">
            <div className="space-y-4">
              {blogs.slice(0, 2).map((blog, index) => (
                <div key={index} className="border-2 border-black">
                  <div className="bg-black text-white px-4 py-2 flex items-center justify-between">
                    <span>{blog.title}</span>
                    <span className="text-sm">{blog.date}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-black mb-4">{blog.excerpt}</p>
                    <button className="retro-button">
                      <div className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        <span>Read More</span>
                      </div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/blogs" className="retro-button mt-6 block">
              <div className="flex items-center justify-between">
                <span>See More Blogs</span>
                <ArrowRight size={16} />
              </div>
            </Link>
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
            <div className="grid md:grid-cols-2 gap-4">
              <button className="retro-button">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>Email Me</span>
                </div>
              </button>
              <button className="retro-button">
                <div className="flex items-center gap-2">
                  <Code size={16} />
                  <span>GitHub Profile</span>
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default MainComponent;
