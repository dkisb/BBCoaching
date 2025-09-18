'use client'
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(true);
  }

  const handleHideNav = () => {
    setShowNav(false);
  }



  return (
    <div>
        <Navbar openNav={handleShowNav} />
        <MobileNav showNav={showNav} closeNav={handleHideNav} />
    </div>
  )
}   

export default ResponsiveNav