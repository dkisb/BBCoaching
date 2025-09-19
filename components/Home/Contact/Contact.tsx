'use client'
import React from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { ContactList } from '../../../constant/constants'

const Contact = () => {
  return (
    <div id='contact' className='pt-16 pb-16'>
        <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
            {/* text content */}
            <div>
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200'>
                    Schedule a call with me to get started
                </h1>
                <p className='text-gray-400 mt-6 text-base sm:text-lg'>
                    I&#39;m always looking for new opportunities to work with drivers and teams. If you have any questions or want to work with me, don&#39;t hesitate to contact me.
                </p>
                <div className='mt-7'>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiEnvelope className='w-9 h-9 text-cyan-300' />
                        <p className='text-white text-xl font-bold'>bertold.bb@bbcoaching.com</p>
                    </div>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiPhone className='w-9 h-9 text-cyan-300' />
                        <p className='text-white text-xl font-bold'>+36 30 171 8116</p>
                    </div>
                    <div className='flex items-center space-x-3 mb-4'>
                        <BiMap className='w-9 h-9 text-cyan-300' />
                        <p className='text-white text-xl font-bold'>Budapest, Hungary</p>
                    </div>
                    {/* social media */}
                    <div className='flex items-center mt-8 space-x-3'>
                        {ContactList.map((item) => (
                            <div
                                key={item.id}
                                className='w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300'
                            >
                                <item.icon className='w-6 h-6 text-white' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* forM */}
            <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className='md:p-10 p-5 bg-[#131332] rounded-lg'>
                <form action="submit">
                <input type="text" placeholder='Name' className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'/>
                <input type="email" placeholder='Email' suppressHydrationWarning className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'/>
                <input type="text" placeholder='Mobile Number' className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'/>
                <textarea name="message" id="message" placeholder='Message' className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]'>
                </textarea>
                <button type='submit' className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-white'>
                    <span className='text-white'>Send</span>
                </button>
                 </form>
            </div>
        </div>
    </div>
  )
}

export default Contact