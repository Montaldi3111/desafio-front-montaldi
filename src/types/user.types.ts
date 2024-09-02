type UserType = {
    dni: string,
    email: string,
    firstname: string,
    lastname: string,
    password: string,
    phone: string,
}

type FormLoginData = {
    email: string;
    password: string;
}

type LoginUserType = {
    email: string,
    password: string,
}

type FormRegisterData = {
    dni: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    repeat_password: string;
    phone: string;
}

type UserAccountType = {
    alias: string,
    available_amount: number,
    cvu: string,
    id: number,
    user_id: number
}