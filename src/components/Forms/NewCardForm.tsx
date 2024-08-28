"use client"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import Cards from "react-credit-cards-2"
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import * as yup from "yup"

type FormData = {
    number_id: string,
    expiration_date: string,
    first_last_name: string,
    cod: string,
}

const NewCardForm = () => {
    const schema = yup.object({
        cod: yup.string().min(3, "Mínimo 3 números").max(4, "Máximo 4 números").required("Este campo es obligatorio"),
        expiration_date: yup.string().min(4, "Mínimo 4 números").max(5, "Máximo 5 números").required("Este campo es obligatorio"),
        first_last_name: yup.string().required("Este campo es obligatorio"),
        number_id: yup.string().max(16, "Máximo 16 números").required("Este campo es obligatorio"),
    }).required()
  
    const {register, handleSubmit, watch,  formState: {errors}} = useForm<FormData>({
      resolver: yupResolver(schema),
      defaultValues: {
        number_id: "",
        expiration_date: '',
        first_last_name: '',
        cod: ''
      }
    })

    const onSubmit = (data:FormData) => {
        console.log(data);
    }

    const cardValues = watch(); // esto para que pueda pasarle los datos al componente de Card
  return (
    <>
      <form className='bg-white' onSubmit={handleSubmit(onSubmit)}>
        <Cards number={cardValues.number_id || ""}
                expiry={cardValues.expiration_date || ""}
                cvc={cardValues.cod || ""}
                name={cardValues.first_last_name || ""}
                />
            <input type="text" id="numberId" placeholder='Número de la tarjeta*' {...register("number_id")}/>
            {errors.number_id && <i className="text-red-500" id="error-msg">{errors.number_id.message}</i>}
            <input type="text" id="expirationDate"  placeholder='Fecha de vencimiento*' {...register("expiration_date")}/>
            {errors.expiration_date && <i className="text-red-500"  id="error-msg">{errors.expiration_date.message}</i>}
            <input type="text" id="firstLastName"  placeholder='Nombre y apellido*' {...register("first_last_name")}/>
            {errors.first_last_name && <i className="text-red-500" id="error-msg">{errors.first_last_name.message}</i>}
            <input type="text" id="CVC" placeholder='Código de seguridad*' {...register("cod")}/>
            {errors.cod && <i className="text-red-500"  id="error-msg">{errors.cod.message}</i>}
            <button onClick={handleSubmit(onSubmit)}>Continuar</button>
    </form>
    </>
  )
}

export default NewCardForm