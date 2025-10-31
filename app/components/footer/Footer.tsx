'use client'
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { Links } from '../../constants/constants'
import { FiMail, FiPhone } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 text-white text-center mt-10 p-4">
      
      <hr />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div className="flex flex-col items-center justify-center mt-6 p-6">
            <Image
              src='/good-logo.png'
              alt='Logo'
                width={100}
                height={100}
                
            />
          <h1 className="text-xl font-semibold text-blue-500">
            WAYFINDER RESEARCH & CONSULTANCY
          </h1>
        </div>

       
        <div className="flex flex-col items-center justify-center mt-6 p-6 space-y-2">
          {Links.map((link) => (
            <Link
              key={link.id}
              to={link.url}
              smooth={true}        
              duration={800}       
              offset={-70}          
              spy={true}
              className="hover:text-orange-500 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        
        <div className="flex flex-col items-center justify-center mt-6 p-6 space-y-3">
          <div className="flex items-center gap-2">
            <FiPhone size={20} />
            <span>+254 727 103426</span>
          </div>
          
          <div className="flex items-center gap-2">
            <FiPhone size={20} />
            <span>+252 612 450115</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail size={20} />
            <span>info.wayfinderconsultancy@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail size={20} />
            <span>info@wayfinderconsultancy.org</span>
          </div> 
        </div>
      </div>

      <div className="text-center font-bold text-orange-500 text-sm mt-10 border-t border-gray-200 pt-4">
        © {new Date().getFullYear()} WAYFINDER RESEARCH & CONSULTANCY. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
