"use client"
import React, { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";

interface ContextType {
    token:string | null
    category:string | null
    tags:string | null
    size:string | null
    setToken:React.Dispatch<SetStateAction<string | null>>
    setCategory:React.Dispatch<SetStateAction<string | null>>
    setTags:React.Dispatch<SetStateAction<string | null>>
    setSize:React.Dispatch<SetStateAction<string | null>>
}

export const Context = createContext<ContextType>({
    setCategory:() => "",
    setSize:() => "",
    setTags:() => "",
    setToken:() => "",
    category:null,
    size:null,
    tags:null,
    token:null
});

export const ContextProvider:React.FC<{children:ReactNode}> = ({children}) => {
    const [token, setToken] = useState<string | null>(null);
    const [category, setCategory] = useState<string | null>(null);
    const [tags, setTags] = useState<string | null>(null);
    const [size, setSize] = useState<string | null>(null);


    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setToken(JSON.parse(savedUser));
        }
    }, [])

    // console.log(token)

    return (
        <Context.Provider value={{token, setToken, category, setCategory, tags, setTags, size, setSize}}>{children}</Context.Provider>
    )
}