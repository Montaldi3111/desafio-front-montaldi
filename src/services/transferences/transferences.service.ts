const API_URL = "https://digitalmoney.digitalhouse.com/api";
const API_ENDPOINT = "/accounts"

// POST crea un nuevo deposito
export const createNewDeposit = async (account_id : number, deposit:any ,accessToken? : string) => {
    if(accessToken) {
        console.log(account_id, deposit);
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
                return 0; // Accion exitosa
            } else {
                return 1; // Accion fallida
            }
        } catch (error) {
            throw new Error('Could not retrieve server information')
        }
    } else {
        throw new Error("Missing access token")
    }
}