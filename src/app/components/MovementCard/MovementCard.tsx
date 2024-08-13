import React from 'react'
import "./movementCard.css"

const MovementCard = ({movement}) => {
  return (
        <span id="movement-details">
            <div id="title">
            <p id="circle"></p>
            <p id="transaction-name">{movement.operation}</p>
            </div>
            <div id="details">
            <p id="transaction-import">${movement.amount}</p>
            <p className="text-gray-500" id="date">{movement.date}</p>
            </div>
        </span>
  )
}

export default MovementCard