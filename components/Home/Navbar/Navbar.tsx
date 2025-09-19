'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { NavLinks } from '../../../constant/constants';
import { Link as ScrollLink } from 'react-scroll';
import { PiPhone } from 'react-icons/pi';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
    openNav: () => void;
}


const Navbar = ({ openNav }: Props) => {

    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if(window.scrollY > 90) setNavBg(true);
            if(window.scrollY < 90) setNavBg(false);
        }
        window.addEventListener('scroll', handleResize);
        return () => window.removeEventListener('scroll', handleResize);
    }, []);



  return (
    <div className={`transition-all ${navBg ? 'bg-white/90 shadow-md' : 'bg-white backdrop-blur'} duration-200 h-[12vh] z-[10000] fixed w-full`}>
        <div className="flex items-center h-full justify-between w-90% mx-auto">
            <div className="flex items-center space-x-2">
                {/* Logo */}
                <div className="w-25 h-25 flex items-center justify-center flex-col">
                    <Image src="/images/logoDark.png" alt="logo" width={300} height={300}/>
                </div>
                <h1 className='text-xl hidden sm:block md:text-2xl font-bold text-black'>BB Coaching</h1>
            </div>
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-10">
                {NavLinks.map((link) => (
                    <ScrollLink
                        to={link.url.replace('#', '')}
                        smooth={true}
                        offset={-100}
                        duration={600}
                        key={link.id}
                        className="text-base hover:text-cyan-500 text-black font-medium transition-all duration-200 cursor-pointer"
                        style={{ cursor: 'pointer', display: 'inline-block' }}
                        tabIndex={0}
                        role="button"
                    >
                        {link.lable}
                    </ScrollLink>
                ))}  
            </div>
            {/*Buttons*/}
            <div className="flex items-center space-x-4">
                <ScrollLink
                    to="contact"
                    smooth={true}
                    offset={-100}
                    duration={600}
                    className="inline-block"
                    tabIndex={0}
                    role="button"
                >
                    <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2'>
                        <PiPhone className='w-5 h-5' />
                        <span>Book a call</span>
                    </button>
                </ScrollLink>
                { /* Burger Menu */}
                <HiBars3BottomRight onClick={openNav} className='w-8 h-8 text-black cursor-pointer lg:hidden' />

            </div>
        </div>
    </div>
  )
}

export default Navbar;