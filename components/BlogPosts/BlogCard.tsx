import { ArrowIcon2 } from '@/public/images/Icons'
import Image from 'next/image'
import React from 'react'
import { BlogType } from './BlogPost'

interface BlogCardProps {
    item: BlogType;
  }

const BlogCard: React.FC<BlogCardProps> = ({item}) => {
  return (
    <div className='w-[268px]'>
        <Image style={{width:"268px", height:"195px"}} priority src={item.img} alt='Flower' width={268} height={195}/>
        <div className='bg-[#FBFBFB] px-[13px] pt-[9px] pb-[12px]'>
            <strong className='text-[14px] leading-[16px] font-normal text-[#46A358]'>{item.data}</strong>
            <h4 className='font-bold text-[20px] leading-[26px] my-[4px]'>{item.title}</h4>
            <p className='text-[14px] leading-[22px] text-[#727272] mb-[9px]'>{item.text}</p>
            <div className='flex items-center space-x-[5px] hover:text-[#46A358] duration-300'>
                <span className='font-normal text-[14px] leading-[16px] hover:text-[#46A358] duration-300'>Read More</span>
                <ArrowIcon2/>
            </div>
        </div>
    </div>
  )
}

export default BlogCard