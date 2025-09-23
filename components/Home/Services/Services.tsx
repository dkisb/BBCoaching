import React from 'react'
import ServiceCard from './ServiceCard'
import { ServicesList } from '../../../constant/constants'

const Services = () => {
  return (
    <div id='services' className='pt-16 pb-16 flex flex-col items-center justify-center'>
      <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-black'>Helping drivers <br /> <span className='text-[#0055ff]'>achieve their full potential</span></h1>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-10 mt-20 justify-items-center items-center'>
        {ServicesList.map((service, i) => (
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