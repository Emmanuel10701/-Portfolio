"use client"; // Ensure client-side rendering

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname

// Navbar
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname(); // Use the usePathname hook to get current path

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleLinkClick = () => {
    setOpen(false); // Close the menu when a link is clicked
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && open) {
      setOpen(false); // Close the menu if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white pt-0 bg-[url('/assets/bg.png')] bg-cover bg-center relative">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={'/assets/minelogo.png'} width={130} height={90} alt='logo' />
        </div>

        {/* Menu for smaller screens */}
        <ul
          className={`fixed top-0 right-0 h-screen w-3/4 bg-green-800 text-white transform ${open ? 'translate-x-0 z-50' : 'translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col items-start pt-16 md:hidden`}
          ref={menuRef}
        >
          <li className="absolute top-8 right-8">
            <button onClick={handleToggle} className="text-white text-4xl z-10 flex items-center justify-center mb-8">
              &times;
            </button>
          </li>
          {links.map((link, index) => (
            <li key={index} className="p-4">
              <Link href={link.path} onClick={handleLinkClick}>
                <span className={`text-white text-sm hover:text-slate-400 ${pathname === link.path ? 'font-bold text-blue-500' : ''}`}>
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu for larger screens */}
        <ul className="hidden md:flex md:flex-row md:space-x-4 md:bg-transparent md:text-black">
          {links.map((link, index) => (
            <li key={index} className="p-4">
              <Link href={link.path} onClick={handleLinkClick}>
                <span
                  className={`text-md ${pathname === link.path ? 'text-blue-500 font-bold' : 'text-zinc-400 hover:text-slate-400'}`}
                >
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4 ml-3">
          <a href="https://github.com/Emmanuel10701" target="_blank" rel="noopener noreferrer" aria-label="github">
            <Image src={'/images/github.png'} alt="github" width={25} height={25} className='cursor-pointer' objectFit='cover' />
          </a>
          <a href="https://x.com/EmmanuelJumaste" target="_blank" rel="noopener noreferrer" aria-label="twitter">
            <Image src={'/images/twitter.png'} alt="twitter" width={25} height={25} className='cursor-pointer' objectFit='cover' />
          </a>
          <a href="https://www.linkedin.com/in/emmanuel-makau-40a12028b/" target="_blank" rel="noopener noreferrer" aria-label="linkedin">
            <Image src={'/images/linkedin1.png'} alt="linkedin" width={25} height={25} className='cursor-pointer' objectFit='cover' />
          </a>
        </div>

        {/* Menu Toggle for Mobile */}
        <div className="nav-toggle flex md:hidden relative z-10">
          <Image src={'/assets/menu.png'} alt="Menu" width={50} height={50} className='p-2 cursor-pointer' aria-label="Menu" onClick={handleToggle} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
