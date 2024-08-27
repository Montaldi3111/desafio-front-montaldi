const API_URL = "https://digitalmoney.digitalhouse.com/api";
const API_ENDPOINT = "/account";

// GET user account by token

export const getUserAccount = async (accessToken: string) => {
    try {
        const res = await fetch(`${API_URL}${API_ENDPOINT}`, {
            method: 'GET',
            headers: {
                "Authorization": accessToken,
            }
        })
        if(res.ok) {
            return await res.json();
        }
    } catch (error) {
        throw new Error("Could not retrieve user data");
    }
}

// Returns the balance of the account

export const getUserBalance = async (accessToken?: string) => {
    try {
        if(accessToken){
            const userData = await getUserAccount(accessToken);
            if(userData) {
                return userData.available_amount;
            }
        } else {
            throw new Error("Missing access token");
        }
    }catch (error) {
        throw new Error("Error getting user balance");
    }
}