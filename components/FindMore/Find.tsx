import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import { ArrowIcon } from '@/public/images/Icons'

interface FindProps {
    img: string
    title: string
  }

const Find: React.FC<FindProps> = ({img, title}) => {
    return (
        <div className='w-[586px] flex justify-between bg-[#FBFBFB] pt-[37px] pr-[30px] pb-[46px] relative'>
            <div className='absolute bottom-[10px]'>
                <Image style={{ width: "292px", height: "292px" }} priority src={img} alt='Flower' width={292} height={292} />
            </div>
            <div className='text-end pl-[300px]'>
                <h3 className='font-bold text-[18px] leading-[24px] mb-[10px] pl-[30px] uppercase text-end'>{title}</h3>
                <p className='text-[14px] leading-[24px] mb-[25px]'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
                <div className='flex items-end justify-end'>
                    <Button title='Find More' type='button' rightIcon={<ArrowIcon />} extraStyle='w-[140px] font-normal text-[14px] leading-[20px]' />
                </div>
            </div>
        </div>
    )
}

export default Find