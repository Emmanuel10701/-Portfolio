"use client"; // Ensure client-side rendering

import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 text-gray-800 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center px-4">

        {/* Quick Links Section */}
        <div className="mb-6 lg:mb-0">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="text-slate-800 space-y-1">
            <li>
              <Link href="#about">
                <span className="hover:text-slate-600 text-sm hover:underline cursor-pointer">About Me</span>
              </Link>
            </li>
            <li>
              <Link href="#portfolio">
                <span className="hover:text-slate-600 text-sm hover:underline cursor-pointer">Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/path/to/resume.pdf" download>
                <span className="hover:text-slate-600 text-sm hover:underline cursor-pointer">Download Resume</span>
              </Link>
            </li>
            <li>
              <Link href="#services">
                <span className="hover:text-slate-600 text-sm hover:underline cursor-pointer">Services</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo and Other Information */}
        <div className="text-center py-4">
          <div className="flex justify-center mb-2">
            <Image src="/assets/minelogo.png" width={150} height={100} alt="logo" />
          </div>
          <p className="text-sm text-gray-900">&copy; {currentYear} Emmanuel. All rights reserved.</p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p className="text-gray-400">
            Email: <a href="mailto:emmanuelmakau90@gmail.com" className="font-bold hover:underline">emmanuelmakau90@gmail.com</a>
          </p>
          <p className="text-gray-400">
            Phone: <a href="tel:+0793472960" className="font-bold hover:underline">079 347 2960</a>
          </p>
          <div className="mt-2 flex space-x-4">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 flex items-center cursor-pointer">
              <FaTwitter className="mr-2" />
              Twitter
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 flex items-center cursor-pointer">
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600 flex items-center cursor-pointer">
              <FaGithub className="mr-2" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
