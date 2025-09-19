import React from 'react'
import ServiceCard from './ServiceCard'
import { ServicesList } from '../../../constant/constants'

const Services = () => {
  return (
    <div className='pt-16 pb-16'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black'>Helping drivers <br /> achieve their full potential</h1>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md: grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center'>
        {ServicesList.map((service, i) => (
          <div key={service.id} data-aos-delay={i * 100} >
            <ServiceCard Icon={service.icon} name={service.name} description="I analyze your driving style and provide you with a detailed report on your performance." />
          </div>
        ))}
      </div>
    </div>
  )
} 

export default Services