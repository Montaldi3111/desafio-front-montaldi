import * as yup from "yup";

const CardScheme = yup.object({
    cod: yup.string().min(3, "Mínimo 3 números").max(4, "Máximo 4 números").required("Este campo es obligatorio"),
    expiration_date: yup.string().min(4, "Mínimo 4 números").max(5, "Máximo 5 números").required("Este campo es obligatorio"),
    first_last_name: yup.string().required("Este campo es obligatorio"),
    number_id: yup.string().max(16, "Máximo 16 números").required("Este campo es obligatorio"),
  }).required();

export default CardScheme