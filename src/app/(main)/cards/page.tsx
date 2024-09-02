import React from 'react'
import { CiCirclePlus } from 'react-icons/ci'
import { FaArrowRight } from 'react-icons/fa6'
import "./page.css"
import Menu from '@/components/Menu/Menu'
import { headers } from 'next/headers'
import { getAllCards } from '@/services/cards/cards.service'
import { getUserAccount } from '@/services/account/account.service'
import PaymentCard from '@/components/Cards/PaymentCard/PaymentCard'
import Link from 'next/link'
const Cards = async () => {
    const token:string = headers().get("x-digital-access-token") ?? "";
    const {id} = await getUserAccount(token);
    const cards = await getAllCards(id, token);
  return (
    <main>
        <Menu />
        <section id="container">
            <div id="current-page" className=''>
            <FaArrowRight />
            <h3>Tarjetas</h3>
            </div>
        <article id="new-card">
            <div id='card-header'>
                <h3 className='text-white font-bold'>Agregá tu tarjeta de débito o crédito</h3>
            </div>
            <Link href="/cards/new-card">
            <span id='add-card'>
                <div id='first-container'>
                    <CiCirclePlus id="circle-plus"/>
                    <h2 className='text-ylw text-lg font-bold'>Nueva tarjeta</h2>
                </div>
                <div id="second-container">
                    <FaArrowRight id="arrow-right" />
                </div>
            </span>
            </Link>
        </article>
        <article id="cards-list">
            {cards.length > 0 ? <>
            <h3 className='font-bold'>Tus tarjetas</h3>
            {cards.map((card:CardType, index:number) => (
                <PaymentCard key={index} cardNumber={card.number_id} />
            ))}
            </> : <p className='text-center text-[16px] font-bold'>Usted no ha cargado ninguna tarjeta</p>}
        </article>
        </section>
    </main>
  )
}

export default Cards

 /* 
 <h3 className='font-bold text-lg'>Tus tarjetas</h3>
            <span><div><h4></h4><p>Terminada en 5632</p></div><p className='font-bold'>Eliminar</p></span>
            <span><div><h4></h4><p>Terminada en 5632</p></div><p className='font-bold'>Eliminar</p></span>
            <span><div><h4></h4><p>Terminada en 5632</p></div><p className='font-bold'>Eliminar</p></span>
            <span><div><h4></h4><p>Terminada en 5632</p></div><p className='font-bold'>Eliminar</p></span>
 
 */