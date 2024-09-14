import * as yup from "yup";

const EditUserScheme = yup.object({
    first_last_name: yup.string(),
    phone: yup.string(),
}).required();

export default EditUserScheme;