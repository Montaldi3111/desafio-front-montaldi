"use client"
import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import './paymentStep.css'
import { useStep } from '@/hooks/useStep'

type PaymentStepParams = {
    cards: CardType[],
    cvu: string,
    serviceName: string,
    serviceValue: number,
}

const PaymentStep = ({ cards, cvu, serviceName, serviceValue }: PaymentStepParams) => {
    const { notFound, setNotFound, decrementStep} = useStep();
    const [cardSelected, setCardSelected] = useState<any>();
    const { setValue, register, formState: { errors } } = useFormContext();

    if(serviceValue === 0) {
        setNotFound(!notFound);
        decrementStep();
    }

    useEffect(() => {
        setValue("amount", serviceValue);
        setValue("destination", serviceName);
    }, [serviceValue, setValue, serviceName]);

    return (
        <article id="payment-section">
            <div id="total-pay" className='bg-blck'>
                <span id="company-info" className='border-b-2 border-gray-500'>
                    <h1 className='font-bold text-xl text-ylw'>{serviceName}</h1>
                    <u className='text-white text-[16px]'>Ver detalles del pago</u>
                </span>
                <span id="final-price">
                    <h1 className='font-bold text-white'>Total a pagar</h1>
                    <h1 className='font-bold text-white'>${serviceValue}</h1>
                </span>
            </div>
            <div id="cards-list" className='bg-white'>
                {errors.origin && <p className='text-redError text-center'>{errors.origin.message as string}</p>}
                <h3 className='font-bold'>Tus tarjetas</h3>
                {cards && cards.length > 0 ? cards.map((card: CardType, index: number) => (
                    <span id="card-info" key={index}>
                        <div className='flex items-center'>
                            <h4 id="circle"></h4>
                            <p>Terminada en {String(card.number_id).slice(12, 16)}</p>
                        </div>
                        <input type="radio" id="card-number" value={card.number_id} {...register("cardNumber")}/>
                    </span>
                )) : <p className='font-bold text-center text-[16px]'>Usted no ha cargado ninguna tarjeta</p>}
            </div>
            <button type="submit" className='bg-ylw'>Pagar</button>
        </article>
    )
}

export default PaymentStep