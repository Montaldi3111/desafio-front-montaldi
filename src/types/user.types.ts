type UserType = {
    dni: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
}

type LoginUserType = {
    email: string,
    password: string,
}

type UserAccountType = {
    alias: string,
    available_amount: number,
    cvu: string,
    id: number,
    user_id: number
}