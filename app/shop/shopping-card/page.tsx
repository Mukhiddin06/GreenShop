"use client"
import Button from '@/components/Button'
import Modal2 from '@/components/Modal2'
import { Context } from '@/context/Context'
import { useAxios } from '@/hooks/useAxios'
import { DeleteIcon, ThankIcon } from '@/public/images/Icons'
import { ProductType } from '@/services/Products'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const ShoppingCard = () => {

  const { token } = useContext(Context)

  const [open, setOpen] = useState<boolean>(false)

  async function getBasket() {
    const res = await useAxios().get("/basket", {
      headers: token ? { Authorization: `Bearer ${token.access_token}` } : {},
      params: { page: 1, limit: 100 }
    })
    return res.data.ProductId
  }

  const { data: basketProducts = {} } = useQuery({
    queryKey: ['basketProducts'],
    queryFn: getBasket,
    enabled: true
  })

  console.log(basketProducts.ProductId)

  function handleModalClickBtn(){
    toast.success("Ordered success")
    setTimeout(() => {      
        setOpen(false)
    }, 500);
}


  return (
    <div className='w-[1200px] mx-auto flex justify-between  mt-[51px]'>
      <Toaster position="top-center" reverseOrder={false} />
      <div className='w-[782px]'>
        <ul className='flex items-center justify-between mb-[11px]'>
          <li className='text-[16px] leading-[16px] font-semibold'>Products</li>
          <li className='text-[16px] leading-[16px] font-semibold'>Price</li>
          <li className='text-[16px] leading-[16px] font-semibold'>Quantity</li>
          <li className='text-[16px] leading-[16px] font-semibold pr-[170px]'>Total</li>
        </ul>
        <div className='w-full h-[1px] mb-[11px] bg-[#46A35833]/20'></div>
        <ul>
          {basketProducts.ProductId ? basketProducts.ProductId.map((item: ProductType) => <li key={item.product_id}>
            <div className='flex items-center justify-between bg-[#FBFBFB] mb-[20px]'>
              <Image priority style={{ width: "70px", height: "70px" }} src={item.image_url ? item.image_url[0] : "/Logo.svg"} alt='Product Img' width={70} height={70} />
              <p className='font-semibold text-[18px] leading-[18px] text-[#727272] pr-[13px]'>${item.cost}.00</p>
              <div className='w-[80px] flex items-center justify-between'>
                <span className='font-bold text-white text-[20px] leading-[16px] w-[21px] h-[21px] bg-[#46A358] rounded-full text-center'>-</span>
                <p className='text-[14px] leading-[16px] text-[#727272]'>{item.count}</p>
                <span className='font-bold text-white text-[20px] leading-[16px] w-[21px] h-[21px] bg-[#46A358] rounded-full text-center'>+</span>
              </div>
              <p className='font-bold text-[18px] leading-[18px] text-[#46A358] pr-[13px]'>${item.count ? item.cost * item.count : item.cost}.00</p>
              <span className='pr-[26px]'>
                <DeleteIcon />
              </span>
            </div>
          </li>) : ""}
        </ul>
      </div>
      <div className='w-[328px]'>
        <h2 className='text-[16px] leading-[16px] font-semibold'>Cart Totals</h2>
        <div className='w-full h-[1px] my-[11px] bg-[#46A35833]/20'></div>
        <p className='mb-[8px] text-[14px] leading-[16px]'>Coupon Apply</p>
        <div className='flex items-center'>
          <input type="text" placeholder='Enter coupon code here...' className='outline-none pt-[13px] pl-[9px] pb-[12px] border-[2px] border-[#46A358] rounded-l-[3px] text-[14px] leading-[15px] w-full' />
          <button className='py-[15px] pl-[35px] bg-[#46A358] rounded-r-[3px] pr-[25px] text-white text-[15px] leading-[16px] font-bold'>Apply</button>
        </div>
        <div className='flex items-center justify-between mt-[30px]'>
          <p className='text-[15px] leading-[16px]'>Subtotal</p>
          <strong className='text-[18px] leading-[16px] font-semibold'>$2,683.00</strong>
        </div>
        <div className='flex items-center justify-between mt-[15px]'>
          <p className='text-[15px] leading-[16px]'>Coupon Discount</p>
          <strong className='text-[15px] leading-[16px]'>(-) 00.00</strong>
        </div>
        <div className='flex items-center justify-between mt-[21px]'>
          <p className='text-[15px] leading-[16px]'>Shiping</p>
          <strong className='text-[18px] leading-[16px] font-semibold'>$16.00</strong>
        </div>
        <div className='flex items-center justify-between mt-[26px]'>
          <p className='text-[15px] leading-[16px] font-bold'>Total</p>
          <strong className='text-[18px] leading-[16px] font-bold text-[#46A358]'>$2,699.00</strong>
        </div>
        <Button onClick={() => setOpen(true)} title='Proceed To Checkout' type='button' extraStyle='font-semibold w-[328px] mt-[30px]' />
        <p className='mt-[14px] text-[15px] leading-[16px] text-[#46A358] text-center'>Continue Shopping</p>
      </div>
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
            <p className='text-[15px] leading-[16px] text-[#727272] font-bold'>$2,999.00</p>
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
          <ul className='h-[140px] overflow-y-auto'>
            {basketProducts.ProductId ? basketProducts.ProductId.map((item: ProductType) => 
            <li key={item.product_id} className='flex items-center justify-between bg-[#FBFBFB] mb-[20px]'>
              <Image style={{ width: "70px", height: "70px" }} src={item.image_url ? item.image_url[0] : "/Logo.svg"} alt='Product Img' width={70} height={70} />
              <div className='pl-[11px]'>
                <h4 className='font-semibold text-[16px] leading-[16px] mb-[6px]'>Barberton Daisy</h4>
                <p className='text-[14px] leading-[16px] text-[#727272]/50'>SKU: <strong className='text-[#727272]'>1995751877966</strong></p>
              </div>
              <p className='text-[14px] leading-[16px] text-[#727272]'>x{item.count}</p>
              <p className='font-bold text-[18px] leading-[18px] text-[#46A358] pr-[13px]'>${item.cost}.00</p>
            </li>) : ""}
          </ul>
          <div className='pl-[160px] space-y-[25px] mb-[21px]'>
            <div className='flex items-center justify-between'>
              <p className='text-[15px] leading-[16px]'>Shiping</p>
              <p className='font-normal text-[18px] leading-[16px]'>$16.00</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-[16px] leading-[16px] font-bold'>Total</p>
              <p className='font-bold text-[18px] leading-[16px] text-[#46A358]'>$2,999.00</p>
            </div>
          </div>
          <div className='w-full h-[1px] mb-[18px] bg-[#46A35833]/20'></div>
          <p className='text-[14px] leading-[22px] text-[#727272] text-center mb-[40px]'>Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.</p>
          <Button onClick={() => handleModalClickBtn()} title='Track your order' type='button' extraStyle='w-[160px] mx-auto mb-[40px] font-bold' />
        </div>
      </Modal2>
    </div>
  )
}

export default ShoppingCard