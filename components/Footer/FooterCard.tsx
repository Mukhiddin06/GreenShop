import Image from 'next/image'
import React from 'react'

interface FooterCardType{
    img:string;
    title:string
}

const FooterCard = ({img, title}:FooterCardType) => {
  return (
    <div className='w-[204px] '>
        <Image style={{width:"74px", height:"115px"}} priority src={img} alt='Floera' width={74} height={115}/>
        <h3 className='font-bold text-[17px] leading-[16px] mt-[17px]'>{title}</h3>
        <p className='text-[14px] leading-[22px] text-[#727272] mt-[9px]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
    </div>
  )
}

export default FooterCard