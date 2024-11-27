import React from 'react'
import Input from './Input'

const LoginInputs = () => {
    return (
        <>
            <p className='mt-[53px] mb-[14px] leading-[16px] text-[#3D3D3D] text-[15px]'>Enter your username and password to login.</p>
            <Input name='email' placeholder='Enter your email' type='email' inputClass='w-full mb-[17px]' />
            <Input name='password' placeholder='*******************' type='password' inputClass='w-full mb-[17px]' />
            <p className='text-[#46A358] text-[14px] leading-[16px] text-end mb-[27px]'>Forgot Password?</p>
        </>
    )
}

export default LoginInputs