import { PaymentContext } from "@/context/paymentContext";
import { useContext } from "react";

export const useStep = () => {
    const context = useContext(PaymentContext);

    if (!context) {
        throw new Error("useStep must be used within a PaymentProvider");
    }

    return context;
}