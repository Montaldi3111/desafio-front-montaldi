"use client"
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import EditProfileField from "../EditProfileField/EditProfileField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { updateUserData } from "@/services/user/user.service";
import { getCookie } from "cookies-next";
import { toast } from "sonner";

/**
 * Recreates user data by extracting and manipulating specific fields from the provided profile data.
 *
 * @param {FormEditProfileData} data - The profile data used to recreate the user.
 * @param {string} data.first_last_name - The full name of the user (expected to be in "First Last" format).
 * @param {string} data.dni - The user's DNI (Documento Nacional de Identidad) number.
 * @param {string} data.phone - The user's phone number.
 *
 * @returns {Object} The recreated user data.
 * @returns {string} return.dni - The extracted part of the DNI, corresponding to characters 2 through 9.
 * @returns {string} return.firstname - The extracted first name from the full name.
 * @returns {string} return.lastname - The extracted last name from the full name.
 * @returns {string} return.phone - The user's phone number.
 */

function recreateUser(data:FormEditProfileData) {
    const firstname:string = data.first_last_name?.split(" ")[0]
        const lastname:string = data.first_last_name?.split(" ")[1]
        const dni:string = data.dni.slice(2,10);
        const recreatedUserData = {
            dni: dni,
            firstname: firstname,
            lastname: lastname,
            phone: data.phone,
        }
        return recreatedUserData;
}

const EditUserProfileForm = ({ userId, userData, pass }: { userId:number, userData: UserType, pass: string }) => {
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
    const token = getCookie("token") ?? "";
    const router = useRouter()
    const onSubmit = (data: FormEditProfileData) => {
        const editUserData = recreateUser(data);
        updateUserData(userId, editUserData as any, token).then((response:number) => {
            if(response === 0){
                toast.success("Datos actualizados")
                router.refresh();
            }
                else toast.error("Se ha producido un error al actualizar los datos")
            }).catch((err:any) => {
                toast.error(err.message)
                router.push("/profile")
        })
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
