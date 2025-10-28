'use client'
import React, { useState, useEffect } from 'react';
import { Links } from '@/app/constants/constants';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const NavBar = ({ openNav }: Props) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full flex items-center p-4 md:p-6 justify-between z-50 transition-colors duration-300 ${
        isScroll ? 'bg-blue-900 shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Logo and Title */}
      <div className="flex items-center gap-3.5">
        <Image
          src="/good-logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="object-contain "
        />
        <h1 className="font-bold text-blue-500 md:text-2xl">
          WAYFINDER RESEARCH & CONSULTANCY
        </h1>
      </div>     
      <div
        className={`hidden md:flex gap-10 mr-10 ${
          isScroll ? 'text-orange-400' : 'text-white'
        }`}
      >
        {Links.map((link) => (
          <Link
            key={link.id}
            to={link.url}
            smooth
            duration={800}
            offset={-70}
            spy
            className="cursor-pointer hover:text-orange-300 transition"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <HiBars3BottomRight
        onClick={openNav}
        className={`w-8 h-8 cursor-pointer md:hidden transition-all duration-300 ${
          isScroll ? 'text-white' : 'text-blue-900'
        }`}
      />
    </div>
  );
};

export default NavBar;
