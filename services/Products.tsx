"use client"
import { useAxios } from '@/hooks/useAxios'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const Products = () => {
    const { data: products = [] }: any = useQuery(({
        queryKey: ['products'],
        queryFn: () => useAxios().get("/products", {
            params: { page: 1, limit: 100 }
        }).then(res => res.data.products)
    }))

    console.log(products)

  return (
    <div>Products</div>
  )
}

export default Products