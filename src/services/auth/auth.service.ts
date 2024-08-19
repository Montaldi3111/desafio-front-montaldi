const API_URL = "https://digitalmoney.digitalhouse.com/api"

// Perfoms a login request, returns a new token for store in cookies

export const loginRequest = async (data: LoginUserType) => {
    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })

        if(response.ok) {
            const data = await response.json();
            return data.token;
        }
    } catch (error) {
        console.log(error);
        throw new Error("Could not login");
    }
}