import Menu from '@/components/Menu/Menu'
import SearchBar from '@/components/SearchBar/SearchBar'
import React from 'react'
import { FaArrowRight, FaSliders } from 'react-icons/fa6'
import MovementCard from '@/components/Cards/MovementCard/MovementCard'
import SearchFilter from '@/components/SearchFilter/SearchFilter'
import { headers } from 'next/headers'
import { getUserAccount } from '@/services/account/account.service'
import { getAllTransactions } from '@/services/transactions/transactions.service'
import "./page.css"
import ActivityList from '@/components/ActivityList/ActivityList'

const ActivityPage = async () => {
    const token:string = headers().get("x-digital-access-token")?? "";
    const {id} : {id: number} = await getUserAccount(token);
    const transactions = await getAllTransactions(id, token);
    return (
        <main className='bg-lightGray h-[175vh]'>
            <section>
                <Menu />
            </section>
            <div id="current-page">
                <FaArrowRight />
                <p>Tu actividad</p>
            </div>
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
                    <ActivityList transactions={transactions}/>
                </article>
            </section>
        </main>
    )
}

export default ActivityPage