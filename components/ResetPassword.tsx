import React from 'react'
import Input from './Input'

const ResetPassword = () => {
  return (
    <>
        <Input name='newPassword' placeholder='Enter your new password' type='password' inputClass='w-full mt-[27px]'/>
        <Input name='otp' placeholder='Enter otp' type='text' inputClass='w-full mb-[17px] mt-[17px]'/>
    </>
  )
}

export default ResetPassword