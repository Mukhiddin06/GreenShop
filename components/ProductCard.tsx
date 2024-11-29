import { ProductType } from '@/services/Products'
import Image from 'next/image'
import React from 'react'



const ProductCard:React.FC<{item:ProductType}> = ({item}) => {
  return (
    <div className='w-[258px]'>
        <Image priority style={{width:"258px", height:"300px"}} src={item.image_url[0]} alt={item.product_name} width={258} height={300}/>
        <h3 className='text-[#3D3D3D] text-[16px] leading-[16px] mt-[12px] mb-[6px]'>{item.product_name}</h3>
        <strong className='text-[#46A358] font-bold text-[18px] leading-[16px]'>${item.cost}.00</strong>
    </div>
  )
}

export default ProductCard