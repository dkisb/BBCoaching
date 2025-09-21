import React from 'react'
import ResumeCard from './ResumeCard'

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
            {/* Work Experience */}
            <div>
                <h1 className='text-3xl font-bold sm:text-4xl text-white'>My Work <span className='text-[#0055ff]'>Experience</span></h1>
                <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <ResumeCard Icon={"/images/tms-logo.png"} role={"Motorsport Performance Analyst"} company={"Top Motorsport Karting Team"} duration={"2021 - Present"} />
                    <ResumeCard 
                        Icon={"/images/logoDark.png"} 
                        role={"1 on 1 Driver Coaching"} 
                        duration={"2024 - Present"} 
                        description={
                          "Personalized 1-on-1 coaching to improve lap times, racecraft, and consistency with data-driven feedback and expert guidance."
                        }
                    />
                    <ResumeCard Icon={"/images/renauer-logo.png"} role={"Driver Coach & Performance Analyst"} company={"Renauer Motorsport F4 Team"} duration={"2025 - Present"} />
                </div>
            </div>
            {/* Personal Achievements de igazából lehet bármi */}
            <div>
                <h1 className='text-3xl font-bold sm:text-4xl text-white'>My <span className='text-[#0055ff]'>Achievements</span></h1>
                <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <ResumeCard Icon={"/images/hero2.jpg"} role={"Hungarian Rookie of the Year"} duration={"2019"} />
                    <ResumeCard Icon={"/images/about.jpg"} role={"Hungarian National Karting Champion"} duration={"2022"} />
                    <ResumeCard Icon={"/images/world-champs.jpg"} role={"World Championship Finalist"} duration={"2022"} />
                    <ResumeCard Icon={"/images/markusz.jpeg"} role={"Hungarian National Champion"} duration={"2024"} description='Won the Hungarian National Karting Championship in 2024 as a coach.' />
                    <ResumeCard Icon={"/images/bdp.jpeg"} role={"CEE Karting European Championship 3rd place"} duration={"2025"} description='Finished in the top 3 in the CEE Karting European Championship as a coach in 2025.' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume