import React from 'react'
import FooterHeader from './FooterHeader'
import FooterHero from './FooterHero'
import FooterMain from './FooterMain'

const Footer = () => {
  return (
    <div className='w-[1200px] mx-auto'>
        <FooterHeader/>
        <FooterHero/>
        <FooterMain/>
        <p className='text-center text-[14px] leading-[30px] mt-[6px] mb-[13px]'>© 2021 GreenShop. All Rights Reserved.</p>
    </div>
  )
}

export default Footer