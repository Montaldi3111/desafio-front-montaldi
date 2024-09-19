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

function restructreUser (data?:EditProfileForm) {
    if(data !== undefined){
        const user = {
            firstname: data.first_last_name?.split(" ")[0],
            lastname: data.first_last_name?.split(" ")[1],
            phone: data.phone,
            password: data.password,
        }
        return user;
    } else {
        return 0
    }
}


const EditUserProfileForm = ({ userId, userData, pass }: { userId:number, userData: UserType, pass: string }) => {

    
    const methods = useForm<EditProfileForm>({
        resolver: yupResolver<EditProfileForm>(EditUserScheme),
        defaultValues: {
            first_last_name: userData.firstname + " " + userData.lastname,
            dni: "20"+userData.dni+"7",
            phone: userData.phone,
            password: userData.password,
        }
    });

    const {handleSubmit, reset, formState: {errors}} = methods;
    const token = getCookie("token") ?? "";
    const router = useRouter();
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const [serverError, setServerError] = useState<string|null>(null);

    const onSubmit = (data: EditProfileForm) => {
        setServerError(null);
        setIsEditable(true);
        const editUserData:any = restructreUser(data);
        console.log(editUserData);
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
            setIsEditable(false);
            reset();
            router.refresh();
        })
    }

    return (
        <ChangeProvider>
        <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div id="form-field">
                <EditProfileField isEditable={isEditable} fieldName={"first_last_name"} label={"Nombre y Apellido"} value={userData.firstname + " " + userData.lastname}/>
            </div>
            <div id="form-field">
                <EditProfileField isEditable={isEditable} fieldName={"dni"} label={"CUIT"} value={"20"+userData.dni+"4"}/>
            </div>
            <div id="form-field">
                <EditProfileField isEditable={isEditable} fieldName={"phone"} label={"Teléfono"} value={userData.phone}/>
            </div>
            <div id="form-field">
                <EditProfileField isEditable={isEditable} fieldName={"password"} label={"Contraseña"} value={pass}/>
            </div>
        </form>
        </FormProvider>
        </ChangeProvider>
    )
}

export default EditUserProfileForm
