import * as yup from "yup"

const ChangeScheme = yup.object({
    amount: yup.number().required().min(1, "Mínima cantidad de ingreso es 1"),
    dated: yup.string(),
    destination: yup.string(),
    origin: yup.string().required("Selecciona una tarjeta")
}).required();


export default ChangeScheme