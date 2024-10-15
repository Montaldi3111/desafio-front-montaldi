import React from 'react'
import "./addNewCardError.css"
import { FaCross, FaRegCircleXmark, FaTriangleExclamation } from 'react-icons/fa6'
import Link from 'next/link'
const AddNewCardError = () => {
  return (
    <div id="card-error-container">
    <FaRegCircleXmark />
    <h1 id="card-error">Limite de tarjetas alcanzado, no puedes agregar más</h1>
    <Link href="/cards">Click aquí para volver atrás</Link>
    </div>
  )
}

export default AddNewCardError