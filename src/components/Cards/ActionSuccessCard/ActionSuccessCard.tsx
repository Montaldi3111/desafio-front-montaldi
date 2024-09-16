import React from 'react'
import { FaRegCircleCheck } from 'react-icons/fa6'
import "./actionSuccessCard.css"
const ActionSuccessCard = ({message}: {message:string}) => {
  return (
    <div id="success-card">
        <FaRegCircleCheck />
        <h3 className='font-bold'>{message}</h3>
    </div>
  )
}

export default ActionSuccessCard