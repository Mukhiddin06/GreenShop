"use client"
import Footer from '@/components/Footer/Footer'
import SwiperMini from '@/components/SwiperMini/SwiperMini'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const path = usePathname()

  return (
    <div>
      <h2 className='mt-[36px] pl-[161px]'><span className='font-bold'>Home</span> / Shop {path.includes("shopping-card") ? "/ Shopping Card" : ""}</h2>
      {children}
      <div className='w-[1200px] mx-auto mt-[125px]'>
        <h3 className='font-bold text-[#46A358] text-[17px] leading-[16px]'>Releted Products</h3>
        <div className='w-full h-[1px] bg-[#46A35880]/50 mt-[12px] mb-[18px]'></div>
        <SwiperMini />
        <div className='mt-[128px]'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default layout