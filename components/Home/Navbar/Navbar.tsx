'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll';
import { PiPhone } from 'react-icons/pi';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';

type Props = {
    openNav: () => void;
}


const Navbar = ({ openNav }: Props) => {
    const t = useTranslations('nav');
    const [navBg, setNavBg] = useState(false);

    const navLinks = [
        { id: 1, url: "#home", label: t('home') },
        { id: 2, url: "#about", label: t('about') },
        { id: 3, url: "#experiences", label: t('experiences') },
        { id: 4, url: "#services", label: t('services') },
        { id: 5, url: "#testimonials", label: t('testimonials') },
        { id: 6, url: "#gallery", label: t('gallery') },
        { id: 7, url: "#contact", label: t('contact') },
    ];

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
                <div className="flex items-center justify-center flex-col w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-45 lg:h-45">
                    <Image
                        src="/images/logoDark.png"
                        alt="logo"
                        width={180}
                        height={180}
                        className="w-full h-full object-contain"
                        priority
                    />
                </div>
            </div>
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-10">
                {navLinks.map((link) => (
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
                        {link.label}
                    </ScrollLink>
                ))}  
            </div>
            {/*Buttons*/}
            <div className="flex items-center space-x-4">
                <LanguageSwitcher />
                <ScrollLink
                    to="contact"
                    smooth={true}
                    offset={-100}
                    duration={600}
                    className="inline-block"
                    tabIndex={0}
                    role="button"
                >
                    <button
                        className="
                            px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-[#0055ff] hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2
                            sm:px-8 sm:py-3.5
                            px-4 py-2
                            text-xs
                            sm:text-sm
                        "
                    >
                        <PiPhone className="w-5 h-5 sm:w-5 sm:h-5 w-4 h-4" />
                        <span className="whitespace-nowrap">{t('bookCall')}</span>
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