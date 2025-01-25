import React from "react";
import Sidebar from "@/Components/Sidebar";
import Mainbar from "@/Components/Mainbar";
import RightSidebar from "@/Components/RightSidebar";

import { projects } from "@/utils/data/projectData";
import { blogs } from "@/utils/data/blogData";

const page = () => {
  return (
    <div>
      <div className="flex flex-row">
        <Sidebar />
        <Mainbar projects={projects} blogs={blogs} />
        <RightSidebar />
      </div>
    </div>
  );
};

export default page;
