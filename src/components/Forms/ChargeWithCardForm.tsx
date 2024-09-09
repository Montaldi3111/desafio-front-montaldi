"use client"
import React, { useState } from 'react'

type ChargeWithCardParams = {
    cards: CardType[];
}

const ChargeWithCardForm = ({cards}:ChargeWithCardParams) => {
    const [step, setStep] = useState<number>(0)
const incrementStep = () => {
    setStep(step + 1)
}
  return (
    <form>
        {step === 0 && <>
            <section>
                <h3>Seleccionar tarjeta</h3>
                <span>
                    {cards.map((card:CardType, index:number) => (
                        <>
                        <h4></h4>
                        <p>Terminada en {String(card.number_id).slice(12,16)}</p>
                        <input type="radio" id="card-number" value={card.number_id}/>
                        </>
                    ))}
                </span>
                <button onClick={incrementStep}>Continuar</button>
            </section>
        </>}
        {step === 1 && <>
            <section>
                <label>¿Cuánto querés ingresar a la cuenta?</label>
                <input type="number" placeholder='$0'/>
                <button onClick={incrementStep}>Continuar</button>
            </section>
        </>}
        
    </form>
  )
}

export default ChargeWithCardForm