import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="w-[1200px] mx-auto flex items-center justify-between bg-[#F5F5F580] mt-[12px] pl-[43px] text-start">
      <div className="w-[560px]">
        <p className="text-[#3D3D3D] font-semibold leading-[16px] text-[14px] mb-[7px]">Welcome to GreenShop</p>
        <h2 className="font-black text-[70px] leading-[70px] text-[#3D3D3D] mb-[5px]">LET’S MAKE A BETTER <span className="text-[#46A358]">PLANET</span></h2>
        <p className="text-[#727272] leading-[24px] text-[14px] mb-[44px]">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
        <Button extraStyle="w-[140px] py-[11px] text-[16px] font-bold" title="SHOP NOW" type="button"/>
      </div>
      <div className="relative h-[450px] w-[450px]">
        <Image style={{width:"450px", height:"450px"}} priority  alt='Flower' src={"/Flower.png"} width={450} height={450}/>
        <Image  className="absolute bottom-[29px] left-[30px] z-10" style={{width:"135px", height:"135px"}} priority  alt='Flower' src={"/Flower.png"} width={135} height={135}/>
      </div>
    </div>
  )
}

export default Hero