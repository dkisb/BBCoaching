'use client'
import TestimonialCard from './TestimonialCard'
import { TestimonialsList } from '../../../constant/constants';
import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

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
  return (
    <div id='testimonials' className='pt-16 pb-16'>
        <h1 className='text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white'>Kind words from previous <span className='text-[#0055ff]'>clients</span></h1>
        <div className='mt-16 w-[70%] mx-auto'>
            <Carousel
            showDots={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            >
            {TestimonialsList.map((testimonial) => (
                <TestimonialCard key={testimonial.id} image={testimonial.image} name={testimonial.name} role={testimonial.role} description={testimonial.description} />
            ))}
           </Carousel>
        </div>
    </div>
  )
}

export default Testimonials