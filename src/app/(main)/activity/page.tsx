import Menu from '@/components/Menu/Menu'
import React from 'react'
import { FaArrowRight, FaSliders } from 'react-icons/fa6'
import { headers } from 'next/headers'
import { getUserAccount } from '@/services/account/account.service'
import { getAllTransactions } from '@/services/transactions/transactions.service'
import "./page.css"
import ActivityPageContainer from '@/components/containers/ActivityPageContainer'

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
                <ActivityPageContainer transactions={transactions}/>
            </section>
        </main>
    )
}

export default ActivityPage