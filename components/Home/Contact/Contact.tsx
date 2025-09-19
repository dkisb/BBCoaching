'use client'
import React, { useState } from 'react'
import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi'
import { ContactList } from '../../../constant/constants'

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null)
    setSuccess(false)

    if (!name || !email || !message) {
      setError('Please fill in your name, email and message.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed to send message')
      setSuccess(true)
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } catch (err: any) {
      setError(err.message || 'Failed to send message')
    } finally {
      setLoading(false)
    }
  }


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
                <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Name' className='px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' suppressHydrationWarning className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'/>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Mobile Number' className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70'/>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="message" placeholder='Message' className='px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]'>
                </textarea>
                <button type='submit' disabled={loading} className='mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer rounded-full text-white'>
                    <span className='text-white'>{loading ? 'Sending…' : 'Send'}</span>
                </button>
                {error && <p className='text-red-400 mt-4'>{error}</p>}
                {success && <p className='text-green-400 mt-4'>Thanks! Your message has been sent.</p>}
                 </form>
            </div>
        </div>
    </div>
  )
}

export default Contact