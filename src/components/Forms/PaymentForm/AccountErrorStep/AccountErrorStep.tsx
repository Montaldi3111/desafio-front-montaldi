import ActionErrorCard from '@/components/Cards/ActionErrorCard/ActionErrorCard'
import { useStep } from '@/hooks/useStep';
import React from 'react'
import './accountErrorStep.css'
const AccountErrorStep = () => {

    const { notFound, decrementStep, setNotFound } = useStep();

    const goBack = () => {
        setNotFound(!notFound);
    }

    return (
        <>
            <article id="error-container">
                <div id="error-card-container" className='bg-blck'>
                    <ActionErrorCard title={"No encontramos facturas asociadas a ese dato"} subtitle={"Revisá el dato ingresado. Si es correcto, es posible que la empresa aún no haya cargado tu factura."} />
                </div>
                <button type='button' onClick={goBack} className='bg-ylw'>Revisar dato</button>
            </article>
            <div id="btn-error-mobile-container">
                <h4></h4>
                <button type='button' id="btn-error-mobile" className='bg-ylw' onClick={goBack}>Revisar dato</button>
            </div>
        </>
    )
}

export default AccountErrorStep