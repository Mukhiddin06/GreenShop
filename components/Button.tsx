import React, { ReactNode } from 'react'

interface ButtonType {
  type: "button" | "submit" | "reset",
  extraStyle?: string,
  onClick?: () => void,
  title: string,
  leftIcon?: ReactNode,
  rightIcon?: ReactNode,
}

const Button: React.FC<ButtonType> = ({ type, extraStyle, onClick, title, leftIcon, rightIcon }) => {
  return (
    <button onClick={onClick} type={type} className={`flex items-center justify-center py-[8px] rounded-[6px] bg-[#46A358] text-white ${extraStyle}`}>
      {leftIcon && leftIcon}
      <p className='pl-[3px] pr-[5px]'>
        {title}
      </p>
      {rightIcon && rightIcon}
    </button>
  )
}

export default Button