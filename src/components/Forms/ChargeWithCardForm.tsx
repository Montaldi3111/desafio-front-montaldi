"use client"
import { createNewDeposit } from '@/services/transferences/transferences.service';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { CiCirclePlus } from 'react-icons/ci';
import { FaArrowRight, FaPenToSquare } from 'react-icons/fa6';
import { toast } from 'sonner';
import * as yup from "yup"
import ActionSuccessCard from '../Cards/ActionSuccessCard/ActionSuccessCard';
import { dateFormatter } from '@/utils/dateFunctions';
import ChangeScheme from '@/schemes/changeCard.scheme';
import { ServerError, TransferenceError } from '@/types/errors.types';
import CurrentPage from '../CurrentPage/CurrentPage';
type ChargeWithCardParams = {
    cards: CardType[],
    accountId: number,
    cvu: string,
    token: string,
}

const ChargeWithCardForm = ({ cards, accountId, cvu, token }: ChargeWithCardParams) => {
    const { register, handleSubmit, formState: { errors }, trigger, watch, setValue } = useForm<FormChargeWithCardData>({
        resolver: yupResolver(ChangeScheme),
        defaultValues: {
            amount: 0,
            dated: new Date().toISOString(),
            destination: "",
            origin: ""
        }
    })
    
    const router = useRouter();
    const [step, setStep] = useState<number>(0)
    const [serverError, setServerError] = useState<string|null>(null);
    const origin = watch("origin");
    const amount = watch("amount");


    
    // Esto es para setear el horario cuando se este realizando el deposito
    useEffect(() => {
        var dateSuccess: string = dateFormatter(new Date().toISOString());
        if (document !== null) {
            const dateField = document.getElementById("date-success");
            if (dateField) {
                dateField.textContent = dateSuccess;
            }
        }
    }, [step])
    
    
    // Sincronizamos el valor de origin con el de destination
    useEffect(() => {
        if (origin) {
            setValue("destination", origin);
        }
    }, [origin, setValue]);
    
    
    

    const decrementStep = () => {
        setStep(step - 1)
    }
    
    const incrementStep = () => {
        setStep(step + 1)
    }

    const goToNextStep = async () => {
        // Necesito válidar el paso 1 y 2
        let isValid = true;

        if (step === 0) {
            isValid = await trigger("origin"); // Aquí se verifica el paso 1
        } else if (step === 1) {
            isValid = await trigger("amount"); // Aquí se verifica el paso 2
        }

        if (isValid) {
            incrementStep(); // Se avanza si la validación es correcta
        }
    };

    const navigate = () => {
        router.push('/dashboard');
    }

    const onSubmit = (data: FormChargeWithCardData) => {
        setServerError(null);
        createNewDeposit(accountId, data, token).then(response => {
            if (response === 0) {
                incrementStep();
            }
        }).catch(error => {
            switch(error) {
                case (error instanceof TransferenceError): {
                    setServerError("No se pudo realizar el depósito, intente de nuevo");
                    toast.error(serverError);
                }
                case (error instanceof ServerError): {
                    setServerError("Algo malo ha sucedido, intente de nuevo más tarde");
                    toast.error(serverError);
                }
            }
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CurrentPage />
            {step === 0 && <>
                <section id="select-card-section" className='bg-blck'>
                    <h3 className='font-bold'>Seleccionar tarjeta</h3>
                    <div id="cards-container" className='bg-white text-black'>
                        <h3 className='font-bold'>Tus tarjetas</h3>
                        {cards.map((card: CardType, index: number) => (
                            <span key={index}>
                                <div>
                                    <h4 id="circle"></h4>
                                    <p>Terminada en {String(card.number_id).slice(12, 16)}</p>

                                </div>
                                <input type="radio" id="card-number" value={card.first_last_name} {...register("origin")} />
                            </span>
                        ))}
                        {(errors.origin) && <i className='text-red-500'>{errors.origin.message}</i>}
                    </div>
                    <div id='buttons-container'>
                        <Link href="/cards/new-card"><CiCirclePlus /><h3 className='font-bold'>Nueva tarjeta</h3></Link>
                        <button type="button" className={`${origin === "" ? 'bg-ylwBlck cursor-not-allowed' : 'bg-ylw'}`} onClick={goToNextStep} disabled={origin === ""}>Continuar</button>
                    </div>
                </section>
                <div id="out-section">
                    <h4></h4>
                    <button type="button" id="button-out-section" className={`${origin === "" ? 'bg-ylwBlck cursor-not-allowed' : 'bg-ylw'}`} onClick={goToNextStep} disabled={origin === ""}>Continuar</button>
                </div>
            </>}
            {step === 1 && <>
                <section id="amount-section" className='bg-blck'>
                    <h3 className='font-bold'>¿Cuánto querés ingresar a la cuenta?</h3>
                    <input type="number" placeholder='$0' {...register("amount")} />
                    {(errors.amount) && <i className='text-red-500'>{errors.amount.message}</i>}
                    <div className='flex justify-between'>
                        <h4></h4>
                        <button type="button" className={`${amount <= 0 ? 'bg-ylwBlck cursor-not-allowed' : 'bg-ylw'}`} onClick={goToNextStep} disabled={amount <= 0}>Continuar</button>
                    </div>
                </section>
                <div id="out-section">
                    <h4></h4>
                    <button type="button" id="button-out-section" className={`${amount <= 0 ? 'bg-ylwBlck cursor-not-allowed' : 'bg-ylw'}`} onClick={goToNextStep} disabled={origin === ""}>Continuar</button>
                </div>
            </>
            }

            {step === 2 && <>
                <section id="check-info-section" className='bg-blck'>
                    <article className=''>
                        <h3 className='font-bold text-ylw'>Revisá que está todo bien</h3>
                        <div>
                            <p>Vas a transferir</p>
                            <FaPenToSquare onClick={decrementStep} />
                        </div>
                        <h3 className='font-bold text-white text-[16px] mt-4'>${amount}</h3>
                        <div>
                            <ul className='text-white'>
                                <li className='text-xs'>Para</li>
                                <li className='font-bold text-lg my-4'>Cuenta Propia</li>
                                <li className='text-[16px]'>Brubank</li>
                                <li className='text-sm mt-2'>CVU: {cvu}</li>
                            </ul>
                        </div>
                    </article>
                    <button type="submit" onClick={handleSubmit(onSubmit)}>Transferir</button>

                </section>
                <div id="out-section">
                    <h4></h4>
                    <button type="button" id="button-out-section" onClick={goToNextStep}>Transferir</button>
                </div>
            </>
            }

            {step === 3 &&
                <>
                    <ActionSuccessCard message={"Ya cargamos el dinero en tu cuenta"}/>
                    <section id="success-section" className='bg-blck'>
                        <p id="date-success"></p>
                        <ul className='text-white'>
                            <li className="font-bold text-ylw" id="amount-deposited">${amount}</li>
                            <li className='text-xs'>Para</li>
                            <li id="deposited-to" className='font-bold text-ylw'>Cuenta Propia</li>
                            <li className='text-[16px]'>Brubank</li>
                            <li className='text-xs my-2'>CVU: {cvu}</li>
                        </ul>
                    </section>
                    <div id="button-container">
                        <button id="home-btn" className="bg-[#CECECE]" onClick={navigate}>Ir a Inicio</button>
                        <p className="bg-ylw" id="download-voucher-btn">Descargar comprobante</p>
                    </div>
                </>
            }
        </form>
    )
}

export default ChargeWithCardForm
