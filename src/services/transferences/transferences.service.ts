import { ServerError, TransferenceError } from "@/types/errors.types";
import { MissingTokenError } from '../../types/errors.types';
import { ACCOUNTS, API_URL, DEPOSITS, TRANSFERENCES } from "@/constants/api.constants";


// POST crea un nuevo deposito para la cuenta pasada por parámetro
export const createNewDeposit = async (account_id : number, deposit:FormChargeWithCardData ,accessToken? : string) : Promise<number> => {
    if(accessToken) {
        try {
            const resp = await fetch(`${API_URL}${ACCOUNTS}/${account_id}${DEPOSITS}`,{
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

// POST Crea una transferencía asociada a una cuenta

export const createNewTransference = async (accountId: number, data:TransferenceType, accessToken? : string) : Promise<TransactionType | undefined> => {
    if(accessToken) {
        try {
            const resp = await fetch(`${API_URL}${ACCOUNTS}/${accountId}${TRANSFERENCES}`, {
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
                const data = await resp.json();
                return data as TransactionType;
            } else {
                throw new TransferenceError("No se pudo realizar la transferencia, intente de nuevo");
            }
        } catch (error) {
        }
    } else {
        throw new MissingTokenError("No se ha introducido un token")
    }
}