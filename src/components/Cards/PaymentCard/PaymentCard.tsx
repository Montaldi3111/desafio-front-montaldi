"use client"
import { deleteCard } from "@/services/cards/cards.service";
import { toast, Toaster } from "sonner";

type PaymentCardParams = {
  token: string,
  cardId: number,
  accountId: number,
  cardNumber: number,
}

const PaymentCard = ({token, cardId, accountId, cardNumber}:PaymentCardParams) => {
  const numbers:string = String(cardNumber).slice(12,16);
  return (
    <>
    <span>
      <div><h4></h4><p>Terminada en {numbers}</p></div><button className='font-bold' onClick={()=> deleteCard(accountId, cardId, token)}>Eliminar</button>
    </span>
    </>
  )
}

export default PaymentCard