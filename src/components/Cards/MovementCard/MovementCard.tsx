import React from 'react'
import "./movementCard.css"

type MovementCardParams = {
  movement: TransactionType
}

const MovementCard = ({movement} : MovementCardParams) => {
  const date = new Date(movement.dated);
  const day = date.getDate();
  const month = date.toLocaleString('es-ES', {month: "long"});
  const year = date.getFullYear();
  return (
        <span id="movement-details">
            <div id="title">
            <p id="circle"></p>
            {movement.type === "Deposit" || movement.type === "Transference" ?
             <p id="transaction-name">{movement.type === "Deposit" ? "Has depositado dinero" : "Te transfirieron dinero"}</p>
              :
              <p id="transaction-name">{movement.description}</p>
              }
            </div>
            <div id="details">
            <p id="transaction-import">${movement.amount}</p>
            <p className="text-gray-500" id="date">{day + " de " + month + " del " + year}</p>
            </div>
        </span>
  )
}

export default MovementCard