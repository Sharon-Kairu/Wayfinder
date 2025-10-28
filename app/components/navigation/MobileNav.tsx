'use client'
import React from 'react'
import { Links } from '../../constants/constants'
import { Link } from 'react-scroll'
import { CgClose } from "react-icons/cg"

type Props = {
  showNav: boolean
  closeNav: () => void
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-full"

  return (
    <div>
      {showNav && (
        <div
          onClick={closeNav}
          className="fixed inset-0 bg-black bg-opacity-70 z-[10040]"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-blue-900 text-white z-[10050] transform ${navOpen} transition-transform duration-500 shadow-2xl`}
      >
        {/* Close Button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-4 right-4 sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer hover:text-gray-200 transition"
        />

        {/* Nav Links */}
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-semibold tracking-wide">
          {Links.map((link) => (
            <Link
              key={link.id}
              to={link.url}
              smooth={true}        
              duration={800}       
              offset={-70}          
              spy={true}
              onClick={closeNav} 
              className="hover:text-[#f5deb3] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileNav
