import * as yup from "yup"

const RegisterSchema = yup.object({
    dni: yup.string().required("Este campo es obligatorio"),
    firstName: yup.string()
    .matches( /^[^0-9]*$/, "No puede contener números")
    .required("Este campo es obligatorio"),
    lastName: yup.string()
    .matches( /^[^0-9]*$/, "No puede contener números")
    .required("Este campo es obligatorio"),
    email: yup.string().email("Email no válido").required("Este campo es obligatorio"),
    password: yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{6,12}$/, 'Contraseña no válida')
    .required('Este campo es obligatorio'),
    repeat_password: yup.string()
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
    .required('Este campo es obligatorio'),
    phone: yup.string()
    .required("Este campo es obligatorio")
  }).required();

export default RegisterSchema