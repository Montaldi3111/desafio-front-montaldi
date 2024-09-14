import { CardError, ServerError } from "@/types/errors.types";
import { MissingTokenError } from '../../types/errors.types';

const API_URL = "https://digitalmoney.digitalhouse.com/api";
const API_ENDPOINT = "/accounts"


// GET users cards by accountID and token
// Returns an array of cards
export const getAllCards = async (account_id: string, accessToken?: string): Promise<CardType[]> => {
    if (accessToken) {
        try {
            const resp = await fetch(`${API_URL}${API_ENDPOINT}/${account_id}/cards`, {
                method: "GET",
                headers: {
                    "Authorization": accessToken
                }
            })
            if (resp.ok) {
                const cards = await resp.json();
                return cards;
            } else {
                throw new CardError("No se han encontrado tarjetas relacionadas a esa cuenta");
            }
        } catch (error) {
            throw new ServerError("Algo malo ha sucedido, intente de nuevo más tarde")
        }
    } else {
        throw new MissingTokenError("No se ha introducido un token");
    }
}

// POST Función para agregar una tarjeta en la cuenta del usuario
export const addNewCard = async (account_id: number, cardData: FormCardData, accessToken?: string): Promise<number> => {
    if (accessToken) {
        try {
            const resp = await fetch(`${API_URL}${API_ENDPOINT}/${account_id}/cards`, {
                method: "POST",
                headers: {
                    "Authorization": accessToken,
                    "content-type": "application/json"
                },
                body: JSON.stringify({
                    cod: Number(cardData.cod),
                    expiration_date: String(cardData.expiration_date).slice(0, 2) + "/20" + String(cardData.expiration_date).slice(2, 5),
                    first_last_name: cardData.first_last_name,
                    number_id: Number(cardData.number_id)
                })
            })
            if (resp.ok) {
                return 0; // Acción exitosa
            } else {
                throw new CardError("No se pudo cargar la tarjeta, intente de nuevo");
            }
        } catch (error) {
            throw new ServerError("Algo malo ha sucedido, intente de nuevo más tarde")
        }
    } else {
        throw new MissingTokenError("No se ha introducido un token");
    }
}

// Elimina una tarjeta dado una cuenta y el id de la tarjeta

export const deleteCard = async (account_id: number, card_id: number, accessToken?: string): Promise<number> => {
    if (accessToken) {
        console.log(account_id, card_id)
        try {
            const resp = await fetch(`${API_URL}${API_ENDPOINT}/${account_id}/cards/${card_id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": accessToken
                }
            })
            if (resp.ok) {
                return 0; // Acción exitosa
            } else {
                throw new CardError("No se pudo eliminar la tarjeta, intente de nuevo");
            }
        } catch (error) {
            throw new ServerError("Algo malo ha sucedido, intente de nuevo más tarde")
        }
    } else {
        throw new MissingTokenError("No se ha introducido un token");
    }
}