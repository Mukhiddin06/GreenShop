"use client"
import { Context } from '@/context/Context'
import { useAxios } from '@/hooks/useAxios'
import { BasketIcon, LikeIcon } from '@/public/images/Icons'
import { ProductType } from '@/services/Products'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'



const ProductCard: React.FC<{ item: ProductType }> = ({ item }) => {  
  const { token }:any = useContext(Context)
  const router = useRouter()
  const queryClient = useQueryClient()


  async function likeClick() {
    if (token.access_token) {
      const response = await useAxios().post(`/like/${item.product_id}`, {}, {
        headers: {
          Authorization: `Bearer ${token ? token.access_token : null}`
        }
      })
      return response.data
    } else {
      alert("Ro'yxatdan o'ting")
    }
  }


  async function basketClick() {
    if (token.access_token) {
      const response = await useAxios().post("/basket", {
        productId:item.product_id
      }, {
        headers: {
          Authorization: `Bearer ${token ? token.access_token : null}`
        }
      })
      return response.data
    } else {
      alert("Ro'yxatdan o'ting")
    }
  }

  const mutation = useMutation({
    mutationFn: () => likeClick(),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] })
  })


  const basketMutation = useMutation({
    mutationFn: () => basketClick(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products']});
      queryClient.invalidateQueries({ queryKey: ['basketProducts']});
    }
  })


  async function routeClick(){
    router.push(`/shop/${item.product_id}`)
  }

  const routeMutation = useMutation({
    mutationFn:() => routeClick(),
    onSuccess:() => queryClient.invalidateQueries({ queryKey: ['single-products']})
  })

  return (
    <div className='w-[258px] hover:relative group duration-300 border-t-[2px] border-t-[#F5F5F580] hover:border-t-[#46A358]'>
      <div className='bg-[#46A358] text-white p-[8px] absolute'>{Math.floor(Math.random()*30)}% OFF</div>
      <Image onClick={() => routeMutation.mutate()} priority style={{ width: "258px", height: "300px", backgroundColor: "#F5F5F580", padding: "10px", cursor:"pointer" }} src={item.image_url ? item.image_url[0] : "/Logo.svg"} alt={item.product_name} width={258} height={300} />
      <h3 className='text-[#3D3D3D] text-[16px] leading-[16px] mt-[12px] mb-[6px]'>{item.product_name}</h3>
      <div className='flex space-x-5'>
        <strong className='text-[#46A358] font-bold text-[18px] leading-[16px]'>${item.cost}.00</strong>
        <strong className='text-gray-300 font-bold text-[18px] leading-[16px] line-through'>${item.cost + Math.floor(Math.random()*100)}.00</strong>
      </div>
      <div className='flex items-center space-x-[25px] absolute top-[258px] left-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <button onClick={() => basketMutation.mutate()} className={`${item.basket ? "text-[#46A358]" : ""} bg-white rounded-[4px] w-[35px] h-[35px] flex items-center justify-center`}><BasketIcon /></button>
        <button onClick={() => mutation.mutate()} className={`${item.liked ? "text-red-500" : ""} bg-white z-10 rounded-[4px] w-[35px] h-[35px] flex items-center justify-center`}><LikeIcon /></button>
      </div>
    </div>
  )
}

export default ProductCard