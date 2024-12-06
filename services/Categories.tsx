"use client"
import Button from '@/components/Button'
import { Context } from '@/context/Context'
import { useAxios } from '@/hooks/useAxios'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { useContext, useState } from 'react'

interface CategoriesType {
    category_id: string
    category_name: string
}

const Categories = () => {
    const { setCategory, setMinPrice, setMaxPrice, setSize } = useContext(Context)
    const [rangeValue, setRangeValue] = useState({ min: 40  , max: 600 })
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


    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);

        // Minimal qiymat maksimal qiymatdan oshmasligi kerak
        if (newValue >= rangeValue.max) {
            setRangeValue((prev) => ({ ...prev, min: prev.max - 1 }));
        } else {
            setRangeValue((prev) => ({ ...prev, min: newValue }));
        }
    };

    // Max qiymatni o'zgartirish
    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);

        // Maksimal qiymat minimal qiymatdan past bo'lmasligi kerak
        if (newValue <= rangeValue.min) {
            setRangeValue((prev) => ({ ...prev, max: prev.min + 1 }));
        } else {
            setRangeValue((prev) => ({ ...prev, max: newValue }));
        }
    };

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
                <div className='pb-[16px]'>
                    <h2 className='font-bold text-[#3D3D3D] text-[18px] mb-[20px] leading-[16px]'>Categories</h2>
                    <div className='pl-[12px]'>
                        {categories.map((item: CategoriesType) => <p onClick={() => handleClick(item.category_name)} className={`text-[15px] leading-[40px] cursor-pointer ${isActive == item.category_name ? "text-[#46A358] font-bold" : ""}`} key={item.category_id}>{item.category_name}</p>)}
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-4">Price Range</h3>
                        <div className="relative w-full h-6">
                            {/* Diapazonni ifodalovchi chiziq */}
                            <div
                                className="absolute top-2 h-2 bg-gray-200 rounded-full"
                                style={{
                                    left: 0,
                                    right: 0,
                                }}
                            ></div>
                            <div
                                className="absolute top-2 h-2 bg-green-500 rounded-full"
                                style={{
                                    left: `${(rangeValue.min / 800) * 100}%`,
                                    right: `${100 - (rangeValue.max / 800) * 100}%`,
                                }}
                            ></div>

                            {/* Minimal qiymat uchun slider */}
                            <input
                                type="range"
                                min="0"
                                max="800"
                                value={rangeValue.min}
                                onChange={handleMinChange}
                                className="absolute w-full appearance-none bg-transparent"
                                style={{
                                    zIndex: 2,
                                    top:"5px"
                                }}
                            />
                            {/* Maksimal qiymat uchun slider */}
                            <input
                                type="range"
                                min="0"
                                max="800"
                                value={rangeValue.max}
                                onChange={handleMaxChange}
                                className="absolute w-full appearance-none bg-transparent"
                                style={{
                                    zIndex: 2,
                                }}
                            />
                        </div>
                        <p className="mt-4 text-sm text-gray-700">
                            Price: <strong>${rangeValue.min} - ${rangeValue.max}</strong>
                        </p>
                        <Button onClick={() => handleClickBtn()} extraStyle='w-[90px] font-bold mt-[20px]' type='button' title='Filter' />
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