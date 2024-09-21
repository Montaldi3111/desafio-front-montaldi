import { API_URL } from "@/constants/api.constants";
import { AccessDeniedError } from "@/types/errors.types";

// POST Logea al usuario devolviendo un accessToken

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
            throw new AccessDeniedError("Credenciales inválidas");
        }
    } catch (error) {
        throw new AccessDeniedError("Algo malo ha sucedido, intente de nuevo más tarde");
    }
}

// POST Realiza un logout del usuario

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
        throw new AccessDeniedError("Algo malo ha sucedido, intente de nuevo más tarde");
    }
}