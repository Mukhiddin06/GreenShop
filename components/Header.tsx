"use client"
import { LogoutIcon, SaveIcon, SearchIcon } from '@/public/images/Icons'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import LoginInputs from './LoginInputs'
import RegisterInputs from './RegisterInputs'
import { useAxios } from '@/hooks/useAxios'

const Header = () => {
    const path = usePathname()
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [isLogin , setIsLogin] = useState<"login" | "register">("login")

    function handleClickBtn():void {
      setLoginModal(true)
    }

    function handleSubmit(e:React.MouseEvent<HTMLFormElement>){
      e.preventDefault()
      if(isLogin == "login"){
        const data = {
          usernameoremail:(e.target as HTMLFormElement).email.value,
          password:(e.target as HTMLFormElement).password.value
        }
        useAxios().post("/login", data).then(res => {
          console.log(res)
        })
      }
      else{
        const data = {
          email:(e.target as HTMLFormElement).email.value,
          firstName:(e.target as HTMLFormElement).username.value,
          lastName:(e.target as HTMLFormElement).username.value,
          password:(e.target as HTMLFormElement).password.value
        }
        useAxios().post("/register", data).then(res => {
          console.log(res)
        })
      }
    }

  return (
    <header className='flex items-center justify-between w-[1200px] mx-auto pt-[26px] pb-[18px] border-b-[1px] border-b-[#46A35880]'>
        <Image style={{width:"150px", height:"34px"}} priority  alt='Logo' src={"/Logo.svg"} width={150} height={34}/>
        <nav className='flex items-center space-x-[50px]'>
            <Link className={`${path == "/" ? "home_link font-bold" : ""} text-[16px] leading-[20px] text-[#3D3D3D]`} href={"/"}>Home</Link>
            <Link className={`${path == "/shop" ? "home_link font-bold" : ""} text-[16px] leading-[20px] text-[#3D3D3D]`} href={"/shop"}>Shop</Link>
            <Link className={`${path == "/plant-care" ? "home_link font-bold" : ""} text-[16px] leading-[20px] text-[#3D3D3D]`} href={"/plant-care"}>Plant Care</Link>
            <Link className={`${path == "/blogs" ? "home_link font-bold" : ""} text-[16px] leading-[20px] text-[#3D3D3D]`} href={"/blogs"}>Blogs</Link>
        </nav>
        <div className='flex justify-between gap-[30px]'>
          <button><SearchIcon/></button>
          <button><SaveIcon/></button>
          <Button extraStyle='gap-[5px] w-[100px] font-semibold' leftIcon={<LogoutIcon/>} onClick={handleClickBtn} type='button' title='Login' />
          <Modal openModal={loginModal} setOpenModal={setLoginModal}>
              <ul className='flex items-center justify-center gap-[10px] font-semibold text-[20px] leading-[16px] cursor-pointer'>
                <li onClick={() => setIsLogin("login")} className={`${isLogin == "login" ? "text-[#46A358]" : ""} pr-[12px] border-r-[1px] border-[#3D3D3D]`}>Login</li>
                <li onClick={() => setIsLogin("register")} className={`${isLogin == "register" ? "text-[#46A358]" : ""} `}>Register</li>
              </ul>
              <form onSubmit={handleSubmit} className='w-[300px] mx-auto' autoComplete='off'>
                {isLogin == "login" ? <LoginInputs/> : <RegisterInputs/>}
                <Button extraStyle='w-full text-[18px] font-bold py-[14px]' onClick={() => {}} type='submit' title='Login'/>
              </form>
          </Modal>
        </div>
    </header>
  )
}

export default Header