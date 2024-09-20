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
import { createNewTransference } from '@/services/transferences/transferences.service';
import { clearBody } from '@/utils/clearPaymentBody';
import { ServerError, TransferenceError } from '@/types/errors.types';
import { toast, Toaster } from 'sonner';
type PaymentFormParams = {
    service: ServiceType;
    cvu: string;
    token: string;
    cards: CardType[];
}

const PaymentForm = ({service, cvu, token, cards} : PaymentFormParams) => {
    const methods = useForm<CompanyPaymentFormData>({
        resolver: yupResolver(CompanyTransferScheme),
        defaultValues: {
            amount: -service.invoice_value,
            accountNumber: '',
            dated: new Date(Date.now()).toISOString(),
            destination: service.name,
            origin: cvu,
            accountId: ''
        }
    });
    const { handleSubmit } = methods
    const {step, notFound, serverError, incrementStep, setServerError} = useStep();
    const [payment, setPayment] = useState({
        id: 0,
	    account_id: 0,
	    type: "",
	    description: "",
	    origin: "",
	    destination: "",
	    amount: 0,
	    dated: ""
    });

    const onSubmit = (data:CompanyPaymentFormData) => {
        setServerError(null);
        const newData = clearBody(data);
        createNewTransference(Number(newData.accountId), newData, token)
        .then(resp => {
            if(resp) {
                incrementStep();
                setPayment(resp)
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
                {step === 3 && !serverError && <SuccessStep serviceName={service.name} payment={payment} serviceValue={service.invoice_value}/>}
                </form>
            </FormProvider>
    </>
  )
}

export default PaymentForm