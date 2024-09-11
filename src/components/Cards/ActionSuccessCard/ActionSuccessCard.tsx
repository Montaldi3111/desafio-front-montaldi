import React from 'react'
import { FaRegCircleCheck } from 'react-icons/fa6'
import "./actionSuccessCard.css"
const ActionSuccessCard = () => {
  return (
    <div id="success-card">
        <FaRegCircleCheck />
        <h3 className='font-bold'>Ya cargamos el dinero en tu cuenta</h3>
    </div>
  )
}

export default ActionSuccessCard