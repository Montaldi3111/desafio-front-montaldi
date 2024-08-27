const API_URL = process.env.API_URL;
const API_ENDPOINT = "/accounts";

export const getAllTransactions = async (accountId : number, accessToken? : string) : Promise<TransactionType[]> => {
    try {
        if(accessToken) {
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
                throw new Error('Could not retrieve information');
            }
        } else {
            throw new Error('Missing access token');
        }
    } catch (error) {
        throw new Error('Could not reach server')
    }
}

