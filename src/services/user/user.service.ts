import { API_URL, USERS } from "@/constants/api.constants";
import { MissingTokenError, RegisterError, ServerError, UserAccountError } from "@/types/errors.types";


// POST Registra un nuevo usuario
export const createUser = async (data: FormRegisterData): Promise<any> => {
    try {
        const response = await fetch(`${API_URL}${USERS}`, {
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

// GET devuelve los datos del usuario según su ID

export const getUserData = async (user_id: number, accessToken?: string): Promise<UserType> => {
    if (accessToken) {
        try {
            const resp: Response = await fetch(`${API_URL}${USERS}/${user_id}`, {
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

// PATCH edita la información de la cuenta del usuario

export const updateUserData = async (user_id: number, data: EditUserType, accessToken?: string): Promise<number> => {
    if (accessToken) {
        try {
            const resp = await fetch(`${API_URL}${USERS}/${user_id}`, {
                method: "PATCH",
                headers: {
                    "Authorization": accessToken,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname: data.firstname,
                    lastname: data.lastname,
                    phone: data.phone,
                    password: data.password
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
