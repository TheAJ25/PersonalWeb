"use client";

import React from 'react';
import { Build, EmojiEvents, ChatBubbleOutline, ArrowForward } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';

// Import SVG icons
import javascriptIcon from '@/assets/Images/icons8-javascript.svg';
import typescriptIcon from '@/assets/Images/icons8-typescript.svg';
import reactIcon from '@/assets/Images/icons8-react.svg'
import nextjsIcon from '@/assets/Images/icons8-nextjs.svg';
import nodejsIcon from '@/assets/Images/icons8-nodejs.svg';
import expressIcon from '@/assets/Images/icons8-express-js.svg';
import mongodbIcon from '@/assets/Images/icons8-mongodb.svg';
import sqlIcon from '@/assets/Images/icons8-mysql.svg';
import postgresqlIcon from '@/assets/Images/icons8-postgresql.svg';
import htmlIcon from '@/assets/Images/icons8-html.svg';
import cssIcon from '@/assets/Images/icons8-css.svg';
import tailwindIcon from '@/assets/Images/icons8-tailwind-css.svg';
import reduxIcon from '@/assets/Images/icons8-redux.svg';
import gitIcon from '@/assets/Images/icons8-git.svg';
import cppIcon from '@/assets/Images/icons8-c.svg';
import pythonIcon from '@/assets/Images/icons8-python.svg';
import postmanIcon from '@/assets/Images/icons8-postman-api.svg';

const RightSidebar = () => {
  const testimonials = [
    { author: 'John Doe', text: 'Great experience working with you!', position: 'Software Engineer' },
    { author: 'Jane Smith', text: 'Impressive skills and dedication.', position: 'Project Manager' },
  ];

  return (
    <div className="w-72 fixed right-0 bg-white border-2 mr-2 mt-2 border-black h-screen flex flex-col overflow-y-auto no-scrollbar">
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
                <h3 className="mt-2 font-bold mb-2">Technical Skills</h3>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { name: 'JavaScript', icon: javascriptIcon },
                    { name: 'TypeScript', icon: typescriptIcon },
                    { name: 'React JS', icon: reactIcon },
                    { name: 'Next.js', icon: nextjsIcon },
                    { name: 'Node.js', icon: nodejsIcon },
                    { name: 'Express.js', icon: expressIcon },
                    { name: 'MongoDB', icon: mongodbIcon },
                    { name: 'SQL', icon: sqlIcon },
                    { name: 'PostgreSQL', icon: postgresqlIcon },
                    { name: 'HTML', icon: htmlIcon },
                    { name: 'CSS', icon: cssIcon },
                    { name: 'Tailwind CSS', icon: tailwindIcon },
                    { name: 'Redux', icon: reduxIcon },
                    { name: 'Git', icon: gitIcon },
                    { name: 'C++', icon: cppIcon },
                    { name: 'Python', icon: pythonIcon },
                    { name: 'Postman', icon: postmanIcon },
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
                <h3 className="font-bold mb-2">Soft Skills</h3>
                <div className="space-y-2">
                  {['Leadership', 'Communication', 'Problem Solving'].map((skill) => (
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
                { name: 'AWS Certified Solutions Architect', year: '2023' },
                { name: 'Google Cloud Professional', year: '2022' },
                { name: 'Microsoft Azure Expert', year: '2021' },
              ].map((cert) => (
                <div key={cert.name} className="border-2 border-black p-2">
                  <div className="flex justify-between items-center gap-2">
                    <span>{cert.name}</span>
                    <span className="text-sm">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="bg-white pt-2 border-b-2 border-black">
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
            <div className="space-y-2">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="border-2 border-black">
                  <div className="bg-black text-white px-4 py-2">
                    <span>{testimonial.author}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-sm italic">"{testimonial.text}"</p>
                    <p className="text-sm mt-2 text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/add-testimonial" className="retro-button mt-4 block">
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

export default RightSidebar;
