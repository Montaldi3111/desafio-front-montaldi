"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { CiCirclePlus } from 'react-icons/ci';
import { FaPenToSquare } from 'react-icons/fa6';

type ChargeWithCardParams = {
    cards: CardType[];
}

const ChargeWithCardForm = ({ cards }: ChargeWithCardParams) => {
    const [step, setStep] = useState<number>(2)

    const incrementStep = () => {
        setStep(step + 1)
    }

    const decrementStep = () => {
        setStep(step - 1)
    }

    return (
        <form>
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
                                <input type="radio" name="card" id="card-number" defaultValue={card.number_id} />
                            </span>
                        ))}
                    </div>
                    <div id='buttons-container'>
                        <Link href="/cards/new-card"><CiCirclePlus /><h3 className='font-bold'>Nueva tarjeta</h3></Link>
                        <button onClick={incrementStep}>Continuar</button>
                    </div>
                </section>
            </>}
            {step === 1 &&
                <section id="amount-section" className='bg-blck'>
                    <h3 className='font-bold'>¿Cuánto querés ingresar a la cuenta?</h3>
                    <input type="number" placeholder='$0' />
                    <div className='flex justify-between'>
                        <h4></h4>
                        <button onClick={incrementStep}>Continuar</button>
                    </div>
                </section>}
            {step === 2 && <section id="check-info-section" className='bg-blck'>
                <article>
                <h3 className='font-bold text-ylw'>Revisá que está todo bien</h3>
                <div>
                    <p>Vas a transferir</p>
                    <FaPenToSquare onClick={decrementStep}/>
                </div>
                <h3 className='font-bold text-white text-[16px] mt-4'>$4000</h3>
                <div>
                    <ul className='text-white'>
                        <li className='text-xs'>Para</li>
                        <li className='font-bold text-lg my-4'>Cuenta Propia</li>
                        <li className='text-[16px]'>Uala</li>
                        <li className='text-sm mt-2'>CVU: 1000000000342345223</li>
                    </ul>
                </div>
                </article>
                <button>Continuar</button>
            </section>}

        </form>
    )
}

export default ChargeWithCardForm