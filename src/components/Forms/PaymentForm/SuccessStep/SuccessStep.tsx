import ActionSuccessCard from '@/components/Cards/ActionSuccessCard/ActionSuccessCard'
import Link from 'next/link'
import React from 'react'
import './successStep.css'
import { dateFormatter } from '@/utils/dateFunctions'
import { detectCardBrand } from '@/utils/cardBrandDetect'

type SuccessStepParams = {
    payment: PaymentDataType,
}

const SuccessStep = ({ payment } : SuccessStepParams) => {
    const date = dateFormatter(payment.dated)
    const cardBrand = detectCardBrand(payment.cardNumber);
    const maskCardNumber = '*'.repeat(12);
    const lastNumbers = payment.cardNumber.slice(12,16);
    return (
        <article id="success-section">
            <ActionSuccessCard message={"Ya realizaste tu pago"} />
            <div className='bg-blck' id="payment-info">
                <ul>
                    <li className='text-white mobile:text-xs'>{date}</li>
                    <li className='text-ylw text-lg font-bold'>${Math.abs(payment.amount)}</li>
                </ul>
                <ul>
                    <li className='text-white mobile:xs'>Para</li>
                    <li className='text-ylw text-xl font-bold'>{payment.destination}</li>
                </ul>
                <ul>
                    <li className='text-white'>Tarjeta</li>
                    <li className='text-white'> {cardBrand + " " + maskCardNumber+lastNumbers}</li>
                </ul>
            </div>
            <div id="btn-container">
                <Link href="/dashboard" id="home-btn" className='bg-gray-300'>Ir a inicio</Link>
                <button id="download-btn" className='bg-ylw'>Descargar comprobante</button>

            </div>
        </article>
    )
}

export default SuccessStep