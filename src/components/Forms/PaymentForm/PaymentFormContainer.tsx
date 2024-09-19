"use client"
import { PaymentProvider } from '@/context/paymentContext'
import React from 'react'
import PaymentForm from './PaymentForm'

type PaymentFormParams = {
    service: ServiceType;
    cards: CardType[];
}

const PaymentFormContainer = ({service, cards} : PaymentFormParams) => {
  return (
    <>
    <PaymentProvider>
        <PaymentForm service={service} cards={cards}/>
    </PaymentProvider>
    </>
  )
}

export default PaymentFormContainer