"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Utility function to split text into an array of words with index
const splitTextIntoWords = (text) => {
    return text.split(' ').map((word, index) => ({ word, index }));
};

// Animation settings for smooth fade-in and scale effect
const animationSettings = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeInOut" },
};

// Spring animation settings for text reveal with faster speed
const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 23,
            delay: index * 0.13, // Faster reveal with reduced delay
        }
    })
};

// Gradient text styles
const gradientTextStyles = "text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500 uppercase font-bold";

const Page = () => {
    const [paragraphs] = useState([
        "Leveraging my expertise in web scraping, I have utilized Puppeteer and jsdom to develop a robust solution for data mining and tracking product prices. By extracting real-time pricing information from various sources, I can provide your business with valuable insights and trends, enabling better decision-making and competitive analysis. This approach will ensure you have accurate and up-to-date data to enhance your strategy and operations.",
        "Here's a brief introduction tailored to helping a school create a website for students to find accommodations: I have a strong background in open-source contributions and innovative development solutions. I’m excited to apply this experience to help your school create a user-friendly website where students can easily search for and find accommodations. By leveraging modern web technologies, I will ensure the platform is efficient, intuitive, and scalable, enhancing student access to housing information and improving their overall experience.",
        "I have actively contributed to open-source projects by fixing bugs, optimizing code, and developing features, which has sharpened my problem-solving skills. I will leverage this experience to tailor innovative, high-performance solutions for your business, enhance system efficiency, and drive growth. My collaborative approach ensures alignment with your goals and a strategic path to elevate your project."
    ]);

    return (
        <div className="space-y-10">
            {/* Section 1 */}
            <motion.div
                className="flex flex-col lg:flex-row items-center mb-10 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                {...animationSettings}
            >
                {/* Image Section */}
                <div className="relative w-full lg:w-1/2 h-64 mb-4 lg:mb-0">
                    <Image 
                        src={'/images/ecomerce.jpg'}
                        layout="fill" 
                        objectFit="cover" 
                        className="w-full h-full"
                        alt='E-commerce'
                    />
                </div>

                {/* Description Section */}
                <div className="w-full lg:w-1/2 lg:pl-6">
                    <motion.h1
                        className={`text-4xl text-center ${gradientTextStyles}`}
                        variants={textRevealVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                    >
                        Data Scrapping
                    </motion.h1>
                    <div className="mt-8">
                        {splitTextIntoWords(paragraphs[0]).map(({ word, index }) => (
                            <motion.span
                                key={index}
                                className="inline-block mr-2 text-sm text-slate-400"
                                variants={textRevealVariants}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                            >
                                {word}{" "}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                {...animationSettings}
            >
                {/* Description Section */}
                <div className="w-full lg:w-1/2 lg:pl-6">
                    <motion.h1
                        className={`text-4xl text-center ${gradientTextStyles}`}
                        variants={textRevealVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                    >
                        Accommodation
                    </motion.h1>
                    <div className="mt-8">
                        {splitTextIntoWords(paragraphs[1]).map(({ word, index }) => (
                            <motion.span
                                key={index}
                                className="inline-block mr-2 text-sm text-slate-400"
                                variants={textRevealVariants}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                            >
                                {word}{" "}
                            </motion.span>
                        ))}
                    </div>
                </div>
                {/* Image Section */}
                <div className="relative w-full lg:w-1/2 h-64 mb-4 lg:mb-0">
                    <Image 
                        src={'/images/appartment.png'}  
                        layout="fill" 
                        objectFit="cover"
                        className="w-full h-full"
                        alt='Accommodation'
                    />
                </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                {...animationSettings}
            >
                {/* Image Section */}
                <div className="relative w-full lg:w-1/2 h-64 mb-4 lg:mb-0">
                    <Image 
                        src={'/images/opensource.png'} 
                        layout='fill'  
                        objectFit="cover" 
                        className="w-full h-full"
                        alt='Open Source'
                    />
                </div>
                {/* Description Section */}
                <div className="w-full lg:w-1/2 lg:pl-6">
                    <motion.h1
                        className={`text-4xl text-center ${gradientTextStyles}`}
                        variants={textRevealVariants}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                    >
                        Open Source
                    </motion.h1>
                    <div className="mt-8">
                        {splitTextIntoWords(paragraphs[2]).map(({ word, index }) => (
                            <motion.span
                                key={index}
                                className="inline-block mr-2 text-sm text-slate-400"
                                variants={textRevealVariants}
                                initial="hidden"
                                animate="visible"
                                custom={index}
                            >
                                {word}{" "}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Page;
