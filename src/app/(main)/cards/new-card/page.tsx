import React from 'react'
import "./page.css"
import Menu from '@/components/Menu/Menu'
import NewCardForm from '@/components/Forms/NewCardForm'
import { FaArrowRight } from 'react-icons/fa6'
const NewCard = () => {
  return (
    <main className='h-screen bg-lightGray'>
      <Menu />
      <div id="current-page">
        <FaArrowRight />
        <h3>Tarjetas</h3>
      </div>
      <NewCardForm />
    </main>
  )
}

export default NewCard