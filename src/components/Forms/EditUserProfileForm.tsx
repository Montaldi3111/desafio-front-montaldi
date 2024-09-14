"use client"
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import EditProfileField from "../EditProfileField/EditProfileField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { updateUserData } from "@/services/user/user.service";
import { getCookie } from "cookies-next";
import { toast } from "sonner";
import { ChangeProvider } from "@/context/changeContext";
import { useState } from "react";
import EditUserScheme from "@/schemes/editUser.scheme";
import { ServerError } from "@/types/errors.types";

function restructreUser (data:FormEditProfileData) {
        const user = {
            firstname: data.first_last_name.split(" ")[0],
            lastname: data.first_last_name.split(" ")[1],
            phone: data.phone,
        }
        return user;
}


const EditUserProfileForm = ({ userId, userData, pass }: { userId:number, userData: UserType, pass: string }) => {

    
    const methods = useForm<FormEditProfileData>({
        resolver: yupResolver(EditUserScheme),
        defaultValues: {
            first_last_name: userData.firstname + " " + userData.lastname,
            dni: "20"+userData.dni+"4",
            phone: userData.phone,
        }
    });

    const {handleSubmit, reset, formState: {errors}} = methods;
    const token = getCookie("token") ?? "";
    const router = useRouter();
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [serverError, setServerError] = useState<string|null>(null);

    const onSubmit = (data: FormEditProfileData) => {
        setServerError(null);
        setIsEditable(true);
        const editUserData:any = restructreUser(data);
        updateUserData(userId, editUserData, token).then((response:number) => {
            if(response === 0){
                toast.success("Datos actualizados")
            }
            else {
                setServerError("Error al editar el campo")
                toast.error(serverError)
                window.location.reload();
            }
        }).catch((error) => {
            if(error instanceof ServerError) {
                setServerError("Algo malo ha sucedido, intente de nuevo más tarde");
            }
        }).finally(() => {
            reset();
            setIsEditable(false);
            router.refresh();
        })
    }

    return (
        <ChangeProvider>
        <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
                <EditProfileField isEditable={isEditable} fieldName={"first_last_name"} label={"Nombre y Apellido"} value={userData.firstname + " " + userData.lastname}/>
            </ul>
            <ul>
                <EditProfileField isEditable={isEditable} fieldName={"dni"} label={"CUIT"} value={"20"+userData.dni+"4"}/>
            </ul>
            <ul>
                <EditProfileField isEditable={isEditable} fieldName={"phone"} label={"Teléfono"} value={userData.phone}/>
            </ul>
            <ul>
                <EditProfileField isEditable={isEditable} fieldName={"password"} label={"Contraseña"} value={pass}/>
            </ul>
        </form>
        </FormProvider>
        </ChangeProvider>
    )
}

export default EditUserProfileForm
