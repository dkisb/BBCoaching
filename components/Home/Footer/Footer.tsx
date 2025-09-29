'use client'
import React from 'react'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('footer');
  
  return (
    <div className='bg-black p-5'>
        <h1 className='text-lg text-white/70 text-center'>
        {t('copyright')}
        </h1>
    </div>
  )
}

export default Footer