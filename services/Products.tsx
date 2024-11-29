"use client"
import ProductCard from '@/components/ProductCard'
import { Context } from '@/context/Context'
import { useAxios } from '@/hooks/useAxios'
import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'

export interface ProductType {
    product_id?:string
    cost:number
    count?:number
    discount?:number
    image_url:string[]
    liked?:boolean
    basket?:boolean
    product_description?:string
    product_name:string
    product_status?:string
    short_description?:string
    size?:string[]
    tags?:string[]
}

const Products = () => {
    const {category, tags} = useContext(Context)
    const { data: products = [] }: any = useQuery(({
        queryKey: ['products', category, tags],
        queryFn: () => useAxios().get("/products", {
            params: { 
                page: 1, 
                limit: 100,
                category,
                size:null,
                tags,
                max_price:null,
                min_price:null
             }
        }).then(res => res.data.products ? res.data.products : [])
    }))

  return (
    <div className='flex flex-wrap gap-[37px]'>{products.map((item:ProductType) => <ProductCard key={item.product_id} item={item}/>)}</div>
  )
}

export default Products