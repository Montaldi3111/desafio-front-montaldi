import React from 'react'
import "./movementCard.css"
import { getDayOfWeek } from '@/utils/dateFunctions'

type MovementCardParams = {
  movement: TransactionType
}

const MovementCard = ({movement} : MovementCardParams) => {
  const transactionDay = getDayOfWeek(movement.dated)
  return (
        <span id="movement-details">
            <div id="title">
            <p id="circle"></p>
             <p id="transaction-name">{movement.description}</p>
            </div>
            <div id="details">
              {movement.type === "Deposit" && <p id="transaction-import">+ ${movement.amount}</p>}
              {movement.type === "Transfer" && <p id="transaction-import">${movement.amount}</p>}
            <p id="transaction-import"></p>
            <p className="text-gray-500" id="date">{transactionDay}</p>
            </div>
        </span>
  )
}

export default MovementCard