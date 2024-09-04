"use client"
import { useEffect, useRef, useState } from "react";
import Image from "next/image"
import { useForm, useFormContext } from "react-hook-form";
import { FaCheck, FaX } from "react-icons/fa6";

type EditProfileFieldParams = {
    fieldName: string;
    label: string;
    value: string;
}

const EditProfileField = ({ fieldName, label, value }: EditProfileFieldParams) => {
    const { register } = useFormContext();
    const [disable, setDisable] = useState<boolean>(true);

    const handleInput = () => {
        setDisable(!disable);
    }

    useEffect(() => {
        if (!disable) {
            const inputElement = document.querySelector("." + fieldName) as HTMLInputElement;
            if (inputElement) {
                inputElement.focus();
            }
        }
    }, [disable]);
    return (
        <>
            <li id="detail-header">{label}</li>
            <input
                type="text"
                readOnly={disable}
                id="user-info"
                placeholder={value}
                defaultValue={value}
                {...register(fieldName)} />
            {disable ?
                <li className='cursor-pointer' onClick={handleInput}><Image src="/edit-icon.png" alt="edit-this-field" width={15} height={10} /></li>
                :
                <>
                <button type="submit" className='cursor-pointer'><FaCheck size={20}/></button>
                <button onClick={handleInput}><FaX size={15}/></button>
                </>               
            }

        </>
    )
}

export default EditProfileField

