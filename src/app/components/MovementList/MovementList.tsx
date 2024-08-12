import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import MovementCard from '../MovementCard/MovementCard'
import "./movementList.css"
import { FaArrowRight } from 'react-icons/fa6'

const MovementList = () => {

    const lista = [{
        operation: "Transferiste a Juan",
        amount: -1500,
        date: "domingo"
    },
    {
        operation: "Transferiste a Francisco",
        amount: -3000,
        date: "sábado"
    },
    {
        operation: "Ingresaste a dinero",
        amount: 10000,
        date: "sábado"
    },
    {
        operation: "Transferiste a Lucas",
        amount: 5000,
        date: "viernes"
    }
    ]

    return (
        <article className='w-[80%]'>
            <SearchBar />
            <div className='bg-white'>
            <p className='font-bold text-black'>Tu actividad</p>
            <MovementCard movement={lista[0]}/>
            <div className='flex flex-row jutify-between text-black font-bold'>
                <p>Ver toda tu actividad</p>
                <FaArrowRight />
            </div>
            </div>
        </article>
    )
}

export default MovementList