'use client'
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'
import Experiences from './Experiences/Experiences'
import Skills from './Skills/Skills'
import Testimonials from './Testimonials/Testimonials'
import Contact from './Contact/Contact'
import About from './About/About'
import AOS from 'aos' 
import 'aos/dist/aos.css'
import Gallery from './Gallery/Gallery'

const Home = () => {

  useEffect(() => {
    const initAOS = () => {
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      })
    }
    initAOS()
  }, [])

  return (
    <div id='home' className='overflow-hidden bg-gray-400'>
      <Hero />
      <About />
      <Resume />
      <Experiences />
      <Skills />
      <Services />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home