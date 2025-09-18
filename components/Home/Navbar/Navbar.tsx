'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { NavLinks } from '../../../constant/constants';
import Link from 'next/link';
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
    <div className={`transition-all ${navBg ? 'bg-grey shadow-md' : 'fixed'} duration-200 h-[12vh] z-[10000] fixed w-full`}>
        <div className="flex items-center h-full justify-between w-90% mx-auto">
            <div className="flex items-center space-x-2">
                {/* Logo */}
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
                    <Image src="/images/logo.svg" alt="logo" width={200} height={200} className='bg-black'/>
                </div>
                <h1 className='text-xl hidden sm:block md:text-2xl font-bold text-black'>BB Coaching</h1>
            </div>
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-10">
                {NavLinks.map((link) => (
                    <Link
                        href={link.url}
                        key={link.id}
                        className="text-base hover:text-cyan-500 text-black font-medium transition-all duration-200"
                    >
                        <p>{link.lable}</p>
                    </Link>
                ))}  
            </div>
            {/*Buttons*/}
            <div className="flex items-center space-x-4">
                <button className='px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2'>
                    <PiPhone className='w-5 h-5' />
                    <span>Book a call</span>
                </button>
                { /* Burger Menu */}
                <HiBars3BottomRight onClick={openNav} className='w-8 h-8 text-black cursor-pointer lg:hidden' />

            </div>
        </div>
    </div>
  )
}

export default Navbar;