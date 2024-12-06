"use client"
import ProductCard from '@/components/ProductCard'
import { Context } from '@/context/Context'
import { useAxios } from '@/hooks/useAxios'
import { useQuery } from '@tanstack/react-query'
import { Pagination } from 'antd'
import React, { useContext, useMemo, useState } from 'react'


export interface ProductType {
  product_id?: string
  cost: number
  count?: number
  discount?: number
  image_url: string[]
  liked?: boolean
  basket?: boolean
  product_description?: string
  product_name: string
  product_status?: string
  short_description?: string
  size?: string[]
  tags?: string[]
}

interface ProductsProps {
  sortBy: string;
}

const Products: React.FC<ProductsProps> = ({ sortBy }) => {
  const { token }:any = useContext(Context)
  const { category, tags, minPrice, maxPrice, size } = useContext(Context)

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products', category, tags, minPrice, maxPrice, size, currentPage, token],
    queryFn: () => useAxios().get("/products", {
      headers:token ? {Authorization:`Bearer ${token.access_token}`} : {},
      params: {
        page: currentPage,
        limit: itemsPerPage,
        category,
        size,
        tags,
        max_price: maxPrice,
        min_price: minPrice
      }
    }).then(res => res.data.products ? res.data.products : [])
  })

  const allProducts = useMemo(() => {
    if (sortBy === "Price") {
      return [...products].sort((a, b) => a.cost - b.cost);
    }
    return products
  }, [products, sortBy])

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }

  return (
    <>
      <div className='flex flex-wrap gap-[37px]'>
        {isLoading ? "Loading..." : allProducts.map((item: ProductType) => <ProductCard key={item.product_id} item={item} />)}
      </div>
      <div className='mt-[30px] flex items-end justify-end'>
        <Pagination 
          current={currentPage}
          pageSize={itemsPerPage}
          total={18}
          onChange={handlePageChange}/>
      </div>
    </>
  )
}

export default Products