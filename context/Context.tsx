"use client"
import React, { createContext, ReactNode, SetStateAction, useEffect, useState } from "react";

interface ContextType {
    token:any | null,
    category:string | null,
    tags:string | null,
    size:string | null,
    minPrice:number | null,
    maxPrice:number | null,
    setToken:React.Dispatch<SetStateAction<any | null>>,
    setCategory:React.Dispatch<SetStateAction<string | null>>,
    setTags:React.Dispatch<SetStateAction<string | null>>,
    setSize:React.Dispatch<SetStateAction<string | null>>,
    setMinPrice:React.Dispatch<SetStateAction<number | null>>,
    setMaxPrice:React.Dispatch<SetStateAction<number | null>>
}

export const Context = createContext<ContextType>({
    setCategory:() => "",
    setSize:() => "",
    setTags:() => "",
    setToken:() => "",
    setMinPrice:() => "",
    setMaxPrice:() => "",
    category:null,
    size:null,
    tags:null,
    token:null,
    minPrice:null,
    maxPrice:null,
});

export const ContextProvider:React.FC<{children:ReactNode}> = ({children}) => {
    let data:string | null = null

    if(typeof window !== "undefined"){
        data = localStorage.getItem("user")
    }
    const [token, setToken] = useState<any>(data ? JSON.parse(data) : null);
    const [category, setCategory] = useState<string | null>(null);
    const [tags, setTags] = useState<string | null>(null);
    const [size, setSize] = useState<string | null>(null);
    const [minPrice, setMinPrice] = useState<number | null>(null);
    const [maxPrice, setMaxPrice] = useState<number | null>(null);

    if(typeof window !== "undefined"){
        localStorage.setItem("user", JSON.stringify(token))
    }

    return (
        <Context.Provider value={{token, setToken, category, setCategory, tags, setTags, size, setSize, maxPrice, minPrice, setMaxPrice, setMinPrice}}>{children}</Context.Provider>
    )
}