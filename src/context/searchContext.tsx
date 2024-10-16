import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect, useState } from "react";
import { createContext } from "react";

interface SearchContextType {
    inputValue: string;
    setInputValue: (value:string) => void;
}

interface SearchProviderProps {
    children: ReactNode;
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined);

//

export const SearchProvider:React.FC<SearchProviderProps> = ({children}) => {
    const router = useRouter();
    const [inputValue, setInputValue] = useState<string>("");
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const filter = searchParams.get('filter') || '';
        setInputValue(filter);
    },[router])
    return (
        <SearchContext.Provider value={{inputValue, setInputValue}}>
            {children}
        </SearchContext.Provider>
    )
}

