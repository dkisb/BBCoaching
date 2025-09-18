import React from 'react'
import Image from 'next/image'

type Props = {
  icon: string;
  name: string;
  description: string;
}

const ServiceCard = ({ icon, name, description }: Props) => {
  return (
    <div>
      <Image src={icon} alt={name} width={60} height={60} className='bg-black rounded-full'/>
      <h1 className='text-xl mt-6 md:text-2xl font-bold text-black'>{name}</h1>
      <p className='mt-6 text-black'>{description}</p>
    </div>
  )
}

export default ServiceCard