import React from 'react'
import ExperienceCard from './ExperienceCard'
import { ExperiencesList } from '../../../constant/constants'

const Experiences = () => {
  return (
    <div id='experiences' className='pt-16 pb-16'>
<h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
            A small section of recents <br /> {" "}
            <span className='text-[#0055ff]'>work experiences</span>
            </h1>
        <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16' data-aos="fade-up" data-aos-anchor-placement="top-center">
            {ExperiencesList.map((experience, i) => (
                <ExperienceCard key={experience.id} image={experience.image} title={experience.title} company={experience.company} data-aos-delay={i * 100} />
            ))}
        </div>
    </div>
  )
}

export default Experiences