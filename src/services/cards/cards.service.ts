const API_URL = "https://digitalmoney.digitalhouse.com/api";
const API_ENDPOINT = "/accounts"


// GET users cards by URL params and token

export const getAllCards = async (account_id : string, accessToken? : string) => {
    try{
        if(accessToken) {
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
        } else {
            throw new Error("Missing access token");
        }
    }catch (error) {
        throw new Error("Could not retrieve server information")
    }
}

export const addNewCard = async (account_id:number, cardData, accessToken?:string) => {
    if(accessToken) {
        try {
            const resp = await fetch(`${API_URL}${API_ENDPOINT}/${account_id}/cards`, {
                method: "POST",
                headers: {
                    "Authorization": accessToken,
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    "cod": Number(cardData.cod),
                    "expiration_date": String(cardData.expiration_date).slice(0,2)+"/20"+String(cardData.expiration_date).slice(2,5),
                    "first_last_name": cardData.first_last_name,
                    "number_id": Number(cardData.number_id)
                })
            })
            if(resp.ok) {
                return 0;
            } else {
                return 1;
            }
        } catch (error) {
            throw new Error("Error al conectar con el servidor")
        }
    } else {
        throw new Error("Missing access token");
    }
}