"use client"
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import AccountStep from './AccountStep/AccountStep';
import PaymentStep from './PaymentStep/PaymentStep';
import SuccessStep from './SuccessStep/SuccessStep';
import AccountErrorStep from './AccountErrorStep/AccountErrorStep';
import ErrorPaymentStep from './ErrorPaymentStep';
import { useStep } from '@/hooks/useStep';
import CompanyTransferScheme from '@/schemes/companyTransfer.scheme';
import { yupResolver } from '@hookform/resolvers/yup';
type PaymentFormParams = {
    service: ServiceType;
    cards: CardType[];
}

const PaymentForm = ({service, cards} : PaymentFormParams) => {
    const methods = useForm<CompanyPaymentFormData>({
        resolver: yupResolver(CompanyTransferScheme),
        defaultValues: {
            amount: service.invoice_value,
            dated: new Date(Date.now()).toISOString(),
            destination: service.name,
            origin: ''
        }
    });
    const { handleSubmit, formState: { errors } } = methods
    const {step, notFound, serverError} = useStep();

    const onSubmit = (data:CompanyPaymentFormData) => {
        console.log(data)
    }

  return (
    <>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                {step === 1 && notFound && <AccountErrorStep />}
                {step === 1 && !notFound && <AccountStep />}
                {step === 2 && !notFound && <PaymentStep cards={cards} serviceName={service.name} serviceValue={service.invoice_value}/>}
                {serverError && step === 3 && <ErrorPaymentStep />}
                {step === 3 && !serverError && <SuccessStep serviceName={service.name} serviceValue={service.invoice_value}/>}
                </form>
            </FormProvider>
    </>
  )
}

export default PaymentForm