"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddTestimonial = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    author: "",
    position: "",
    text: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add testimonial');
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error('Error adding testimonial:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
    >
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white border-2 border-black p-6 rounded-2xl shadow-lg">
          <div className="bg-black text-white px-4 py-3 rounded-t-md mb-6">
            <h2 className="text-2xl font-bold tracking-widest">ADD_TESTIMONIAL.exe</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div>
              <label
                htmlFor="author"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                name="author"
                id="author"
                required
                value={formData.author}
                onChange={handleChange}
                className="mt-2 block w-full border-2 border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your name"
              />
            </div>

            {/* Position Input */}
            <div>
              <label
                htmlFor="position"
                className="block text-sm font-semibold text-gray-800"
              >
                Position
              </label>
              <input
                type="text"
                name="position"
                id="position"
                required
                value={formData.position}
                onChange={handleChange}
                className="mt-2 block w-full border-2 border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your position"
              />
            </div>

            {/* Testimonial Input */}
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-semibold text-gray-800"
              >
                Testimonial
              </label>
              <textarea
                name="text"
                id="text"
                required
                value={formData.text}
                onChange={handleChange}
                rows={5}
                className="mt-2 block w-full border-2 border-black p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Write your testimonial here..."
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="w-full bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => router.push("/")}
                className="w-full border-2 border-black px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default AddTestimonial;

