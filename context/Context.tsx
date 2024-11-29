"use client"
import { createContext, ReactNode, useEffect, useState } from "react";

interface ContextType {
    token: string | null,
    setToken: (token: string | null) => void
}

export const Context = createContext<ContextType | undefined>(undefined);

export const UserContext = ({children}:{children:ReactNode}) => {
    // const savedUser = localStorage.getItem("user");
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        // Bu kod faqat brauzerda ishlaydi
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setToken(JSON.parse(savedUser));
        }
    }, [])

    // console.log(token)

    return (
        <Context.Provider value={{token, setToken}}>{children}</Context.Provider>
    )
}