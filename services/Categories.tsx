"use client"
import Button from '@/components/Button'
import { Context } from '@/context/Context'
import { useAxios } from '@/hooks/useAxios'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import InputRange from 'react-input-range'
import "react-input-range/lib/css/index.css"

interface CategoriesType {
    category_id: string
    category_name: string
}

const Categories = () => {
    const { setCategory, setMinPrice, setMaxPrice, setSize } = useContext(Context)
    const [rangeValue, setRangeValue] = useState({ min: 40, max: 200 })
    const [isActive, setIsActive] = useState("")
    const [isSizeActive, setIsSizeActive] = useState<"small" | "medium" | "large" | "">("")
    const { data: categories = [] }: any = useQuery(({
        queryKey: ['categories'],
        queryFn: () => useAxios().get("/categories", {
            params: {
                page: 1,
                limit: 100,
            }
        }).then(res => res.data.categories)
    }))

    function handleClick(name: string) {
        setIsActive(name)
        setCategory(name)
    }

    function handleChange(value: { min: number, max: number } | any) {
        setRangeValue(value)
    }

    function handleClickBtn() {
        setMinPrice(rangeValue.min)
        setMaxPrice(rangeValue.max)
    }

    function handleSizeClickBtn(size: any) {
        setIsSizeActive(size)
        setSize(size)
    }

    return (
        <>
            <div className='bg-[#FBFBFB] pl-[18px] pt-[14px] pr-[24px]'>
                <div className='pb-[36px]'>
                    <h2 className='font-bold text-[#3D3D3D] text-[18px] mb-[20px] leading-[16px]'>Categories</h2>
                    <div className='pl-[12px]'>
                        {categories.map((item: CategoriesType) => <p onClick={() => handleClick(item.category_name)} className={`text-[15px] leading-[40px] cursor-pointer ${isActive == item.category_name ? "text-[#46A358] font-bold" : ""}`} key={item.category_id}>{item.category_name}</p>)}
                    </div>
                    <div className='pt-[36px]'>
                        <h3 className='text-[#3D3D3D] text-[18px] leading-[16px] font-bold mb-[40px]'>Price Range</h3>
                        <InputRange
                            value={rangeValue}
                            maxValue={800}
                            minValue={0}
                            onChange={handleChange}
                        />
                        <p className='text-[#3D3D3D] text-[18px] leading-[16px] mt-[30px] mb-[16px] pl-[12px]'>Price: <strong className='text-[#46A358] font-bold'>${rangeValue.min} - ${rangeValue.max}</strong></p>
                        <Button onClick={() => handleClickBtn()} extraStyle='w-[90px] font-bold' type='button' title='Filter' />
                    </div>
                    <div className='pt-[46px] pb-[19px]'>
                        <h3 className='font-bold text-[18px] leading-[16px] mb-[20px]'>Size</h3>
                        <ul className='pl-[12px]'>
                            <li onClick={() => handleSizeClickBtn("small")} className={`text-[15px] leading-[40px] cursor-pointer ${isSizeActive === "small" ? "text-[#46A358]" : ""}`}>Small</li>
                            <li onClick={() => handleSizeClickBtn("medium")} className={`text-[15px] leading-[40px] cursor-pointer ${isSizeActive === "medium" ? "text-[#46A358]" : ""}`}>Medium</li>
                            <li onClick={() => handleSizeClickBtn("large")} className={`text-[15px] leading-[40px] cursor-pointer ${isSizeActive === "large" ? "text-[#46A358]" : ""}`}>Large</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <Image style={{ width: "310px", height: "auto" }} priority src={"./Banner2.png"} alt='Banner' width={310} height={470} />
            </div>
        </>
    )
}

export default Categories