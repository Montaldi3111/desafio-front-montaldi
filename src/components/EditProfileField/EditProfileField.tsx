"use client"
import { useContext, useEffect, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { FaCheck, FaPen, FaX } from "react-icons/fa6";
import { ChangeContext } from "@/context/changeContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type EditProfileFieldParams = {
    isEditable: boolean,
    fieldName: string;
    label: string;
    value: string;
}

const EditProfileField = ({ isEditable, fieldName, label, value }: EditProfileFieldParams) => {
    const router = useRouter();
    const { register, reset } = useFormContext();
    const [disable, setDisable] = useState<boolean>(true);
    const context = useContext(ChangeContext);
    const change = context?.change
    const setChange:any = context?.setChange

    const handleEdit = () => {
        setDisable(!disable);
        setChange(!change);
        if(!change) {
            toast.info("Para salir del modo edición haga click en la X roja")
        }
    }

    const handleCancelClick = () => {
        reset() // Restaurar el valor original
        setDisable(!disable);
        setChange(!change);
      };

    useEffect(() => {
        setDisable(true);
        setChange(false);
    }, [isEditable, setChange])

    return (
        <>
            <p id="detail-header">{label}</p>
            <div id="input-buttons-container">
            <input
                className={!disable ? 'border-2 px-1 py-2 border-blck rounded-sm':undefined}
                type={label === "Contraseña" ? "password" : "text"}
                disabled={disable}
                readOnly={disable}
                placeholder={value}
                defaultValue={value}
                {...register(fieldName)} />
            {disable ?
                <span className={`${change && "hidden"}`}>
                    <p onClick={handleEdit}><FaPen className="text-gray-400" size={15} /></p>
                </span>
                :
                <span id="check-x-field" className="items-center">
                    <button type="submit" className={`cursor-pointer text-green-500 mr-4 ${isEditable && "hidden"}`}>
                        <FaCheck size={15} />
                    </button>
                    <button className="text-red-500" onClick={handleCancelClick}><FaX size={15}/></button>
                </span>
            }
            </div>

        </>
    )
}

export default EditProfileField

