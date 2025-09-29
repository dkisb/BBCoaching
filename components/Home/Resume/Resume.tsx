'use client'
import React from 'react'
import ResumeCard from './ResumeCard'
import { useTranslations } from 'next-intl'

const Resume = () => {
  const t = useTranslations('resume');
  
  return (
    <div className='pt-20 pb-16'>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
            {/* Work Experience */}
            <div>
                <h1 className='text-3xl font-bold sm:text-4xl text-white'>{t('workExperience')} <span className='text-[#0055ff]'>{t('workExperienceHighlight')}</span></h1>
                <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <ResumeCard Icon={"/images/tms-logo.png"} role={t('jobs.tms.role')} company={t('jobs.tms.company')} duration={t('jobs.tms.duration')} />
                    <ResumeCard Icon={"/images/bdp-logo.jpg"} role={t('jobs.bdp.role')} company={t('jobs.bdp.company')} duration={t('jobs.bdp.duration')} />
                    <ResumeCard 
                        Icon={"/images/logoDark.png"} 
                        role={t('jobs.coaching.role')} 
                        duration={t('jobs.coaching.duration')} 
                        description={t('jobs.coaching.description')}
                    />
                    <ResumeCard Icon={"/images/renauer-logo.png"} role={t('jobs.renauer.role')} company={t('jobs.renauer.company')} duration={t('jobs.renauer.duration')} />
                </div>
            </div>
            {/* Personal Achievements */}
            <div>
                <h1 className='text-3xl font-bold sm:text-4xl text-white'>{t('achievementsTitle')} <span className='text-[#0055ff]'>{t('achievementsHighlight')}</span></h1>
                <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <ResumeCard Icon={"/images/hero2.jpg"} role={t('achievements.rookie.role')} duration={t('achievements.rookie.duration')} />
                    <ResumeCard Icon={"/images/about.jpg"} role={t('achievements.nationalChampion.role')} duration={t('achievements.nationalChampion.duration')} />
                    <ResumeCard Icon={"/images/world-champs.jpg"} role={t('achievements.worldChampionship.role')} duration={t('achievements.worldChampionship.duration')} />
                    <ResumeCard Icon={"/images/markusz.jpeg"} role={t('achievements.coachChampion.role')} duration={t('achievements.coachChampion.duration')} description={t('achievements.coachChampion.description')} />
                    <ResumeCard Icon={"/images/bdp.jpeg"} role={t('achievements.cee.role')} duration={t('achievements.cee.duration')} description={t('achievements.cee.description')} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume