"use client"
import { useStep } from '@/hooks/useStep'
import React from 'react'
import './accountStep.css'
import { useFormContext } from 'react-hook-form'
const AccountStep = () => {
    const {register} = useFormContext();
    const { step, incrementStep } = useStep();
    return (
        <>
            <article id="container-2" className='bg-blck'>
                <div id="input-container">
                    <h1 className='font-bold text-xl text-ylw'>Número de cuenta sin el primer 2</h1>
                    <input type="number" id="cvu-input" />
                    <p className='text-xs text-white'>Son 11 números sin espacios, sin el 2 iniciar. Agregá ceros adelante si tenés menos</p>
                </div>
                <div id="btn-container">
                    <h4 className='mobile:hidden tablet:hidden'></h4>
                    <button className="bg-ylw" onClick={incrementStep}>
                        Continuar
                    </button>
                </div>

            </article>
            <div id="btn-mobile-container">
                <h4></h4>
                <button id="btn-mobile" className='bg-ylw' onClick={incrementStep}>Continuar</button>
            </div>
        </>
    )
}

export default AccountStep