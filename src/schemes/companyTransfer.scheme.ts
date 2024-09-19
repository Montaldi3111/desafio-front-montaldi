import * as yup from "yup";

const CompanyTransferScheme = yup.object({
        amount: yup.number().required(),
        dated: yup.string().required(),
        destination: yup.string().required(),
        origin: yup.string().required(),
    }).required();

export default CompanyTransferScheme;