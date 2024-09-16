import React, { useState } from 'react';
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { X, Twitter, Instagram, GitHub } from 'lucide-react'; 

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePolicyClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Main Page Content */}
      <div className="bg-slate-50 text-slate-800 min-h-screen flex flex-col">
        <div className="flex flex-col md:flex-row gap-10 items-center text-center md:text-left w-full max-w-4xl mx-auto p-6">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <Image
              src={'/assets/aboutimg.jpg'}
              width={400}
              height={500}
              className="rounded-sm"
              alt="About Image"
            />
          </div>
          <div className="w-full md:w-3/5">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500 w-full md:w-full lg:w-4/5 xl:w-4/5 mx-auto">
              About Me
            </h1>
            <p className="text-base opacity-80 mb-4">
              Hi, I'm Emmanuel, a Fullstack Software Developer based in Kenya. I have 7 months of experience in web applications, skilled in React, Next.js, Tailwind CSS, Python, Django, MongoDB, Prisma, and MySQL. I have a strong foundation in both frontend and backend development, with a passion for best practices and collaborative learning.
            </p>
            <button
              type="button"
              className="bg-gradient-to-r from-teal-600 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white py-2 px-4 rounded"
              onClick={handlePolicyClick}
            >
              Contact
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-800 text-white py-4 mt-auto">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Emmanuel. All rights reserved.
            </p>
            <div className="mt-2">
              <a href="#!" className="text-teal-400 hover:underline" onClick={handlePolicyClick}>
                Privacy Policy
              </a>
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6 text-teal-400 hover:text-teal-600" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-teal-400 hover:text-teal-600" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <GitHub className="h-6 w-6 text-teal-400 hover:text-teal-600" />
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* Modal */}
      <Transition
        show={isModalOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Privacy Policy</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="text-sm text-gray-700">
              {/* Replace with actual privacy policy content */}
              This is where your privacy policy content will go. You can include details about how user data is handled, stored, and protected.
            </p>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default HomePage;
