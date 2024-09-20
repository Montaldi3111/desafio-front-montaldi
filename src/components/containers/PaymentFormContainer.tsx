"use client"
import { PaymentProvider } from '@/context/paymentContext'
import React from 'react'
import PaymentForm from '../Forms/PaymentForm/PaymentForm'

type PaymentFormParams = {
    service: ServiceType;
    cvu: string;
    token: string;
    cards: CardType[];
}

const PaymentFormContainer = ({service, cvu, token, cards} : PaymentFormParams) => {
  return (
    <>
    <PaymentProvider>
        <PaymentForm service={service} cvu={cvu} token={token} cards={cards}/>
    </PaymentProvider>
    </>
  )
}

export default PaymentFormContainer