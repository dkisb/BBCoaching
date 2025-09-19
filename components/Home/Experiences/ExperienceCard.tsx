import React from 'react'
import Image from 'next/image'

type Props = {
    image: string;
    title: string;
    company: string;
}

const ExperienceCard = ({ image, title, company }: Props) => {
  return (
    <div>
            <div>
                <Image src={image} alt={title} width={800} height={650} className='rounded-lg' />
            </div>
            <h1 className='mt-4 text-xl sm:text-2xl font-semibold text-white'>
                {title}
            </h1>
            <h1 className='pt-2 font-medium text-white/80'>
            {company}
            </h1>
    </div>
  )
}

export default ExperienceCard