"use client"
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import EditProfileField from "../EditProfileField/EditProfileField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

const EditUserProfileForm = ({ userData, pass }: { userData: UserType, pass: string }) => {
    const schema = yup.object({
        first_last_name: yup.string(),
        dni: yup.string(),
        phone: yup.string(),
        password: yup.string()
    }).required();

    
    const methods = useForm<FormEditProfileData>({
        resolver: yupResolver(schema),
        defaultValues: {
            first_last_name: userData.firstname + " " + userData.lastname,
            dni: "20"+userData.dni+"4",
            phone: userData.phone,
            password: userData.password
        }
    });

    const {handleSubmit, formState: {errors}} = methods;
    
    const router = useRouter()
    const onSubmit = (data: FormEditProfileData) => {
        console.log(data);
    }

    return (
        <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
                <EditProfileField fieldName={"first_last_name"} label={"Nombre y Apellido"} value={userData.firstname + " " + userData.lastname}/>
            </ul>
            <ul>
                <EditProfileField fieldName={"dni"} label={"CUIT"} value={"20"+userData.dni+"4"}/>
            </ul>
            <ul>
                <EditProfileField fieldName={"phone"} label={"Teléfono"} value={userData.phone}/>
            </ul>
            <ul>
                <EditProfileField fieldName={"password"} label={"Contraseña"} value={pass}/>
            </ul>
        </form>
        </FormProvider>
    )
}

export default EditUserProfileForm
