import { Facebook2, HeartIcon, LinkedIn2, Massage2, StarIcon, ThankIcon, Twitter2 } from '@/public/images/Icons'
import { ProductType } from '@/services/Products'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import Button from '../Button'
import { Context } from '@/context/Context'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAxios } from '@/hooks/useAxios'
import Modal2 from '../Modal2'
import toast, { Toaster } from 'react-hot-toast'

const SingleShop: React.FC<{ SingleData: ProductType }> = ({ SingleData }) => {
    const [isActive, setIsActive] = useState<"S" | "M" | "L" | "XL">("S")
    const [counter, setCounter] = useState<number | undefined>(SingleData?.count)

    const [open, setOpen] = useState<boolean>(false)

    const { token }: any = useContext(Context)
    const queryClient = useQueryClient()


    async function likeClick() {
        if (token.access_token) {
            const response = await useAxios().post(`/like/${SingleData.product_id}`, {}, {
                headers: {
                    Authorization: `Bearer ${token ? token.access_token : null}`
                }
            })
            toast.success("Successfully added")
            return response.data
        } else {
            toast.error("Ro'yxatdan o'ting")
        }
    }

    async function basketClick() {
        if (token.access_token) {
            const response = await useAxios().post("/basket", {
                productId: SingleData.product_id
            }, {
                headers: {
                    Authorization: `Bearer ${token ? token.access_token : null}`
                }
            })
            toast.success("Successfully added")
            return response.data
        } else {
            toast.error("Ro'yxatdan o'ting")
        }
    }

    const mutation = useMutation({
        mutationFn: () => likeClick(),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['products'] })
    })

    const basketMutation = useMutation({
        mutationFn: () => basketClick(),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
            queryClient.invalidateQueries({ queryKey: ['basketProducts'] });
        }
    })

    function handleModalClick(){
        toast.success("Ordered success")
        setTimeout(() => {      
            setOpen(false)
        }, 500);
    }

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <div className='flex justify-between mt-[43px]'>
                <Image style={{ width: "444px", height: "444px" }} src={SingleData.image_url ? SingleData.image_url[0] : "/Logo.svg"} alt='Product Img' width={444} height={444} />
                <div className='w-[574px]'>
                    <h2 className='font-bold text-[28px] leading-[16px] text-[#3D3D3D] mb-[20px]'>{SingleData.product_name}</h2>
                    <div className='flex items-center justify-between'>
                        <p className='text-[#46A358] font-bold text-[22px] leading-[16px]'>${SingleData.cost}.00</p>
                        <span className='flex items-center space-x-[11px]'>
                            <StarIcon />
                            <p className='text-[15px] leading-[16px]'>19 Customer Review</p>
                        </span>
                    </div>
                    <div className='w-full h-[1px] bg-[#46A35880]/50 mt-[12px] mb-[15px]'></div>
                    <strong className='font-semibold text-[15px] leading-[16px] mb-[10px]'>Short Description:</strong>
                    <p className='text-[#727272] text-[14px] leading-[24px] mb-[24px]'>{SingleData.short_description}</p>
                    <strong className='font-semibold text-[15px] leading-[16px]'>Size:</strong>
                    <div className='flex items-center space-x-[10px] mt-[11px]'>
                        <button onClick={() => setIsActive("S")} className={`w-[28px] h-[28px] rounded-full border-[1px]  text-[16px] leading-[16px] text-center ${isActive == "S" ? "border-[#46A358] text-[#46A358] font-bold" : "border-[#EAEAEA] text-[#727272]"}`}>S</button>
                        <button onClick={() => setIsActive("M")} className={`w-[28px] h-[28px] rounded-full border-[1px] text-[16px] leading-[16px] text-center ${isActive == "M" ? "border-[#46A358] text-[#46A358] font-bold" : "border-[#EAEAEA] text-[#727272]"}`}>M</button>
                        <button onClick={() => setIsActive("L")} className={`w-[28px] h-[28px] rounded-full border-[1px] text-[16px] leading-[16px] text-center ${isActive == "L" ? "border-[#46A358] text-[#46A358] font-bold" : "border-[#EAEAEA] text-[#727272]"}`}>L</button>
                        <button onClick={() => setIsActive("XL")} className={`w-[28px] h-[28px] rounded-full border-[1px] text-[16px] leading-[16px] text-center ${isActive == "XL" ? "border-[#46A358] text-[#46A358] font-bold" : "border-[#EAEAEA] text-[#727272]"}`}>XL</button>
                    </div>
                    <div className='flex items-center space-x-[26px] mt-[23px] mb-[26px]'>
                        <div className='flex items-center space-x-[20px]'>
                            <button onClick={() => setCounter(SingleData.count ? --SingleData.count : 0)} className='w-[33px] h-[38px] rounded-full bg-[#46A358] text-[28px] text-center leading-[28px] text-white'>-</button>
                            <p>{counter}</p>
                            <button onClick={() => setCounter(SingleData.count ? ++SingleData.count : 0)} className='w-[33px] h-[38px] rounded-full bg-[#46A358] text-[28px] text-center leading-[28px] text-white'>+</button>
                        </div>
                        <div className='flex items-center space-x-[10px]'>
                            <Button onClick={() => setOpen(true)} title='BUY NOW' type='button' extraStyle='w-[130px]' />
                            <button onClick={() => basketMutation.mutate()} className='py-[8px] px-[20px] font-bold text-[#46A358] border-[1px] border-[#46A358] bg-white rounded-[6px]'>ADD TO CART</button>
                            <button onClick={() => mutation.mutate()} className={`py-[11px] px-[10px] font-bold border-[1px] border-[#46A358] bg-white rounded-[6px] ${SingleData.liked ? "text-red-500" : "text-[#46A358]"}`}><HeartIcon /></button>
                        </div>
                    </div>
                    <p className='text-[15px] leading-[16px] text-[#727272]/50'>SKU: <span className='text-[#727272]'>1995751877966</span></p>
                    <p className='text-[15px] leading-[16px] text-[#727272]/50 mt-[11px] mb-[11px]'>Categories: <span className='text-[#727272]'>Potter Plants</span></p>
                    <p className='text-[15px] leading-[16px] text-[#727272]/50 mb-[18px]'>Tags:  {SingleData.tags?.map((item: string, index: number) => <span key={index + 1} className='text-[#727272]'>{item}</span>)}</p>
                    <p className='font-semibold text-[15px] leading-[16px] flex'>Share this products: <span className='flex items-center space-x-[20px] pl-[25px]'><Facebook2 /><Twitter2 /><LinkedIn2 /><Massage2 /></span></p>
                </div>
            </div>
            <div className='flex items-center space-x-[30px] mt-[90px]'>
                <h3 className='font-bold text-[#46A358] text-[17px] leading-[16px]'>Product Description</h3>
                <p className='text-[17px] leading-[16px]'>Reviews (19)</p>
            </div>
            <div className='w-full h-[1px] bg-[#46A35880]/50 mt-[12px] mb-[18px]'></div>
            <p className='text-[14px] leading-[24px] text-[#727272]'>{SingleData.product_description}</p>
            <Modal2 openModal={open} setOpenModal={setOpen}>
                <div className='w-full bg-[#46A3580F]/10 text-center pt-[30px] pb-[15px]'>
                    <div className='w-[80px] mx-auto mb-[16px]'>
                        <ThankIcon />
                    </div>
                    <p className='text-center text-[#727272] text-[16px] leading-[16px]'>Your order has been received</p>
                </div>
                <div className='bg-white py-[15px] px-[42px] flex items-center justify-between'>
                    <div className='pr-[15px] border-r-[1px] border-r-[#46A35833]/20 '>
                        <p className='text-[14px] leading-[16px] text-[#727272] mb-[3px]'>Order Number</p>
                        <p className='text-[15px] leading-[16px] text-[#727272] font-bold'>19586687</p>
                    </div>
                    <div className='pr-[15px] border-r-[1px] border-r-[#46A35833]/20 '>
                        <p className='text-[14px] leading-[16px] text-[#727272] mb-[3px]'>Date</p>
                        <p className='text-[15px] leading-[16px] text-[#727272] font-bold'>6 Dec, 2024</p>
                    </div>
                    <div className='pr-[15px] border-r-[1px] border-r-[#46A35833]/20 '>
                        <p className='text-[14px] leading-[16px] text-[#727272] mb-[3px]'>Total</p>
                        <p className='text-[15px] leading-[16px] text-[#727272] font-bold'>{(SingleData.cost) * 1 + 16}.00</p>
                    </div>
                    <div>
                        <p className='text-[14px] leading-[16px] text-[#727272] mb-[3px]'>Payment Method</p>
                        <p className='text-[15px] leading-[16px] text-[#727272] font-bold'>Cash on delivery</p>
                    </div>
                </div>
                <div className='w-full h-[1px] mb-[18px] bg-[#46A35833]/20'></div>
                <div className='px-[40px]'>
                    <h3 className='font-bold text-[15px] leading-[16px] mb-[12px]'>Order Details</h3>
                    <div className='flex items-center justify-between'>
                        <p className='text-[16px] leading-[16px]'>Products</p>
                        <div className='flex items-center space-x-[85px]'>
                            <p className='font-semibold text-[16px] leading-[16px]'>Qty</p>
                            <p className='font-semibold text-[16px] leading-[16px] pr-[9px]'>Subtotal</p>
                        </div>
                    </div>
                    <div className='w-full h-[1px] mt-[11px] mb-[11px] bg-[#46A35833]/20'></div>
                    <div className='flex items-center justify-between bg-[#FBFBFB] mb-[20px]'>
                        <Image style={{ width: "70px", height: "70px" }} src={SingleData.image_url ? SingleData.image_url[0] : "/Logo.svg"} alt='Product Img' width={70} height={70} />
                        <div className='pl-[11px]'>
                            <h4 className='font-semibold text-[16px] leading-[16px] mb-[6px]'>Barberton Daisy</h4>
                            <p className='text-[14px] leading-[16px] text-[#727272]/50'>SKU: <strong className='text-[#727272]'>1995751877966</strong></p>
                        </div>
                        <p className='text-[14px] leading-[16px] text-[#727272]'>x{SingleData.count}</p>
                        <p className='font-bold text-[18px] leading-[18px] text-[#46A358] pr-[13px]'>${SingleData.cost}.00</p>
                    </div>
                    <div className='pl-[160px] space-y-[25px] mb-[21px]'>
                        <div className='flex items-center justify-between'>
                            <p className='text-[15px] leading-[16px]'>Shiping</p>
                            <p className='font-normal text-[18px] leading-[16px]'>$16.00</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-[16px] leading-[16px] font-bold'>Total</p>
                            <p className='font-bold text-[18px] leading-[16px] text-[#46A358]'>${(SingleData.cost) * 1 + 16}.00</p>
                        </div>
                    </div>
                    <div className='w-full h-[1px] mb-[18px] bg-[#46A35833]/20'></div>
                    <p className='text-[14px] leading-[22px] text-[#727272] text-center mb-[40px]'>Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>
                    <Button onClick={() => handleModalClick()} title='Track your order' type='button' extraStyle='w-[160px] mx-auto mb-[40px] font-bold' />
                </div>
            </Modal2>
        </>
    )
}

export default SingleShop