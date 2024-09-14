import { AccessDeniedError, MissingTokenError, RegisterError, ServerError, UserAccountError } from "@/types/errors.types";

const API_URL = "https://digitalmoney.digitalhouse.com/api";
const API_ENDPOINT = "/users";

// Create a new user
export const createUser = async (data: FormRegisterData): Promise<any> => {
    try {
        const response = await fetch(`${API_URL}${API_ENDPOINT}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                dni: Number(data.dni),
                email: data.email,
                firstname: data.firstName,
                lastname: data.lastName,
                password: data.password,
                phone: data.phone
            })
        })

        if (response.ok) {
            return response.json();
        } else {
            throw new RegisterError("El usuario ya existe con ese mail");
        }

    } catch (error) {
        throw new ServerError("Algo malo ha sucedido, intente de nuevo más tarde");
    }
}

export const getUserData = async (user_id: number, accessToken?: string): Promise<UserType> => {
    if (accessToken) {
        try {
            const resp: Response = await fetch(`${API_URL}${API_ENDPOINT}/${user_id}`, {
                method: "GET",
                headers: {
                    "Authorization": accessToken
                }
            })

            if (resp.ok) {
                const userData: Promise<UserType> = await resp.json();
                return userData;
            } else {
                throw new UserAccountError("No se ha encontrado ese usuario");
            }
        } catch (error) {
            throw new ServerError("Algo malo ha sucedido, intentlo más tarde");
        }
    } else {
        throw new MissingTokenError("No se ha introducido un token");
    }
}

export const updateUserData = async (user_id: number, data: EditUserType, accessToken?: string): Promise<number> => {
    if (accessToken) {
        try {
            const resp = await fetch(`${API_URL}${API_ENDPOINT}/${user_id}`, {
                method: "PATCH",
                headers: {
                    "Authorization": accessToken,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname: data.firstname,
                    lastname: data.lastname,
                    phone: data.phone,
                })
            })
            if (resp.ok) {
                return 0;
            } else {
                throw new UserAccountError("No se pudo editar ese campo, intente de nuevo")
            }
        } catch (error) {
            throw new ServerError("Algo malo ha sucedido, intente de nuevo más tarde");
        }
    } else {
        throw new MissingTokenError("No se ha introducido un token");
    }
}
