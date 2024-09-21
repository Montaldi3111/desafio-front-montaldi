import { ACCOUNT, API_URL } from "@/constants/api.constants";
import { MissingTokenError, ServerError, UserAccountError } from "@/types/errors.types";

// GET user account by token

export const getUserAccount = async (accessToken?: string): Promise<UserAccountType> => {
    // Como el token puede ser undefined, es necesario verificarlo antes de realizar la llamada a la API
    if (accessToken) {
        try {
            const res = await fetch(`${API_URL}${ACCOUNT}`, {
                method: 'GET',
                headers: {
                    "Authorization": accessToken,
                }
            })
            if (res.ok) {
                const data = await res.json();
                return data as UserAccountType;
            } else {
                throw new UserAccountError("No se ha encontrado a ese usuario");
            }
        } catch (error) {
            throw new ServerError("Algo malo ha sucedido, intente de nuevo más tarde");
        }
    } else {
        throw new MissingTokenError("No se ha introducido un token");
    }
}

// Devuelve el balance del usuario

export const getUserBalance = async (accessToken?: string): Promise<number> => {
    // Como el token puede ser undefined, es necesario verificarlo antes de realizar la llamada a la API
    if (accessToken) {
        try {
            const userData: UserAccountType = await getUserAccount(accessToken);
            if (userData) {
                return userData.available_amount;
            } else {
                throw new UserAccountError("No se pudo encontrar el balance del usuario");
            }
        } catch (error) {
            throw new ServerError("Algo malo ha sucedido, intente de nuevo más tarde")
        }
    } else {
        throw new MissingTokenError("No se ha introducido un token");
    }
}
