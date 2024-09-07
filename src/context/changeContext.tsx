import React, { ReactNode, useState } from "react";
import { createContext } from "react";

interface ChangeContextType {
    change: boolean;
    setChange: (value:boolean) => void;
}

interface ChangeProviderProps {
    children: ReactNode;
}

export const ChangeContext = createContext<ChangeContextType | undefined>(undefined);

export const ChangeProvider:React.FC<ChangeProviderProps> = ({children}) => {
    const [change, setChange] = useState<boolean>(false);
    return (
        <ChangeContext.Provider value={{change, setChange}}>
            {children}
        </ChangeContext.Provider>
    )
}