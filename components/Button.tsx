import React, { ReactNode } from 'react'

interface ButtonType {
    type: "button" | "submit"| "reset",
    extraStyle?: string,
    onClick: () => void,
    title:string,
    leftIcon?:ReactNode,
    rightIcon?:ReactNode,
}

const Button:React.FC<ButtonType> = ({type, extraStyle, onClick, title, leftIcon, rightIcon}) => {
  return (
    <button onClick={onClick} type={type} className={`${extraStyle} flex items-center justify-center py-[8px] rounded-[6px] bg-[#46A358] text-white`}>
        {leftIcon && leftIcon}
        {title}
        {rightIcon && rightIcon}
    </button>
  )
}

export default Button