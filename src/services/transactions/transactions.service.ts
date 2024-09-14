import { MissingTokenError, ServerError, TransactionError } from "@/types/errors.types";

const API_URL = process.env.API_URL;
const API_ENDPOINT = "/accounts";

export const getAllTransactions = async (accountId : number, accessToken? : string) : Promise<TransactionType[]> => {
    if(accessToken) {
        try {
            const resp = await fetch(`${API_URL}${API_ENDPOINT}/${accountId}/activity`, {
                method: "GET",
                headers: {
                    "Authorization": accessToken
                }
            });
    
            if(resp.ok) {
                const data:TransactionType[] = await resp.json();
                return data;
            } else {
                throw new TransactionError('No se pudo obtener los movimientos del usuario');
            }
        } catch (error) {
            throw new ServerError('Algo malo ha sucedido, intente de nuevo más tarde')
        }
    } else {
        throw new MissingTokenError('No se ha introducido un token');
    }
}

// Función para devolverme una transaccion pasando el accountId y la transactionId

export const getOneTransaction = async (accountId:string, transactionId:string, accessToken?:string) => {
    if(accessToken) {
        try {
            const resp = await fetch(`${API_URL}${API_ENDPOINT}/${accountId}/transactions/${transactionId}`, {
                method: "GET",
                headers: {
                    "Authorization": accessToken
                }
            })
            if(resp.ok) {
                const data = await resp.json();
                return data
            } else {
                throw new TransactionError("No se pudo encontrar esa transacción")
            }
        } catch (error) {
            throw new ServerError("Algo malo ha sucedido, intente de nuevo más tarde")
        }
    } else {
        throw new MissingTokenError("No se ha introducido un token")
    }
}

