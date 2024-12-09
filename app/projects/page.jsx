"use client"; // Ensure client-side rendering

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

// Data: Projects
export const projects = [
  {
    name: "Modern E-commerce & Dashboard",
    description:
      "An all-in-one solution for online shopping and inventory management, combining a user-friendly interface with robust backend capabilities.",
    url: "https://e-commerce-market-site.vercel.app", // Updated URL
    image: "/images/project3.jpg",
  },
  {
    name: "Apartment Website",
    description:
      "A sleek platform showcasing rental listings, designed to enhance user experience with advanced JavaScript and React features.",
    url: "https://apartments-site-rental.vercel.app", // Updated URL
    image: "/images/project1.avif",
  },
  {
    name: "Health Care System",
    description:
      "A digital solution for managing patient data and appointments, focusing on accessibility and efficiency for healthcare providers and patients alike.",
    url: "https://healthcare-project-sepia.vercel.app", // Keep this URL or replace as needed
    image: "/images/project6.avif",
  },
  {
    name: "Blog for developers",
    description:
      "A comprehensive recruitment platform that developers can post their latest updates and also connect with each other to discuss the trending technologies and news in tech.",
    url: "https://developers-home.vercel.app/", // Updated URL
    image: "/images/project5.jpg",
  },
];

// Animation Settings
const animationSettings = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

// Function to split text into words for animation
const splitTextIntoWords = (text) =>
  text.split(" ").map((word, index) => ({ word, index }));

// Page Component
const Page = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-10">
      {/* Introduction */}
      <section className="text-center py-10">
        <motion.h1
          className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent"
          initial={animationSettings.initial}
          animate={animationSettings.animate}
        >
          Work Experience
          </motion.h1>
        <motion.p
          className="text-gray-600 mt-4 text-md"
          initial={animationSettings.initial}
          animate={animationSettings.animate}
        >
          Dedicated Full-Stack Developer with expertise in modern web technologies,
          crafting seamless user experiences, and delivering impactful solutions.
        </motion.p>
      </section>

      {/* Work Experience Section */}
      <motion.section
        id="experience"
        className="mt-4 w-[80%] mx-auto  rounded-lg p-6  max-w-4xl"
        initial={animationSettings.initial}
        animate={animationSettings.animate}
      >
        <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent mb-4">
          Work Experience
        </h2>
        <div>
          <h3 className="font-semibold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Full Stack Web Developer
          </h3>
          <p className="text-sm bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Dedan Kimathi University of Technology
          </p>
          <p className="text-sm italic text-gray-500">January 2024 to October 2024</p>
          <ul className="list-disc list-inside mt-2">
            <li className="text-gray-600">
              Developed sports and club sites, leading to a 50% increase in event participation and 30% boost in efficiency.
            </li>
            <li className="text-gray-600">
              Streamlined event management processes and enhanced user engagement on university platforms.
            </li>
            <li className="text-gray-600">
              Created and maintained software solutions using C, Python, JavaScript, and TypeScript.
            </li>
            <li className="text-gray-600">
              Authored technical documentation, including API docs and user manuals.
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="portfolio" className="py-8 px-4 sm:px-8 md:px-10">
        <div className="container mx-auto">
          <motion.h2
            className="text-center text-2xl font-bold sm:text-3xl lg:text-4xl mx-auto my-10 bg-gradient-to-r from-orange-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent"
            initial={animationSettings.initial}
            animate={animationSettings.animate}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="text-center md:w-2/3 w-full mx-auto my-8 text-gray-600 text-sm"
            initial={animationSettings.initial}
            animate={animationSettings.animate}
          >
            {splitTextIntoWords(
              "Welcome to my projects! Here, you’ll find a selection of projects that showcase my growth and skills as a developer."
            ).map(({ word, index }) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                variants={animationSettings}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-blue-500 hover:underline text-sm text-center"
                  >
                    View the site
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
