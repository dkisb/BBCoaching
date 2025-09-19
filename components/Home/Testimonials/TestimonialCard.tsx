import React from 'react'
import Image from 'next/image'

type Props = {
  image: string;
  name: string;
  role?: string;
  description: string;
}


const TestimonialCard = ({ image, name, role, description }: Props) => {
  return (
    <div className='m-2'>
        <Image src={image} alt={name} width={60} height={60} className='rounded-full' />
        <p className='mt-6 text-base text-gray-200 font-medium break-words overflow-hidden text-ellipsis max-h-32 line-clamp-5'>
            &quot;{description}&quot;
        </p>
        <h1 className='mt-6 text-xl text-cyan-200 font-bold'>{name}</h1>
        <p className='mt-1 text-white'>{role}</p>
    </div>
  )
}

export default TestimonialCard