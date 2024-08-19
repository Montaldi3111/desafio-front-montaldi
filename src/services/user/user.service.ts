const API_URL = "https://digitalmoney.digitalhouse.com/api/";
const API_ENDPOINT = "users";

// Create a new user
export const createUser = async (data:UserType) => {
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
        }
        
    } catch (error) {
        throw new Error("Could not create user");
    }
}
