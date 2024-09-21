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

type EditProfileForm = {
    first_last_name?: string;
    dni?: string;
    phone?: string;
    password?: string;
}

type FormChargeWithCardData = {
    amount: number;
    dated: string;
    destination: string;
    origin: string;
}

type CompanyPaymentFormData = {
    amount: number;
    accountNumber: string;
    dated: string;
    destination: string;
    origin: string;
    account_id: string;
    cardNumber: string;
}
