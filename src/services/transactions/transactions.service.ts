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
                throw new Error('Could not get user activity');
            }
        } catch (error) {
            throw new Error('Could not retrieve server information')
        }
    } else {
        throw new Error('Missing access token');
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
                throw new Error("Could not find the transaction with that account")
            }
        } catch (error) {
            throw new Error("Could not retrieve server information")
        }
    } else {
        throw new Error("Missing access token")
    }
}

