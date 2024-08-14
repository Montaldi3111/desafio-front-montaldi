import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import MovementCard from '../MovementCard/MovementCard'
import { FaArrowRight } from 'react-icons/fa6'
import "./movementList.css"

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
        operation: "Ingresaste dinero",
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
        <article id="movement-list" className=''>
            <SearchBar/>
            <div id="movements" className='bg-white'>
            <p className='font-bold text-black'>Tu actividad</p>
            <div></div>
            {lista.map((movement, index) => (
                <MovementCard key={index} movement={movement}/>
            ))}
            <div className='w-[100%] flex flex-row justify-between items-center border-t-[1px] border-black text-black font-bold'>
                <p className='mt-2'>Ver toda tu actividad</p>
                <button className='text-xl p-2 cursor-pointer'>
                <FaArrowRight className="mt-2"/>
                </button>
            </div>
            </div>
        </article>
    )
}

export default MovementList