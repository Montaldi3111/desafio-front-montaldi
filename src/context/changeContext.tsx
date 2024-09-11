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

// este context me permite modificar los datos del perfil deshabilitando el resto de los botones
// en el momento en que se hace click al boton de editar en un cambio

export const ChangeProvider:React.FC<ChangeProviderProps> = ({children}) => {
    const [change, setChange] = useState<boolean>(false);
    return (
        <ChangeContext.Provider value={{change, setChange}}>
            {children}
        </ChangeContext.Provider>
    )
}