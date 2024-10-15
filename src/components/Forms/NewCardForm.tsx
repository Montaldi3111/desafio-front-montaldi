"use client"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { addNewCard } from '@/services/cards/cards.service'
import { useRouter } from 'next/navigation'
import { toast, Toaster } from 'sonner'
import React, { useEffect, useState } from 'react'
import Cards from "react-credit-cards-2"
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import CardScheme from '@/schemes/card.scheme'
import { CardError, ServerError } from '@/types/errors.types'

type FormCardData = {
  number_id: string,
  expiration_date: string,
  first_last_name: string,
  cod: string,
}

type NewCardFormParams = {
  totalCards: number,
  account_id: number,
  token: string,
}

const NewCardForm = ({ totalCards, account_id, token }: NewCardFormParams) => {

  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null)

  useEffect(() => {
    if(totalCards >= 10) {
      router.push("/cards")
    }
  },[router, totalCards])

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormCardData>({
    resolver: yupResolver(CardScheme),
    defaultValues: {
      number_id: "",
      expiration_date: '',
      first_last_name: '',
      cod: ''
    }
  })

  const onSubmit = (data: FormCardData) => {
    setServerError(null)
    addNewCard(account_id, data, token).then((response) => {
      if (response === 0) {
        toast.success("Tarjeta agregada")
      }
    }).finally(() => {
      router.push("/cards")
      router.refresh();
    }).catch(error => {
      switch (error) {
        case (error instanceof CardError): {
          setServerError("Se ha producido un error al añadir la tarjeta")
          break;
        }
        case (error instanceof ServerError): {
          setServerError("Algo malo ha sucedido, intente de nuevo más tarde")
          toast.error(serverError)
          break;
        }
        default: {
          setServerError("Se ha producido un error inesperado")
          toast.error(serverError)
          break;
        }
      }
    })
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

        <div id="input-container">
          <div id="container-1">
            <div>
              {errors.number_id && <i id="error-msg">{errors.number_id.message}</i>}
              <input type="text" className={errors.number_id ? "input-error" : undefined} id="numberId" placeholder='Número de la tarjeta*' {...register("number_id")} />
            </div>
            <div>
              {errors.first_last_name && <i id="error-msg">{errors.first_last_name.message}</i>}
              <input type="text" id="firstLastName" placeholder='Nombre y apellido*' {...register("first_last_name")} />
            </div>
          </div>
          <div id="container-2">
            <div>
              {errors.expiration_date && <i id="error-msg">{errors.expiration_date.message}</i>}
              <input type="text" id="expirationDate" placeholder='Fecha de vencimiento*' {...register("expiration_date")} />
            </div>
            <div>
              {errors.cod && <i id="error-msg">{errors.cod.message}</i>}
              <input type="text" id="CVC" placeholder='Código de seguridad*' {...register("cod")} />
            </div>
            <button className='bg-ylw' onClick={handleSubmit(onSubmit)}>Continuar</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default NewCardForm