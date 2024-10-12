"use client"; // Ensure client-side rendering

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

// My project data
export const projects = [
  {
    name: 'Apartment Website',
    description: 'A sleek platform showcasing rental listings, designed to enhance user experience with advanced JavaScript and React features.',
    url: 'https://example.com/project-one',
    image: '/images/project1.avif'
  },
  {
    name: 'Modern E-commerce & Dashboard',
    description: 'An all-in-one solution for online shopping and inventory management, combining a user-friendly interface with robust backend capabilities.',
    url: 'https://example.com/project-three',
    image: '/images/project3.jpg'
  },
  {
    name: 'Job Hiring Site',
    description: 'A comprehensive recruitment platform that connects employers and job seekers, featuring streamlined applications and intuitive search functionalities.',
    url: 'https://example.com/project-five',
    image: '/images/project5.jpg'
  },
  {
    name: 'Health Care System',
    description: 'A digital solution for managing patient data and appointments, focusing on accessibility and efficiency for healthcare providers and patients alike.',
    url: 'https://example.com/project-six',
    image: '/images/project6.avif'
  },
];

// Function to split text into an array of words
const splitTextIntoWords = (text) => {
  return text.split(' ').map((word, index) => ({ word, index }));
};

// Animation settings for smooth fade-in and scale effect
const animationSettings = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

// Adjusted spring animation settings for stronger bounce
const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 280,
      damping: 23,
      delay: index * 0.08,
    }
  })
};

// Gradient text styles
const gradientTextStyles = "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 uppercase font-bold";

// Spin effect settings
const spinEffect = {
  initial: { rotate: 0 },
  animate: { rotate: 360 },
  transition: { duration: 2, repeat: Infinity, ease: "linear" }
};

const Page = () => {
  return (
    <section id="portfolio" className="py-8 px-4 sm:px-8 md:px-10 bg-slate-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className={`text-center text-3xl mx-auto my-10 ${gradientTextStyles}`}
          variants={animationSettings}
          initial="hidden"
          animate="animate"
        >
          My Projects
        </motion.h2>

        <motion.p
          className="text-center w-full mx-auto my-8 mb-20 text-slate-400 text-sm"
          variants={textRevealVariants}
          initial="hidden"
          animate="visible"
        >
          {splitTextIntoWords('Welcome to my projects! Here, you’ll find a selection of projects that showcase my growth and skills as a developer. Each project highlights different aspects of my skills in creating responsive websites to developing complex applications.').map(({ word, index }) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="border rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300 w-full sm:w-11/12 md:w-11/12 lg:w-full xl:w-full"
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
                <motion.h3
                  className="text-xl font-semibold text-slate-400 mb-2"
                  variants={animationSettings}
                  initial="hidden"
                  animate="animate"
                >
                  {project.name}
                </motion.h3>
                <motion.p
                  className="text-gray-400 mb-4 text-[12px]"
                  variants={textRevealVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {splitTextIntoWords(project.description).map(({ word, index }) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-2"
                      variants={textRevealVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                    >
                      {word}{" "}
                    </motion.span>
                  ))}
                </motion.p>

                <span
                  className="block text-blue-500 hover:underline text-sm text-center cursor-pointer"
                  onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
                >
                  View the site
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
