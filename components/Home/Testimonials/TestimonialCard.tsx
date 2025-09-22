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
        <div
          className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-end bg-gray-200 mx-auto"
          style={{
            aspectRatio: '1/1',
            minWidth: 60,
            minHeight: 60,
            maxWidth: 80,
            maxHeight: 80,
          }}
        >
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="object-cover object-top w-full h-full"
            priority
          />
        </div>
        <p className='mt-6 text-base text-white font-medium break-words overflow-y-auto max-h-32'>
            &quot;{description}&quot;
        </p>
        <h1 className='mt-6 text-xl text-[#0055ff] font-bold'>{name}</h1>
        <p className='mt-1 text-[#0055ff]'>{role}</p>
    </div>
  )
}

export default TestimonialCard