"use client"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import Cards from "react-credit-cards-2"
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import * as yup from "yup"
import { addNewCard } from '@/services/cards/cards.service'
import { useRouter } from 'next/navigation'
import { toast, Toaster } from 'sonner'

type FormData = {
  number_id: string,
  expiration_date: string,
  first_last_name: string,
  cod: string,
}

type NewCardFormParams = {
  account_id: number,
  token: string,
}

const NewCardForm = ({account_id, token} : NewCardFormParams) => {
  const schema = yup.object({
    cod: yup.string().min(3, "Mínimo 3 números").max(4, "Máximo 4 números").required("Este campo es obligatorio"),
    expiration_date: yup.string().min(4, "Mínimo 4 números").max(5, "Máximo 5 números").required("Este campo es obligatorio"),
    first_last_name: yup.string().required("Este campo es obligatorio"),
    number_id: yup.string().max(16, "Máximo 16 números").required("Este campo es obligatorio"),
  }).required()

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      number_id: "",
      expiration_date: '',
      first_last_name: '',
      cod: ''
    }
  })
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    addNewCard(account_id, data, token).then((response) => {
      if(response === 0){
        toast.success("Tarjeta agregada correctamente")
        router.push("/cards")
      } else {
        toast.error("Error, revise los campos")
      }
    }).catch(err => {
      console.log(err)
    })
  }

  const cardValues = watch(); // esto para que pueda pasarle los datos al componente de Card
  return (
    <>
      <form className='bg-white' onSubmit={handleSubmit(onSubmit)}>
        <Toaster richColors visibleToasts={1} position='bottom-left'/>
        <Cards number={cardValues.number_id || ""}
          expiry={cardValues.expiration_date || ""}
          cvc={cardValues.cod || ""}
          name={cardValues.first_last_name || ""}
        />
        <div id="input-container">
        <input type="text" id="numberId" placeholder='Número de la tarjeta*' {...register("number_id")} />
        {errors.number_id && <i className="text-red-500" id="error-msg">{errors.number_id.message}</i>}
        <input type="text" id="expirationDate" placeholder='Fecha de vencimiento*' {...register("expiration_date")} />
        {errors.expiration_date && <i className="text-red-500" id="error-msg">{errors.expiration_date.message}</i>}
        <input type="text" id="firstLastName" placeholder='Nombre y apellido*' {...register("first_last_name")} />
        {errors.first_last_name && <i className="text-red-500" id="error-msg">{errors.first_last_name.message}</i>}
        <input type="text" id="CVC" placeholder='Código de seguridad*' {...register("cod")} />
        {errors.cod && <i className="text-red-500" id="error-msg">{errors.cod.message}</i>}
        <button className='bg-ylw' onClick={handleSubmit(onSubmit)}>Continuar</button>
        </div>
      </form>
    </>
  )
}

export default NewCardForm