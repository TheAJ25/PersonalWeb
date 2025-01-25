"use client";
import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import BookIcon from "@mui/icons-material/Book";
import PhoneIcon from "@mui/icons-material/Phone";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-2">
        {[
          { id: "about", icon: InfoIcon, label: "About" },
          { id: "experience", icon: WorkIcon, label: "Experience" },
          { id: "projects", icon: FolderOpenIcon, label: "Projects" },
          { id: "blogs", icon: BookIcon, label: "Blogs" },
          { id: "contact", icon: PhoneIcon, label: "Contact" },
        ].map((item) => (
          <div
            key={item.id}
            className="retro-button mb-2 w-full flex justify-center items-center gap-2 px-4 py-2 hover:bg-gray-100"
            onClick={() =>
              document
                .getElementById(item.id)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <item.icon fontSize="small" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
