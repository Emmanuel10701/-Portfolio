"use client"; // Ensure client-side rendering

import Image from 'next/image';
import { motion } from 'framer-motion';

// Variants for the entire section
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// Variants for the text
const textVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, type: 'spring', stiffness: 100 } },
};

// Variants for each technology icon with different directions
const iconVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.5 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 150,
      delay: index * 0.1 // Stagger effect
    },
  }),
};

// Variants for the spinner with adjusted speed and size
const spinnerVariants = {
  animate: {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      duration: 5, 
      ease: "linear",
    },
  },
};

const imageUrls = [
  '/assets/django.png',
  '/assets/git.jpg',
  '/assets/html.png',
  '/assets/javascript.webp',
  '/assets/mysql.png',
  '/assets/typescript.png',
  '/assets/next copy.jpg',
  '/assets/prisma.png',
  '/assets/python.webp',
  '/assets/react.png',
  '/assets/tailwiind.png', 
  '/assets/css.png',
  '/assets/github.png',
  '/assets/bootstrap.png',
];

const About = () => {
  return (
    <motion.div
      className="bg-slate-50 text-slate-800 min-h-screen flex flex-col items-center justify-center p-6"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col md:flex-row gap-10 items-center text-center md:text-left w-full max-w-4xl mx-auto">
        <div className="flex-shrink-0 relative mb-4 md:mb-0 md:mr-6">
          <Image
            src='/assets/aboutimg.jpg'
            width={400}
            height={400}
            className="rounded-lg"
            alt="About Emmanuel - Fullstack Developer"
            priority
          />
          <motion.div
            className="absolute bottom-0 right-0 w-20 h-20 border-4 border-white rounded-full flex items-center justify-center"
            variants={spinnerVariants}
            animate="animate"
          >
            <Image
              src="/images/spiner.png" 
              alt="Loading..."
              layout="fill"
              objectFit="contain"
              className="w-16 h-16"
            />
          </motion.div>
        </div>
        <div className="w-full md:w-3/5">
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            About Me
          </motion.h1>
          <p className="opacity-80 mb-4 text-xs md:text-sm lg:text-md xl:text-lg text-slate-400">

Hi, I'm Emmanuel, a Fullstack Software Developer based in Kenya. I'm skilled in React, Next.js, Tailwind CSS, Python, Django, MongoDB, Prisma, and MySQL. I have a strong foundation in both frontend and backend development, with a passion for best practices and collaborative learning.          </p>

          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500 my-10"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Technologies
          </motion.h1>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start overflow-x-hidden overflow-hidden">
            {imageUrls.map((src, index) => (
              <motion.div
                key={index}
                className="relative w-8 h-8 md:w-15 md:h-15 flex items-center "
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                <Image
                  src={src}
                  alt={`Technology Image ${index + 1}`}
                  width={30}
                  height={30}
                  objectFit="contain"
                  className="rounded-sm"
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className='flex flex-wrap justify-around items-center mt-10 gap-8'
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className='flex flex-col items-center' >
              <h1 className="text-2xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">
                5+
              </h1>
              <p className='text-sm text-gray-500'>Happy Clients</p>
            </motion.div>
            <motion.div className='flex flex-col items-center justify-center' >
              <h1 className="text-2xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">
                1+
              </h1>
              <p className='text-sm text-gray-500'>years of Experience</p>
            </motion.div>
            <motion.div className='flex flex-col items-center' >
              <h1 className="text-2xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500">
                10+
              </h1>
              <p className='text-sm text-gray-500'>Projects</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
