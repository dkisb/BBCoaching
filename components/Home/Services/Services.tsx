'use client'
import React from 'react'
import ServiceCard from './ServiceCard'
import { FaChartLine, FaCar, FaBrain } from 'react-icons/fa'
import { useTranslations } from 'next-intl'

const Services = () => {
  const t = useTranslations('services');
  
  const servicesList = [
    {
      id: 1,
      icon: FaChartLine,
      name: t('performanceAnalysis.name'),
      description: t('performanceAnalysis.description')
    },
    {
      id: 2,
      icon: FaCar,
      name: t('vehicleSetup.name'),
      description: t('vehicleSetup.description')
    },
    {
      id: 3,
      icon: FaBrain,
      name: t('mentalTraining.name'),
      description: t('mentalTraining.description')
    }
  ];
  
  return (
    <div id='services' className='pt-16 pb-16 flex flex-col items-center justify-center'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black'>{t('title')} <br /> <span className='text-[#0055ff]'>{t('titleHighlight')}</span></h1>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-10 mt-20 justify-items-center items-center'>
        {servicesList.map((service, i) => (
          <div
            key={service.id}
            data-aos-delay={i * 100}
            className="w-full h-full flex"
            style={{ minHeight: '350px', display: 'flex' }}
          >
            <ServiceCard Icon={service.icon} name={service.name} description={service.description} />
          </div>
        ))}
      </div>
    </div>
  )
} 

export default Services