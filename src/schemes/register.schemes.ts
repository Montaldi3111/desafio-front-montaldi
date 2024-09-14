import * as yup from "yup"

const RegisterSchema = yup.object({
    dni: yup.string().required(),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    repeat_password: yup.string().required(),
    phone: yup.string().required()
  }).required();

export default RegisterSchema