const API_URL = "https://digitalmoney.digitalhouse.com/api";
const API_ENDPOINT = "/accounts"


// GET users cards by accountID and token
// Returns an array of cards
export const getAllCards = async (account_id : string, accessToken? : string) : Promise<CardType[]> => {
    if(accessToken) {
        try {
            const resp = await fetch(`${API_URL}${API_ENDPOINT}/${account_id}/cards`, {
                method: "GET",
                headers: {
                    "Authorization": accessToken
                }
            })
            if(resp.ok) {
                const cards = await resp.json();
                return cards;
            } else {
                throw new Error("AccountId or access token not found");
            }
        } catch (error) {
            throw new Error("Could not retrieve server information")
        }
    } else {
        throw new Error("Missing access token");
    }
}

export const addNewCard = async (account_id:number, cardData:FormCardData, accessToken?:string) : Promise<number> => {
    // Esto realiza una petición para agregar una tarjeta en la cuenta del usuario
    if(accessToken) {
        try {
            const resp = await fetch(`${API_URL}${API_ENDPOINT}/${account_id}/cards`, {
                method: "POST",
                headers: {
                    "Authorization": accessToken,
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    cod: Number(cardData.cod),
                    expiration_date: String(cardData.expiration_date).slice(0,2)+"/20"+String(cardData.expiration_date).slice(2,5),
                    first_last_name: cardData.first_last_name,
                    number_id: Number(cardData.number_id)
                })
            })
            if(resp.ok) {
                return 0; // En caso de realizar el método de manera exitosa
            } else {
                return 1; // En caso de que el método falló
            }
        } catch (error) {
            throw new Error("Error al conectar con el servidor")
        }
    } else {
        throw new Error("Missing access token");
    }
}

export const deleteCard = async (account_id:number, card_id:number, accessToken?:string) => {
    
}