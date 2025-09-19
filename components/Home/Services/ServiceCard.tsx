import React from 'react'
import { IconType } from 'react-icons';

type Props = {
  Icon: IconType;
  name: string;
  description: string;
}

const ServiceCard = ({ Icon, name, description }: Props) => {
  return (
    <div data-aos="fade-right" data-aos-anchor-placement="center">
      <Icon className='w-10 h-10 text-black'/>
      <h1 className='text-xl mt-6 md:text-2xl font-bold text-black'>{name}</h1>
      <p className='mt-6 text-black'>{description}</p>
    </div>
  )
}

export default ServiceCard