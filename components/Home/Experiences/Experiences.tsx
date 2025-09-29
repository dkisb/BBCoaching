'use client'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import { useTranslations } from 'next-intl'

const Experiences = () => {
  const t = useTranslations('experiences');
  
  const experiencesList = [
    { id: 1, image: "/images/world-champs.jpg", title: t('list.nationalChampion') },
    { id: 2, image: "/images/martinka2.jpeg", title: t('list.ceeChampionship'), company: "KSB Racing Team" },
    { id: 3, image: "/images/markusz.jpeg", title: t('list.bdpChampionships') },
    { id: 4, image: "/images/rx2.jpg", title: t('list.rallyCross') }
  ];
  
  return (
    <div id='experiences' className='pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>
        {t('title')} <br /> {" "}
        <span className='text-[#0055ff]'>{t('titleHighlight')}</span>
      </h1>
      <div className='w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16' data-aos="fade-up" data-aos-anchor-placement="top-center">
        {experiencesList.map((experience, i) => (
          <ExperienceCard key={experience.id} image={experience.image} title={experience.title} company={experience.company} data-aos-delay={i * 100} />
        ))}
      </div>
    </div>
  )
}

export default Experiences