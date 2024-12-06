import { LocationIcon, MassageIcon, TelIcon } from '@/public/images/Icons'
import Image from 'next/image'
import React from 'react'

const FooterHero = () => {
  return (
    <div className='pt-[25px] pb-[20px] pl-[23px] bg-[#46A3581A]/10 flex items-center space-x-[70px]'>
        <Image style={{width:"150px", height:"35px"}} priority src={"/Logo.svg"} alt='Logo' width={150} height={35}/>
        <div className='flex items-center space-x-[10px] w-[200px]'>
            <LocationIcon/>
            <p className='text-[14px] leading-[22px]'>70 West Buckingham Ave. Farmingdale, NY 11735</p>
        </div>
        <div className='flex items-center space-x-[10px]'>
            <MassageIcon/>
            <p className='text-[14px] leading-[22px]'>contact@greenshop.com</p>
        </div>
        <div className='flex items-center space-x-[10px]'>
            <TelIcon/>
            <p className='text-[14px] leading-[22px]'>+88 01911 717 490</p>
        </div>
    </div>
  )
}

export default FooterHero