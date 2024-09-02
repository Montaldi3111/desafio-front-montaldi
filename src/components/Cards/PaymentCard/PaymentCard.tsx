import React from 'react'

type PaymentCardParams = {
  cardNumber: number,
}

const PaymentCard = ({cardNumber}:PaymentCardParams) => {
  const numbers:string = String(cardNumber).slice(12,16);
  return (
    <span><div><h4></h4><p>Terminada en {numbers}</p></div><p className='font-bold'>Eliminar</p></span>
  )
}

export default PaymentCard