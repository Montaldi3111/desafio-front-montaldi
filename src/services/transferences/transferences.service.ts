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