import Menu from '@/components/Menu/Menu'
import React from 'react'
import { FaArrowRight, FaSliders } from 'react-icons/fa6'
import { headers } from 'next/headers'
import { getUserAccount } from '@/services/account/account.service'
import { getAllTransactions } from '@/services/transactions/transactions.service'
import SearchBarFilterMovementContainer from '@/components/containers/SearchBarFilterMovementContainer'
import ActivityList from '@/components/ActivityList/ActivityList'
import "./page.css"

const ActivityPage = async () => {

    const token: string = headers().get("x-digital-access-token") ?? "";
    const { id }: { id: number } = await getUserAccount(token);
    const transactions = await getAllTransactions(id, token);
    return (
        <main className='bg-lightGray'>
            <section>
                <Menu />
            </section>
            <div id="current-page">
                <FaArrowRight />
                <p>Tu actividad</p>
            </div>
            <section id="activity-container">
                <article id="search-bar-container">
                    <SearchBarFilterMovementContainer />
                </article>
                <article className='bg-white' id="activities-list">
                    <ActivityList transactions={transactions} />
                </article>
            </section>
        </main>
    )
}

export default ActivityPage