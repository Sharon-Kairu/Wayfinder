'use client'
import React, { useState, useEffect } from 'react';
import { Links } from '@/app/constants/constants';
import { Link } from 'react-scroll'
import Image from 'next/image';

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    // Attach the scroll listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array: run once on mount

  return (
    <div
      className={`fixed w-full flex items-center p-6 ${
        isScroll ? 'bg-blue-900' : 'bg-transparent'
      } justify-between z-50 transition-colors duration-300`}
    >
      <div className="flex justify-center items-center gap-3.5">
        <Image
          src="/good-logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="object-contain"
        />
        <h1 className="font-bold text-blue-500 text-xl">WAYFINDER RESEARCH & CONSULTANCY</h1>
      </div>

      <div className={`flex gap-10 ${isScroll? 'text-orange-500':'text-white '} mr-10`}>
        {Links.map((link) => (
          <Link key={link.id}
              to={link.url}
              smooth={true}        
              duration={800}       
              offset={-70}          
              spy={true}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
