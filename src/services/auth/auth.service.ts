const API_URL = "https://digitalmoney.digitalhouse.com/api"

// Esta función realiza una petición de login a la API y devuelve un token

export const loginRequest = async (data: LoginUserType) : Promise<string> => {
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
        } else {
            throw new Error("Invalid email or password");
        }
    } catch (error) {
        throw new Error("Could not retrieve server information");
    }
}

export const logoutSession = async(): Promise<boolean> => {
    try {
        const response = await fetch(`${API_URL}/logout`, {
            method: "POST"
        })
        if(response.status === 202) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw new Error("Could not retrieve server information");
    }
}