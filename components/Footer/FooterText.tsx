import React from 'react'

interface TextType{
    title:string;
    text1:string;
    text2:string;
    text3:string;
    text4:string;
    text5:string;
}

const FooterText = ({title, text1, text2, text3, text4, text5}:TextType) => {
  return (
    <div>
        <h3 className='font-bold text-[18px] leading-[16px]'>{title}</h3>
        <p className='text-[14px] leading-[30px]'>{text1}</p>
        <p className='text-[14px] leading-[30px]'>{text2}</p>
        <p className='text-[14px] leading-[30px]'>{text3}</p>
        <p className='text-[14px] leading-[30px]'>{text4}</p>
        <p className='text-[14px] leading-[30px]'>{text5}</p>
    </div>
  )
}

export default FooterText