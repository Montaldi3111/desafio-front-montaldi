const API_URL = "https://digitalmoney.digitalhouse.com/api";
const API_ENDPOINT = "/users";

// Create a new user
export const createUser = async (data:FormRegisterData) : Promise<any> => {
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

        if(response.ok) {
            return response.json();
        } else {
            throw new Error("Could not create user");
        }
        
    } catch (error) {
        throw new Error("Could not retrieve server information");
    }
}

export const getUserData = async (user_id : number, accessToken? : string) : Promise<UserType> => {
    if(accessToken) {
        try {
            const resp:Response = await fetch(`${API_URL}${API_ENDPOINT}/${user_id}`, {
                method: "GET",
                headers: {
                    "Authorization": accessToken
                }
            })
    
            if(resp.ok) {
                const userData:Promise<UserType> = await resp.json();
                return userData;
            } else {
                throw new Error("Could not find user with that token");
            }
        } catch (error) {
            throw new Error("Could not retrieve server information");
        }
    } else {
        throw new Error("Missing access token");
    }
}

export const updateUserData = async (user_id : number, data : UserType, accessToken? : string) : Promise<number> => {
    if(accessToken) {
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
            if(resp.ok) {
                return 0;
            } else {
                return 1
            }
        } catch (error) {
            throw new Error("Could not retrieve server information");
        }
    } else {
        throw new Error("Missing access token");
    }
}
