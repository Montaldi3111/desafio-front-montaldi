"use client"
import { useContext, useEffect, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import { FaCheck, FaPen, FaX } from "react-icons/fa6";
import { ChangeContext } from "@/context/changeContext";

type EditProfileFieldParams = {
    isEditable: boolean,
    fieldName: string;
    label: string;
    value: string;
}

const EditProfileField = ({ isEditable, fieldName, label, value }: EditProfileFieldParams) => {
    const context = useContext(ChangeContext);
    const { register } = useFormContext();
    const [disable, setDisable] = useState<boolean>(true);
    const { change, setChange } = context;

    const handleInput = () => {
        setDisable(!disable);
        setChange(!change);
    }

    useEffect(() => {
        setDisable(true);
        setChange(false);
    }, [isEditable])

    return (
        <>
            <li id="detail-header">{label}</li>
            <input
                type="text"
                disabled={disable}
                readOnly={disable}
                id="user-info"
                placeholder={value}
                defaultValue={value}
                {...register(fieldName)} />
            {disable ?
                <span className={`${change && "hidden"}`}>
                    <li onClick={handleInput}><FaPen className="text-slate-500" size={15} /></li>
                </span>
                :
                <span id="check-x-field" className="items-center">
                    <button type="submit" className={`cursor-pointer text-green-500 ${isEditable && "hidden"}`}>
                        <FaCheck size={15} />
                    </button>
                    <button className="text-red-500" onClick={handleInput}><FaX size={15}/></button>
                </span>
            }

        </>
    )
}

export default EditProfileField

