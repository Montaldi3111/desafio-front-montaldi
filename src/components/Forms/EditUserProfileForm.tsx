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

function restructreUser (data:FormEditProfileData) {
        const user = {
            firstname: data.first_last_name.split(" ")[0],
            lastname: data.first_last_name.split(" ")[1],
            phone: data.phone,
        }
        return user;
}


const EditUserProfileForm = ({ userId, userData, pass }: { userId:number, userData: UserType, pass: string }) => {
    const schema = yup.object({
        first_last_name: yup.string(),
        phone: yup.string(),
    }).required()

    
    const methods = useForm<FormEditProfileData>({
        resolver: yupResolver(schema),
        defaultValues: {
            first_last_name: userData.firstname + " " + userData.lastname,
            dni: "20"+userData.dni+"4",
            phone: userData.phone,
        }
    });

    const {handleSubmit, formState: {errors}} = methods;
    const token = getCookie("token") ?? "";
    const router = useRouter();
    const [isEditable, setIsEditable] = useState<boolean>(false)
    const onSubmit = (data: FormEditProfileData) => {
        setIsEditable(true);
        const editUserData:any = restructreUser(data);
        updateUserData(userId, editUserData, token).then((response:number) => {
            if(response === 0){
                toast.success("Datos actualizados")
            }
            else {
                toast.error("Se ha producido un error al actualizar los datos")
                window.location.reload();
            }
        }).catch((err:any) => {
            toast.error(err.message)
            router.push("/profile")
        }).finally(() => {
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
