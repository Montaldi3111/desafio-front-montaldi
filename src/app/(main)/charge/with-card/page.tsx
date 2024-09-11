import Menu from '@/components/Menu/Menu'
import React from 'react'
import "./page.css"
import ChargeWithCardForm from '@/components/Forms/ChargeWithCardForm'
import { headers } from 'next/headers'
import { getUserAccount } from '@/services/account/account.service'
import { getAllCards } from '@/services/cards/cards.service'
import { Toaster } from 'sonner'
const ChargeWithCard = async () => {
    const token:string = headers().get("x-digital-access-token") ?? "";
    const {id} : {id:number} = await getUserAccount(token)
    const cards:CardType[] = await getAllCards(String(id), token);
    return (
        <main className='bg-lightGray'>
            <section>
                <Menu />
            </section>
            <section className='w-full'>
                <Toaster richColors visibleToasts={1}/>
                <ChargeWithCardForm cards={cards} accountId={id} token={token}/>
            </section>
        </main>
    )
}

export default ChargeWithCard