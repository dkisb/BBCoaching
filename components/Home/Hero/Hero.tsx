'use client'
import React from 'react'
import Image from 'next/image'
import { BsArrowDownShort } from 'react-icons/bs'

const Hero = () => {
  return (
    <div className='relative h-screen flex items-center justify-center text-black overflow-hidden flex-col'>
        <div className='relative z-10 flex flex-col items-center'>
            <Image src="/images/hero2.jpg" alt="heroImage"  width={150} height={150} className='rounded-full border-8 border-[#0c0c48aa]' data-aos="fade-up" style={{ height: 'auto' }} />
            <h1 data-aos="fade-up" data-aos-delay="200" className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide'>Developing Champions <br />
                <span className='text-black '>of the future</span>
            </h1>
            <h2 data-aos="fade-up" data-aos-delay="400" className='mt-5 text-sm px-2 text-center sm: text-2xl font-medium flex items-center'>
                Hi! I&#39;m Bertold - Professional Motorsport Performance Analyst
            </h2>
            <button data-aos="fade-up" data-aos-delay="600" className='mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300
            cursor-pointer rounded-full text-lg font-medium'>
                <span className='text-white'>Read More</span>
                <BsArrowDownShort className='w-5 h-5 ml-2 inline-block text-white' />
            </button>
        </div>
    </div>
  )
}

export default Hero