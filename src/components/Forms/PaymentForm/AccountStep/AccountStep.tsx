"use client"
import { useStep } from '@/hooks/useStep'
import React, { useState } from 'react'
import './accountStep.css'
import { useFormContext } from 'react-hook-form'
const AccountStep = () => {
    const {register, trigger, formState: {errors}} = useFormContext();
    const { step, incrementStep } = useStep();

    const goToNextStep = async () => {
        // Necesito válidar este paso
        let isValid = true;
        if (step === 1) {
            isValid = await trigger("accountNumber"); // Aquí se verifica el paso 1
        }

        if (isValid) {
            incrementStep(); // Se avanza si la validación es correcta
        }
    };

    return (
        <>
            <article id="container-2" className='bg-blck'>
                <div id="input-container">
                    <h1 className='font-bold text-xl text-ylw'>Número de cuenta sin el primer 2</h1>
                    <input type="number" id="cvu-input" {...register("accountNumber")}/>
                    {errors.accountNumber && <p className='text-redError italic text-sm my-2'>{errors.accountNumber.message as string}</p>}
                    <p className='text-xs text-white'>Son 11 números sin espacios, sin el 2 iniciar. Agregá ceros adelante si tenés menos</p>
                </div>
                <div id="btn-container">
                    <h4 className='mobile:hidden tablet:hidden'></h4>
                    <button className="bg-ylw" onClick={goToNextStep}>
                        Continuar
                    </button>
                </div>

            </article>
            <div id="btn-mobile-container">
                <h4></h4>
                <button id="btn-mobile" className='bg-ylw' onClick={goToNextStep}>Continuar</button>
            </div>
        </>
    )
}

export default AccountStep