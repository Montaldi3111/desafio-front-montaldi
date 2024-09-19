import ActionErrorCard from '@/components/Cards/ActionErrorCard/ActionErrorCard'
import { useStep } from '@/hooks/useStep';
import React from 'react'

const ErrorPaymentStep = () => {
    const {decrementStep} = useStep();
    return (
        <>
            <article id="error-container">
                <div id="error-card-container" className='bg-blck'>
                    <ActionErrorCard title={"Hubo un problema con tu pago"} subtitle={"Puede deberse a fondos insuficientes. Comunicate con la entidad emisora de la tarjeta"} />
                </div>
                <button onClick={decrementStep} className='bg-ylw'>Revisar dato</button>
            </article>
            <div id="btn-error-mobile-container">
                <h4></h4>
                <button onClick={decrementStep} id="btn-error-mobile" className='bg-ylw'>Volver a intentarlo</button>
            </div>
        </>
    )
}

export default ErrorPaymentStep