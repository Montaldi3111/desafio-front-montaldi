"use client"
import { PaymentProvider } from '@/context/paymentContext'
import React, { useEffect } from 'react'
import PaymentForm from '../Forms/PaymentForm/PaymentForm'
import { useRouter } from 'next/navigation'

type PaymentFormParams = {
    service: ServiceType;
    accountId: number;
    cvu: string;
    token: string;
    cards: CardType[];
}

const PaymentFormContainer = ({service, accountId, cvu, token, cards} : PaymentFormParams) => {
  const router = useRouter()
  useEffect(() => {
    router.refresh();
  },[router])

  return (
    <>
    <PaymentProvider>
        <PaymentForm service={service} accountId={accountId} cvu={cvu} token={token} cards={cards}/>
    </PaymentProvider>
    </>
  )
}

export default PaymentFormContainer