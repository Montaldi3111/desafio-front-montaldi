import React, { ReactNode, useState } from "react";
import { createContext } from "react";

interface PaymentContextType {
    step: number,
    notFound: boolean,
    serverError: string | null,
    incrementStep: () => void,
    decrementStep: () => void,
    setStep: (value: number) => void,
    setNotFound: (value: boolean) => void,
    setServerError: (value: string | null) => void,
}

interface PaymentProviderProps {
    children: ReactNode;
}

export const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

//

export const PaymentProvider:React.FC<PaymentProviderProps> = ({children}) => {
    const [step, setStep] = useState<number>(1);
    const [notFound, setNotFound] = useState<boolean>(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const incrementStep = () => {
        setStep(step + 1);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const decrementStep = () => {
        setStep(step - 1);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <PaymentContext.Provider value={{step, notFound, serverError, setStep, setNotFound, setServerError, incrementStep, decrementStep}}>
            {children}
        </PaymentContext.Provider>
    )
}

