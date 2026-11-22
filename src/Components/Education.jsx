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

      <div className="p-4 space-y-6">
        {/* EXPERIENCE SECTION */}
        <div>
          <div className="bg-black text-white px-3 py-1 text-sm font-bold tracking-wider mb-4">
            // EXPERIENCE
          </div>

          <div className="space-y-4">
            <div className="border-b-2 border-black pb-4">
              <h3 className="text-xl font-bold mb-1">
                Packaged App Developer Associate (Full-Stack)
              </h3>
              <p className="text-black font-medium mb-2">
                Accenture, Bengaluru (Oct 2025 – Present)
              </p>
              <ul className="list-disc ml-5 text-black space-y-1.5">
                <li>
                  Architected and maintained enterprise compliance and internal
                  audit web modules for the European financial post-trade
                  domain using Angular, TypeScript, RxJS, and Bootstrap,
                  implementing route guards, HTTP interceptors, and reactive
                  forms for strict 6-eyes maker-checker-approver workflows
                </li>
                <li>
                  Developed scalable C# .NET Core Web APIs and Azure SQL data
                  models enforcing transaction compliance rules, securing
                  endpoints via Azure Active Directory (Azure AD) RBAC and
                  supporting downstream replication to a Hadoop Data Lake
                </li>
                <li>
                  Built, validated, and debugged RESTful services against
                  OpenAPI/Swagger contracts using Postman and Chrome DevTools,
                  maintaining automated REST pipelines and ServiceNow Flow
                  Designer integrations for cross-platform audit synchronization
                </li>
                <li>
                  Managed end-to-end ITSM operational workflows in ServiceNow
                  (PRBs and CRQs), executed zero-downtime rolling updates across
                  environments, led L2/L3 root cause analysis (RCA) via CyberArk
                  jump servers, and collaborated with third-party vendors across
                  UAT and Git/Azure DevOps CI/CD pipelines
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">
                Workday Integration Intern
              </h3>
              <p className="text-black font-medium mb-2">
                Accenture, Bengaluru (Feb 2025 – Jun 2025)
              </p>
              <ul className="list-disc ml-5 text-black space-y-1.5">
                <li>
                  Developed end-to-end HCM integration solutions using Workday
                  Studio, Core Connectors, and Enterprise Interface Builder
                  (EIB) to streamline employee data synchronization
                </li>
                <li>
                  Built and tested cross-platform integration workflows
                  connecting Workday with external SAP and Oracle enterprise
                  systems
                </li>
                <li>
                  Automated payroll and benefits data pipelines in collaboration
                  with mentors and cross-functional delivery teams
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* EDUCATION SECTION */}
        <div>
          <div className="bg-black text-white px-3 py-1 text-sm font-bold tracking-wider mb-4">
            // EDUCATION
          </div>

          <div className="space-y-4">
            <div className="border-b-2 border-black pb-4">
              <h3 className="text-xl font-bold mb-1">
                B.Tech in Information Technology
              </h3>
              <p className="text-black mb-1">
                B.P. Poddar Institute of Management and Technology, MAKAUT
                (2021 – 2025)
              </p>
              <ul className="list-disc ml-5 text-black">
                <li>8.38 CGPA</li>
              </ul>
            </div>

            <div className="border-b-2 border-black pb-4">
              <h3 className="text-xl font-bold mb-1">
                Higher Secondary Education (12th)
              </h3>
              <p className="text-black mb-1">
                Ushumpur Adarsha Uchcha Vidyalaya
              </p>
              <ul className="list-disc ml-5 text-black">
                <li>82.2%</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-1">
                Secondary Education (10th)
              </h3>
              <p className="text-black mb-1">
                Ushumpur Adarsha Uchcha Vidyalaya
              </p>
              <ul className="list-disc ml-5 text-black">
                <li>87.3%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;