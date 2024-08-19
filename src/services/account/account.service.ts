const API_URL = "https://digitalmoney.digitalhouse.com/api";
const API_ENDPOINT = "/account";

// GET user account by token, returns user_id

export const getUserAccount = async (accessToken: string) => {
    try {
        const res = await fetch(`${API_URL}${API_ENDPOINT}`, {
            method: 'GET',
            headers: {
                "Authorization": accessToken,
            }
        })
        if(res.ok) {
            const userData = await res.json();
            return userData;
        }
    } catch (error) {
        console.log(error);
    }
}