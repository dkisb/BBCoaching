import React from 'react'
import ResumeCard from './ResumeCard'
import { FaCar, FaTrophy } from 'react-icons/fa'

const Resume = () => {
  return (
    <div className='pt-20 pb-16'>
        <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
            {/* Work Experience */}
            <div>
                <h1 className='text-3xl font-bold sm:text-4xl text-white'>My Work <span className='text-cyan-200'>Experience</span></h1>
                <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <ResumeCard Icon={FaCar} role={"Motorsport Performance Analyst"} company={"Mercedes-AMG Petronas F1 Team"} duration={"2021 - Present"} description={"I analyze your driving style and provide you with a detailed report on your performance."} />
                    <ResumeCard Icon={FaCar} role={"Motorsport Performance Analyst"} company={"Mercedes-AMG Petronas F1 Team"} duration={"2021 - Present"} description={"I analyze your driving style and provide you with a detailed report on your performance."} />
                    <ResumeCard Icon={FaCar} role={"Motorsport Performance Analyst"} company={"Mercedes-AMG Petronas F1 Team"} duration={"2021 - Present"} description={"I analyze your driving style and provide you with a detailed report on your performance."} />
                </div>
            </div>
            {/* Personal Achievements de igazából lehet bármi */}
            <div>
                <h1 className='text-3xl font-bold sm:text-4xl text-white'>My <span className='text-cyan-200'>Achievements</span></h1>
                <div className='mt-10' data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <ResumeCard Icon={FaTrophy} role={"Hungarian National Karting Champion"} duration={"2023"} />
                    <ResumeCard Icon={FaTrophy} role={"Hungarian National Karting Champion"} duration={"2023"} />
                    <ResumeCard Icon={FaTrophy} role={"Hungarian National Karting Champion"} duration={"2023"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume