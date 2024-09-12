import React, { ReactNode, useState } from "react";
import { createContext } from "react";

interface FilterContextType {
    filter: string;
    setFilter: (value:string) => void;
}

interface FilterproviderProps {
    children: ReactNode;
}

export const FilterContext = createContext<FilterContextType | undefined>(undefined);

// este context me permite setear el filtro que aplica el usuario

export const FilterProvider:React.FC<FilterproviderProps> = ({children}) => {
    const [filter, setFilter] = useState<string>("today");
    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            {children}
        </FilterContext.Provider>
    )
}