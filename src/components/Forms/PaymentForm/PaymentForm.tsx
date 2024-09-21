"use client"
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import AccountStep from './AccountStep/AccountStep';
import PaymentStep from './PaymentStep/PaymentStep';
import SuccessStep from './SuccessStep/SuccessStep';
import AccountErrorStep from './AccountErrorStep/AccountErrorStep';
import ErrorPaymentStep from './ErrorPaymentStep';
import { useStep } from '@/hooks/useStep';
import CompanyTransferScheme from '@/schemes/companyTransfer.scheme';
import { yupResolver } from '@hookform/resolvers/yup';
import { createNewTransference } from '@/services/transferences/transferences.service';
import { clearBody } from '@/utils/clearPaymentBody';
import { ServerError } from '@/types/errors.types';
import { toast, Toaster } from 'sonner';

type PaymentFormParams = {
    service: ServiceType;
    accountId: number;
    cvu: string;
    token: string;
    cards: CardType[];
}

const PaymentForm = ({service, accountId, cvu, token, cards} : PaymentFormParams) => {
    const methods = useForm<CompanyPaymentFormData>({
        resolver: yupResolver(CompanyTransferScheme),
        defaultValues: {
            amount: service.invoice_value,
            accountNumber: '',
            dated: new Date(Date.now()).toISOString(),
            destination: service.name,
            origin: cvu,
            account_id: String(accountId),
            cardNumber: ''
        }
    });
    const { handleSubmit } = methods
    const {step, notFound, serverError, incrementStep, setServerError} = useStep();
    const [paymentData, setPaymentData] = useState<CompanyPaymentFormData>({
        amount: service.invoice_value,
        accountNumber: '',
        dated: new Date(Date.now()).toISOString(),
        destination: service.name,
        origin: cvu,
        account_id: String(accountId),
        cardNumber: ''
    });

    const onSubmit = (data:CompanyPaymentFormData) => {
        setPaymentData(data);
        setServerError(null);
        const newData = clearBody(data);
        createNewTransference(accountId, newData, token)
        .then(response => {
            if(response) {
                incrementStep();
            } else {
                setServerError('Error al realizar la transferencia');
                incrementStep();
            }
        }).catch(error => {
            if(error instanceof ServerError){
                toast.error(error.message)
            }
        })
    }
  return (
    <>
            <FormProvider {...methods}>
                <Toaster richColors visibleToasts={1} position='bottom-right'/>
                <form onSubmit={handleSubmit(onSubmit)}>
                {step === 1 && notFound && <AccountErrorStep />}
                {step === 1 && !notFound && <AccountStep />}
                {step === 2 && !notFound && <PaymentStep cards={cards} cvu={cvu} serviceName={service.name} serviceValue={service.invoice_value}/>}
                {serverError && step === 3 && <ErrorPaymentStep />}
                {step === 3 && !serverError && <SuccessStep payment={paymentData} />}
                </form>
            </FormProvider>
    </>
  )
}

export default PaymentForm