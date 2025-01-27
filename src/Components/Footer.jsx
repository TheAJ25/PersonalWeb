"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-2 border-black text-white py-2 px-4 mt-2 flex justify-center items-center">
      <div className="bg-black text-white px-2 py-2 flex items-center justify-between">
        <p className="text-sm text-center">Copyright © {new Date().getFullYear()} Abhijit Shaw. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 