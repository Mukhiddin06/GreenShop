"use client"
import { Context } from '@/context/Context'
import { useAxios } from '@/hooks/useAxios'
import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'

interface CategoriesType {
    category_id: string
    category_name: string
}

const Categories = () => {
    const {setCategory} = useContext(Context)
    const [isActive, setIsActive] = useState("")
    const { data: categories = [] }: any = useQuery(({
        queryKey: ['categories'],
        queryFn: () => useAxios().get("/categories", {
            params: { 
                page: 1, 
                limit: 100,
            }
        }).then(res => res.data.categories)
    }))

    function handleClick(name:string){
        setIsActive(name)
        setCategory(name)
    }
    return (
        <div className='bg-[#FBFBFB] pl-[18px] pt-[14px] pr-[24px]'>
            <div className='pb-[36px]'>
                <h2 className='font-bold text-[#3D3D3D] text-[18px] leading-[16px]'>Categories</h2>
                <div className='pl-[12px]'>
                    {categories.map((item: CategoriesType) => <p onClick={() => handleClick(item.category_name)} className={`text-[15px] leading-[40px] cursor-pointer ${isActive == item.category_name ? "text-[#46A358] font-bold" : ""}`} key={item.category_id}>{item.category_name}</p>)}
                </div>
            </div>
        </div>
    )
}

export default Categories