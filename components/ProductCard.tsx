"use client"
import { BasketIcon, LikeIcon } from '@/public/images/Icons'
import { ProductType } from '@/services/Products'
import Image from 'next/image'
import React from 'react'



const ProductCard: React.FC<{ item: ProductType }> = ({ item }) => {
  return (
    <div className='w-[258px] hover:relative group duration-300'>
      <Image priority style={{ width: "258px", height: "300px", backgroundColor: "#F5F5F580", padding: "10px" }} src={item.image_url ? item.image_url[0] : "/Logo.svg"} alt={item.product_name} width={258} height={300} />
      <h3 className='text-[#3D3D3D] text-[16px] leading-[16px] mt-[12px] mb-[6px]'>{item.product_name}</h3>
      <strong className='text-[#46A358] font-bold text-[18px] leading-[16px]'>${item.cost}.00</strong>
      <div className='flex items-center space-x-[25px] absolute top-[258px] left-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <button className={`${item.basket ? "text-[#46A358]" : ""}bg-white rounded-[4px] w-[35px] h-[35px] flex items-center justify-center`}><BasketIcon /></button>
        <button className={`${item.liked ? "text-red-500" : ""}bg-white rounded-[4px] w-[35px] h-[35px] flex items-center justify-center`}><LikeIcon /></button>
      </div>
    </div>
  )
}

export default ProductCard