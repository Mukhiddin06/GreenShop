"use client"
import { CloseIcon } from '@/public/images/Icons'
import React, { ReactNode, SetStateAction } from 'react'

interface ModalType {
    children:ReactNode,
    openModal: boolean,
    setOpenModal:React.Dispatch<SetStateAction<boolean>>,
    modalStyle?:string
}

const Modal2:React.FC<ModalType> = ({openModal, setOpenModal, children, modalStyle}) => {
    function handleClose(e:React.MouseEvent<HTMLDivElement, MouseEvent>){
        if((e.target as HTMLDivElement).id == "wrapper"){
            setOpenModal(false)
        }
    }


  return (
    <div onClick={handleClose}  id='wrapper' className={`fixed flex z-10 inset-0 items-center duration-300 justify-center bg-[#000]/30 ${openModal ? "" : "scale-0"}`}>
        <div className={`${modalStyle} w-[578px] mx-auto bg-white relative border-b-[10px] border-b-[#46A358]`}>
            <button className='absolute top-[14px] right-[15px]' onClick={() => setOpenModal(false)}><CloseIcon/></button>
            {children}
        </div>
    </div>
  )
}

export default Modal2
