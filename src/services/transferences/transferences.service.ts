import { ServerError, TransferenceError } from "@/types/errors.types";
import { MissingTokenError } from '../../types/errors.types';

const API_URL = "https://digitalmoney.digitalhouse.com/api";
const API_ENDPOINT = "/accounts"

// POST crea un nuevo deposito
export const createNewDeposit = async (account_id : number, deposit:FormChargeWithCardData ,accessToken? : string) => {
    if(accessToken) {
        try {
            const resp = await fetch(`${API_URL}${API_ENDPOINT}/${account_id}/deposits`,{
                method: "POST",
                headers: {
                    "Authorization": accessToken,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "amount": deposit.amount,
                    "dated": deposit.dated,
                    "destination": deposit.destination,
                    "origin": deposit.origin
                })
            })
            if(resp.ok) {
                return 0; // Acción exitosa
            } else {
                throw new TransferenceError("No se pudo realizar el depósito, intente de nuevo")
            }
        } catch (error) {
            throw new ServerError('Algo malo ha sucedido, intente de nuevo más tarde')
        }
    } else {
        throw new MissingTokenError("No se ha introducido un token")
    }
}

export const createNewTransference = async (accountId: number, data:TransferenceType, accessToken? : string) => {
    if(accessToken) {
        try {
            const resp = await fetch(`${API_URL}${API_ENDPOINT}/${accountId}/transferences`, {
                method: "POST",
                headers: {
                    "Authorization": accessToken,
                },
                body: JSON.stringify({
                    "amount": data.amount,
                    "dated": data.dated,
                    "destination": data.destination,
                    "origin": data.origin
                })
            })

            if(resp.ok) {
                const data = await resp.json(); // Acción exitosa
                return data;
            } else {
                throw new TransferenceError("No se pudo realizar la transferencia, intente de nuevo");
            }
        } catch (error) {
            
        }
    } else {
        throw new MissingTokenError("No se ha introducido un token")
    }
}