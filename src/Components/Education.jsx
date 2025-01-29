"use client";

import React from "react";
import { Work as Briefcase } from "@mui/icons-material";

const Education = () => {
  return (
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
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 