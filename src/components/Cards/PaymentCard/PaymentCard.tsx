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
  const handleDeleteCard = () => {
    deleteCard(accountId, cardId, token).then(response => {
        if (response === 0) {
            toast.success("Tarjeta Eliminada")
        } else {
            toast.error("Se ha producido un error al eliminar la tarjeta")
        }
    }).catch(err => toast.error(err.message))
  }
  return (
    <>
    <span>
      <div><h4></h4><p>Terminada en {numbers}</p></div><button className='font-bold' onClick={handleDeleteCard}>Eliminar</button>
    </span>
    </>
  )
}

export default PaymentCard