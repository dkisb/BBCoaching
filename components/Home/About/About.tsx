import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <section id="about" className='pt-16 pb-16 text-black'>
      <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* image */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className='flex justify-center'>
          <Image
            src="/images/about.jpg"
            alt="About BB Coaching"
            width={520}
            height={520}
            className='rounded-3xl shadow-lg object-cover'
            style={{ height: 'auto' }}
          />
        </div>
        {/* text */}
        <div>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>About <span className='text-[#0055ff]'>BB Coaching</span></h2>
          <p className='mt-6 text-gray-600 text-base sm:text-lg'>
            I&#39;m Bertold, a professional motorsport performance analyst focused on developing drivers into future champions. I combine data-driven insights with real-world racing experience to help drivers unlock speed, build consistency, and gain a competitive edge.
          </p>
          <p className='mt-4 text-gray-600 text-base sm:text-lg'>
            From telemetry deep dives and vehicle setup guidance to race craft and mental performance, my approach is holistic and tailored to each driver&#39;s goals. Whether you&#39;re aiming for podiums or building a foundation in junior categories, I bring the tools and structure to move you forward.
          </p>
          <div className='mt-8 grid grid-cols-2 gap-4'>
            <div className='bg-[#14134120] rounded-2xl p-5'>
              <p className='text-xl font-semibold'>Over a decade</p>
              <p className='text-gray-600'>In motorsports</p>
            </div>
            <div className='bg-[#14134120] rounded-2xl p-5'>
              <p className='text-xl font-semibold'>Data-Driven</p>
              <p className='text-gray-600'>Analysis &amp; Coaching</p>
            </div>
          </div>
          <Link to="contact" smooth={true} duration={1000} offset={-100} className='inline-block mt-8 px-10 py-4 bg-[#0055ff] hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-white'>
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About