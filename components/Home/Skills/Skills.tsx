'use client'
import React from 'react'
import { SkillsList } from '../../../constant/constants';
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  return (
    <div className='text-white pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black'>My <span className='text-[#0055ff]'>Skills & Abilities</span></h1>
      <div className='flex flex-wrap justify-center gap-6 mt-16'>
        {SkillsList.map((s, i) => (
         <Tilt key={s.id} scale={1.5} transitionSpeed={400}>
            <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay={i * 100} className='bg-[#14134145] text-center w-40 h-48 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105'>
                <div className='text-5xl mb-4 text-[#0055ff]'>
                    <s.icon />
                </div>
                <p className='text-2xl font-semibold'>{s.percentage}%</p>
                <p className='text-white'>{s.name}</p>
            </div>
         </Tilt>
        ))}
      </div>
    </div>
  )
}

export default Skills