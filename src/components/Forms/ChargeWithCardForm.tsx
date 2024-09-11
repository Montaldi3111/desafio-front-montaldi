"use client"
import { createNewDeposit } from '@/services/transferences/transferences.service';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { CiCirclePlus } from 'react-icons/ci';
import { FaPenToSquare } from 'react-icons/fa6';
import { toast } from 'sonner';
import * as yup from "yup"
type ChargeWithCardParams = {
    cards: CardType[];
    accountId: number;
    token: string;
}

const ChargeWithCardForm = ({ cards, accountId, token }: ChargeWithCardParams) => {
    const router = useRouter();

    const schema = yup.object({
        amount: yup.number().required().min(1, "Mínima cantidad de ingreso es 1"),
        dated: yup.string(),
        destination: yup.string(),
        origin: yup.string().required("Selecciona una tarjeta")
    }).required();


    const { register, handleSubmit, formState: { errors }, trigger, watch, setValue } = useForm<FormChargeWithCardData>({
        resolver: yupResolver(schema),
        defaultValues: {
            amount: 0,
            dated: new Date().toISOString(),
            destination: "",
            origin: ""
        }
    })


    const [step, setStep] = useState<number>(0)
    const incrementStep = () => {
        setStep(step + 1)
    }

    const origin = watch("origin");

    // Sincronizamos el valor de origin con el de destination
    useEffect(() => {
        if (origin) {
            setValue("destination", origin);
        }
    }, [origin, setValue]);


    const decrementStep = () => {
        setStep(step - 1)
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
            incrementStep(); // Avanzamos si la validación es correcta
        }
    };

    const onSubmit = (data: FormChargeWithCardData) => {
        createNewDeposit(99999, data, token).then(response => {
            if (response === 0) {
                toast.success("Depósito realizado correctamente")
                router.push("/activity");
            } else {
                toast.error(error.message)
            }
        }).catch(error => {
            toast.error(error.message)
        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
                                <input type="radio" id="card-number" value={card.number_id} {...register("origin")} />
                            </span>
                        ))}
                        {(errors.origin) && <i className='text-red-500'>{errors.origin.message}</i>}
                    </div>
                    <div id='buttons-container'>
                        <Link href="/cards/new-card"><CiCirclePlus /><h3 className='font-bold'>Nueva tarjeta</h3></Link>
                        <button type="button" onClick={goToNextStep}>Continuar</button>
                    </div>
                </section>
            </>}
            {step === 1 &&
                <section id="amount-section" className='bg-blck'>
                    <h3 className='font-bold'>¿Cuánto querés ingresar a la cuenta?</h3>
                    <input type="number" placeholder='$0' {...register("amount")} />
                    {(errors.amount) && <i className='text-red-500'>{errors.amount.message}</i>}
                    <div className='flex justify-between'>
                        <h4></h4>
                        <button type="button" onClick={goToNextStep}>Continuar</button>
                    </div>
                </section>}

            {step === 2 && <section id="check-info-section" className='bg-blck'>
                <article>
                    <h3 className='font-bold text-ylw'>Revisá que está todo bien</h3>
                    <div>
                        <p>Vas a transferir</p>
                        <FaPenToSquare onClick={decrementStep} />
                    </div>
                    <h3 className='font-bold text-white text-[16px] mt-4'>{}</h3>
                    <div>
                        <ul className='text-white'>
                            <li className='text-xs'>Para</li>
                            <li className='font-bold text-lg my-4'>Cuenta Propia</li>
                            <li className='text-[16px]'>Brubank</li>
                            <li className='text-sm mt-2'>CVU: </li>
                        </ul>
                    </div>
                </article>
                <button type="submit" onClick={handleSubmit(onSubmit)}>Continuar</button>

            </section>}

        </form>
    )
}

export default ChargeWithCardForm
