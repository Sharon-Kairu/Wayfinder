'use client'
import React, { useState } from 'react'
import NavBar from './NavBar'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

  const [showMobileNav, setShowMobileNav]=useState(false);

  const openNavHandler=()=>setShowMobileNav(true);
  const closeNavHandler=()=>setShowMobileNav(false);
  return (
    <div>
        <NavBar openNav={openNavHandler}/>
        <MobileNav closeNav={closeNavHandler} showNav={showMobileNav}/>
    </div>
  )
}

export default ResponsiveNav