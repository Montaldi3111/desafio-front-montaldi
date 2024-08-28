import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaArrowRight } from 'react-icons/fa6'
import "./page.css"
import Menu from '@/components/Menu/Menu'
const Cards = () => {
  return (
    <main>
        <Menu />
        <section id="container">
        <article id="new-card">
            <div>
                <h3 className='text-white font-bold'>Agregá tu tarjeta de débito o crédito</h3>
            </div>
            <span id='add-card'>
                <div id='first-container'>
                    <CiCirclePlus id="circle-plus"/>
                    <h2 className='text-ylw text-lg font-bold'>Nueva tarjeta</h2>
                </div>
                <div id="second-container">
                    <FaArrowRight id="arrow-right" />
                </div>
            </span>
        </article>
        <article id="cards-list">
            <h3 className='font-bold text-lg'>Tus tarjetas</h3>
            <span><div><h4></h4><p>Terminada en 5632</p></div><p className='font-bold'>Eliminar</p></span>
            <span><div><h4></h4><p>Terminada en 5632</p></div><p className='font-bold'>Eliminar</p></span>
            <span><div><h4></h4><p>Terminada en 5632</p></div><p className='font-bold'>Eliminar</p></span>
            <span><div><h4></h4><p>Terminada en 5632</p></div><p className='font-bold'>Eliminar</p></span>
        </article>
        </section>
    </main>
  )
}

export default Cards