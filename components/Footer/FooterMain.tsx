import React from 'react'
import FooterText from './FooterText'
import { Facebook, Instagram, LinkedIn, Twitter, Youtube } from '@/public/images/Icons'
import Image from 'next/image'

const FooterMain = () => {

    const images = [
        {
            id:1,
            path:<Facebook/>
        },
        {
            id:2,
            path:<Instagram/>
        },
        {
            id:3,
            path:<Twitter/>
        },
        {
            id:4,
            path:<LinkedIn/>
        },
        {
            id:5,
            path:<Youtube/>
        }
    ]

    return (
        <div className='pt-[33px] pl-[23px] pr-[150px] pb-[29px] bg-[#FBFBFB] flex justify-between space-x-[170px]'>
            <div className='w-full flex justify-between'>
                <FooterText title='My Account' text1='My Account' text2='Our stores' text3='Contact us' text4='Career' text5='Specials' />
                <FooterText title='Help & Guide' text1='Help Center' text2='How to Buy' text3='Shipping & Delivery' text4='Product Policy' text5='How to Return'/>
                <FooterText title='Categories' text1='House Plants' text2='Potter Plants' text3='Seeds' text4='Small Plants' text5='Accessories'/>
            </div>
            <div>
                <h3 className='text-[18px] leading-[16px] mb-[20px] font-bold'>Social Media</h3>
                <div className='flex items-center space-x-[10px]'>
                    {images.map(item => <div key={item.id}>{item.path}</div>)}
                </div>
                <h3 className='text-[18px] leading-[16px] mt-[33px] mb-[13px] font-bold'>We accept</h3>
                <Image src={"/Visa.png"} alt='Visa'width={224} height={26}/>
            </div>
        </div>
    )
}

export default FooterMain