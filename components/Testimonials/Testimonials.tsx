'use client'
import TestimonialCard from './TestimonialCard'
import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useTranslations } from 'next-intl'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
};

const Testimonials = () => {
  const t = useTranslations('testimonials');
  const [isMobile, setIsMobile] = useState(false);
  
  const testimonialsList = [
    {
      id: 1,
      image: "/images/martin-head.jpeg",
      name: "Martin Ernesto Varga",
      role: t('role'),
      description: t('list.martin')
    },
    {
      id: 2,
      image: "/images/szoke-m.jpeg",
      name: "Martin Szőke",
      role: t('role'),
      description: t('list.szoke')
    },
    {
      id: 3,
      image: "/images/kika.jpeg",
      name: "Kristýna Kalistová",
      role: t('role'),
      description: t('list.kristyna')
    },
    {
      id: 4,
      image: "/images/hero2.jpg",
      name: "Döme Kisbalázs",
      role: t('simRacer'),
      description: t('list.dome')
    },
    {
      id: 5,
      image: "/images/hero2.jpg",
      name: "John Doe",
      role: t('role'),
      description: t('list.john')
    }
  ];

  useEffect(() => {
    // Check if window is defined (to avoid SSR issues)
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 764);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div id='testimonials' className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>{t('title')} <span className='text-[#0055ff]'>{t('titleHighlight')}</span></h1>
        <div className='mt-16 w-[70%] mx-auto'>
            <Carousel
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={!isMobile}
            autoPlaySpeed={2000}
            >
            {testimonialsList.map((testimonial) => (
                <TestimonialCard key={testimonial.id} image={testimonial.image} name={testimonial.name} role={testimonial.role} description={testimonial.description} />
            ))}
           </Carousel>
        </div>
    </div>
  )
}

export default Testimonials