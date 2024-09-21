import * as yup from "yup";

const CompanyTransferScheme = yup.object({
        amount: yup.number().required(),
        accountNumber: yup.string()
        .min(11, "El número de cuenta tiene que tener al menos 11 carácteres.")
        .max(11, "El número de cuenta tiene que tener al menos 11 carácteres.")
        .matches(/^[^2]/, "El número de la cuenta no debe empezar con el número 2")
        .required("Este campo es obligatorio"),
        dated: yup.string().required(),
        destination: yup.string().required(),
        origin: yup.string().required(),
        account_id: yup.string().required(),
        cardNumber: yup.string().required("Debes elegir una tarjeta")
    }).required();

export default CompanyTransferScheme;