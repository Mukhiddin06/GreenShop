"use client"
import React from 'react'

interface InputType {
    inputClass?:string,
    type:"text" | "password" | "email"
    placeholder:string,
    name:string
}

const Input:React.FC<InputType> = ({name, placeholder, type, inputClass}) => {
  return (
    <input className={`${inputClass} placeholder:text-[#A5A5A5] py-[12px] px-[14px] text-[14px] border-[2px] border-[#EAEAEA] outline-none duration-300 focus:border-[#46A358] rounded-[5px]`} type={type} placeholder={placeholder} name={name} required />
  )
}

export default Input