import ActionSuccessCard from '@/components/Cards/ActionSuccessCard/ActionSuccessCard'
import Link from 'next/link'
import React from 'react'
import './successStep.css'

type SuccessStepParams = {
    serviceName: string,
    serviceValue: number,
}

const SuccessStep = ({serviceName, serviceValue} : SuccessStepParams) => {
  return (
    <article id="success-section">
                            <ActionSuccessCard message={"Ya realizaste tu pago"} />
                            <div className='bg-blck' id="payment-info">
                                <ul>
                                    <li className='text-white mobile:text-xs'>16 de septiembre 2024 a 10:30 hs</li>
                                    <li className='text-ylw text-lg font-bold'>${serviceValue}</li>
                                </ul>
                                <ul>
                                    <li className='text-white mobile:xs'>Para</li>
                                    <li className='text-ylw text-xl font-bold'>{serviceName}</li>
                                </ul>
                                <ul>
                                    <li className='text-white'>Tarjeta</li>
                                    <li className='text-white'>American Expres ************4687</li>
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