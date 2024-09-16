"use client"; // Ensure client-side rendering

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

// My project data
export const projects = [
  {
    name: 'Appartment Website',
    description: 'In this project I have been able to sharpen my skill of higher order function in js and react.',
    url: 'https://example.com/project-one',
    image: '/images/project1.avif'
  },
  {
    name: 'Data scraping site',
    description: 'A brief description of Project Two.',
    url: 'https://example.com/project-two',
    image: '/images/project2.webp'
  },
  {
    name: 'Modern Ecomerce & Dashboard',
    description: 'A brief description of Project Three.',
    url: 'https://example.com/project-three',
    image: '/images/project3.jpg'
  },
  {
    name: 'Discord Chatting Site',
    description: 'A brief description of Project Four.',
    url: 'https://example.com/project-four',
    image: '/images/project4.jpg'
  },
  {
    name: 'Job Hiring Site',
    description: 'A brief description of Project Five.',
    url: 'https://example.com/project-five',
    image: '/images/project5.jpg'
  },
  {
    name: 'Health Care System',
    description: 'A brief description of Project Six.',
    url: 'https://example.com/project-six',
    image: '/images/project6.avif'
  },
  {
    name: 'Travel Advisor',
    description: 'A brief description of Project Seven.',
    url: 'https://example.com/project-seven',
    image: '/images/project7.avif'
  },
  {
    name: 'E-learning Portal',
    description: 'A brief description of Project Eight.',
    url: 'https://example.com/project-eight',
    image: '/images/project8.jpeg'
  }
];

export const images = [
  {
    image1: '/assets/typescript.png',
    image2: '/assets/next.jpg',
    image3: '/assets/tailwiind.png',
  },
  {
    image1: '/assets/next.jpg',
    image2: '/assets/tailwiind.png',
    image3: '/assets/typescript.png',
  },
  {
    image1: '/assets/react.png',
    image2: '/assets/mysql.png',
    image3: '/assets/tailwiind.png',
  },
  {
    image1: '/assets/django.png',
    image2: '/assets/bootstrap.png',
    image3: '/assets/mysql.png',
  },
  {
    image1: '/assets/next.jpg',
    image2: '/assets/prisma.png',
    image3: '/assets/typescript.png',
  },
  {
    image1: '/assets/next.jpg',
    image2: '/assets/typescript.png',
    image3: '/assets/mongo.webp',
  },
  {
    image1: '/assets/next.jpg',
    image2: '/assets/typescript.png',
    image3: '/assets/tailwiind.png',
  },
  {
    image1: '/assets/django.png',
    image2: '/assets/react.png',
    image3: '/assets/mysql.png'
  }
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

                {/* Add images here with spin effect */}
                <div className="flex gap-2 mb-4">
                  {images[index] && (
                    <>
                      <motion.div
                        className="relative w-7 h-7"
                        variants={spinEffect}
                        initial="initial"
                        animate="animate"
                      >
                        <Image 
                          src={images[index].image1} 
                          alt={`Image 1 for ${project.name}`} 
                          layout="fill" 
                          objectFit="cover"
                          className="w-full h-full rounded"
                        />
                      </motion.div>
                      <motion.div
                        className="relative w-7 h-7"
                        variants={spinEffect}
                        initial="initial"
                        animate="animate"
                      >
                        <Image 
                          src={images[index].image2} 
                          alt={`Image 2 for ${project.name}`} 
                          layout="fill" 
                          objectFit="cover"
                          className="w-full h-full rounded"
                        />
                      </motion.div>
                      <motion.div
                        className="relative w-7 h-7"
                        variants={spinEffect}
                        initial="initial"
                        animate="animate"
                      >
                        <Image 
                          src={images[index].image3} 
                          alt={`Image 3 for ${project.name}`} 
                          layout="fill" 
                          objectFit="cover"
                          className="w-full h-full rounded"
                        />
                      </motion.div>
                    </>
                  )}
                </div>
                
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
