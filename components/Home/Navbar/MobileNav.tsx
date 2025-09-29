'use client'
import React from 'react'
import { Link as ScrollLink } from "react-scroll"
import { CgClose } from 'react-icons/cg'
import { useTranslations } from 'next-intl'


type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ showNav, closeNav }: Props) => {
  const t = useTranslations('nav');
  
  const navLinks = [
    { id: 1, url: "#home", label: t('home') },
    { id: 2, url: "#about", label: t('about') },
    { id: 3, url: "#experiences", label: t('experiences') },
    { id: 4, url: "#services", label: t('services') },
    { id: 5, url: "#testimonials", label: t('testimonials') },
    { id: 6, url: "#gallery", label: t('gallery') },
    { id: 7, url: "#contact", label: t('contact') },
  ];

  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[100%]';


  return (
    <div>
      <div className={`fixed inset-0 ${navOpen} transform transition-all duration-500 z-[100002] bg-black/70 w-full h-screen`}>
        {/* navlinks */}
        <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-[#0055ff] space-y-6 z-[100005] right-0`}>
          {navLinks.map((link) => (
            <ScrollLink
              to={link.url.replace('#', '')}
              key={link.id}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeNav}
              className='cursor-pointer'
            >
              <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] border-white sm:text-[30px]'>{link.label}</p>
            </ScrollLink>
          ))}
          {/* cross icon */}
          <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6' />
        </div>
      </div>
    </div>
  )
}

export default MobileNav