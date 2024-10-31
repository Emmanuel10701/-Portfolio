"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Download } from 'lucide-react';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';
import "./globals.css";

const Home = () => {
  const navigate = useRouter();
  const [isDownloading, setIsDownloading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = () => {
    setIsProcessing(true);
    setTimeout(() => {
      navigate.push("/contact");
      setIsProcessing(false);
    }, 2000);
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/assets/Emmanuel_Makau_Resume (12).pdf'; // Updated path to your PDF
      link.download = 'emmanuel-resume.pdf';
      link.click();
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="bg-gray-100 text-gray-800 h-screen flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="transition-opacity duration-800 opacity-100 transform translate-y-0 mt-12">
          <Image
            src={'/assets/image.png'}
            width={200}
            height={200}
            className='rounded-full'
            alt='Logo of Emmanuel'
          />
        </div>

        <div className="text-center mt-5 transition-opacity duration-800 opacity-100 transform translate-y-0">
          <div className='flex items-center justify-center'>
            <h2 className='text-base md:text-lg lg:text-xl xl:text-2xl'>HI, I'M EMMANUEL</h2>
            <Image
              src={'/assets/hand1.png'}
              width={30}
              height={30}
              className='rounded-full ml-2'
              alt='Hand waving'
            />
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500 mx-auto">
            Fullstack Software Developer based in Kenya
          </h1>
          <p className="text-xs md:text-sm lg:text-md xl:text-lg text-gray-400 mb-8 mx-auto">
            Developer skilled in React, Next.js, Tailwind CSS, Python, Django, MongoDB, Prisma, and MySQL. With a strong foundation in both frontend and backend development, I am passionate about best practices and collaborative learning. Dedicated to creating innovative and efficient solutions, I strive to stay updated with the latest technologies and industry trends.
          </p>
          <div className='flex items-center justify-center gap-4'>
            <button
              type="button"
              onClick={handleClick}
              className="bg-gradient-to-r from-teal-600 to-blue-500 hover:from-teal-700 hover:to-blue-600 text-white py-2 px-4 w-40 md:w-44 lg:w-48 rounded-full text-sm md:text-base lg:text-lg flex items-center justify-center"
              disabled={isProcessing}
            >
              {isProcessing ? <CircularProgress size={24} color="inherit" className="mr-2" /> : 'Contact'}
              {isProcessing && <span>Processing...</span>}
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="bg-gray-200 text-gray-800 py-2 px-4 w-40 md:w-44 lg:w-48 rounded-full text-sm md:text-base lg:text-lg flex items-center justify-center gap-2"
              disabled={isDownloading}
            >
              {isDownloading ? <CircularProgress size={24} color="inherit" className="mr-2" /> : 'My Resume'}
              {isDownloading && <span>Downloading...</span>}
              <Download />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
