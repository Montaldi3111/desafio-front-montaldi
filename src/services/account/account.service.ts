const API_URL = "https://digitalmoney.digitalhouse.com/api";
const API_ENDPOINT = "/account";

// GET user account by token

export const getUserAccount = async (accessToken?: string): Promise<UserAccountType> => {
    // Como el token puede ser undefined, es necesario verificarlo antes de realizar la llamada a la API
    if (accessToken) {
        try {
            const res = await fetch(`${API_URL}${API_ENDPOINT}`, {
                method: 'GET',
                headers: {
                    "Authorization": accessToken,
                }
            })
            if (res.ok) {
                const data = await res.json();
                return data as UserAccountType;
            } else {
                throw new Error("Could not retrieve account data");
            }
        } catch (error) {
            throw new Error("Could not retrieve server information");
        }
    } else {
        throw new Error("Missing Access Token");
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
                throw new Error("Could not retrieve user's balance account");
            }
        } catch (error) {
            throw new Error("Could not retrieve server information")
        }
    } else {
        throw new Error("Missing access token");
    }
}
