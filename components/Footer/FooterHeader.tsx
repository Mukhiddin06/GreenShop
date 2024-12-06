import React from 'react'
import FooterCard from './FooterCard'

const FooterHeader = () => {
    return (
        <div className='p-[25px] bg-[#FBFBFB] flex justify-between space-x-[60px]'>
            <div className='flex items-center justify-between space-x-[30px]'>
                <FooterCard img={"/Cactus1.svg"} title={"Garden Care"}/>
                <div className='pl-[25px] border-l-[2px] border-l-[#46A3581A]/10 '>
                    <FooterCard img={"/Cactus2.svg"} title={"Plant Renovation"}/>
                </div>
                <div className='pl-[35px] border-l-[2px] border-l-[#46A3581A]/10 '>
                    <FooterCard img={"/Cactus3.svg"} title={"Watering Graden"}/>
                </div>
            </div>
            <div className='w-[354px]'>
                <h3 className='font-bold text-[18px] leading-[16px] mt-[12px] mb-[18px]'>Would you like to join newsletters?</h3>
                <label className='flex items-center mb-[17px]'>
                    <input type="text" placeholder='enter your email address...' className='placeholder:text-[#ACACAC] text-[14px] leading-[16px] w-[80%] bg-[#FFFFFF] outline-none shadow-sm py-[12px] pl-[11px] rounded-l-[6px]' />
                    <button className='bg-[#46A358] text-white font-bold text-[18px] leading-[16px] py-[12px] px-[26px] rounded-r-[6px]'>Join</button>
                </label>
                <p className='text-[16px] leading-[22px] text-[#727272] mb-[8px]'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
            </div>
        </div>
    )
}

export default FooterHeader