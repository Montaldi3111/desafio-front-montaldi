type FormLoginData = {
    email: string;
    password: string;
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

type FormEditProfileData = {
    first_last_name: string;
    dni: string;
    phone: string;
    password?: string;
}
