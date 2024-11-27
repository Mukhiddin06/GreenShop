import React from 'react'
import Input from './Input'

const RegisterInputs = () => {
    return (
        <>
            <p className='mt-[53px] mb-[14px] leading-[16px] text-[#3D3D3D] text-[15px]'>Enter your email and password to register.</p>
            <Input name='username' placeholder='Username' type='text' inputClass='w-full mb-[17px]' />
            <Input name='email' placeholder='Enter your email address' type='email' inputClass='w-full mb-[17px]' />
            <Input name='confirmPassword' placeholder='Password' type='password' inputClass='w-full mb-[17px]' />
            <Input name='password' placeholder='Confirm Password' type='password' inputClass='w-full mb-[41px]' />
        </>
    )
}

export default RegisterInputs