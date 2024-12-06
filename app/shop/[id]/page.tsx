"use client"
import SingleShop from '@/components/Shop/SingleShop'
import { useAxios } from '@/hooks/useAxios'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import React from 'react'

const SinglePage = () => {
    const {id} = useParams()

    const { data:SingleData = {}} = useQuery({
        queryKey:['single-products'],
        queryFn:() => useAxios().get(`/product/${id}`).then(res => res.data)
    })

  return (
    <div className='w-[1200px] mx-auto'>
      <SingleShop SingleData={SingleData}/>
    </div>
  )
}

export default SinglePage