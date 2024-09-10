import Menu from '@/components/Menu/Menu'
import SearchBar from '@/components/SearchBar/SearchBar'
import React from 'react'
import { FaSliders } from 'react-icons/fa6'
import "./page.css"
import MovementCard from '@/components/Cards/MovementCard/MovementCard'
import SearchFilter from '@/components/SearchFilter/SearchFilter'

const transactions: any = [
    {
        operation: "Depósito",
        amount: 1000,
        date: "03-05-2023"
    },
    {
        operation: "Retíro",
        amount: 5000,
        date: "09-02-2023"
    },
    {
        operation: "Depósito",
        amount: 2000,
        date: "02-01-2023"
    },
]

const ActivityPage = () => {
    return (
        <main className='bg-lightGray'>
            <section>
                <Menu />
            </section>
            <section id="activity-container">
                <article id="search-bar-container">
                    <SearchBar />
                    <SearchFilter />
                    <span id="filter-container">
                        <h3 className='font-bold'>Filtrar</h3>
                        <FaSliders />
                    </span>
                </article>
                <article className='bg-white' id="activities-list">
                    <div><h3 className='font-bold'>Tu actividad</h3></div>
                    <div id="movement-list">
                        {
                            (transactions && transactions.length > 0) ? transactions.map((transaction: any, index: number) => (
                                <MovementCard key={index} movement={transaction} />
                            )) : <p className='text-[16px] font-bold text-center mt-4'>No hay registros de tu actividad</p>
                        }
                    </div>
                </article>
            </section>
        </main>
    )
}

export default ActivityPage