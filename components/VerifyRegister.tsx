"use client"
import React, { SetStateAction } from 'react';
import {  GetProps, Input } from 'antd';

type OTPProps = GetProps<typeof Input.OTP>;
type VerifyRegisterType = {
    setRegisterVerifyValue:React.Dispatch<SetStateAction<string>>
}


const VerifyRegister:React.FC<VerifyRegisterType> = ({setRegisterVerifyValue}) => {


    const onChange: OTPProps['onChange'] = (text) => {
        setRegisterVerifyValue(text);
    };
    const sharedProps: OTPProps = {onChange};

  return (
    <div className='py-[30px]'>
        <Input.OTP formatter={(str) => str} {...sharedProps} />
    </div>
  )
}

export default VerifyRegister