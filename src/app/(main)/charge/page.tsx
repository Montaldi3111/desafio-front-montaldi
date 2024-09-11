import Menu from '@/components/Menu/Menu'
import React from 'react'
import ChargeMethodsContainer from '@/components/containers/ChargeMethodsContainer'
import "./page.css"
import { headers } from 'next/headers'
import { getUserAccount } from '@/services/account/account.service'
import { FaArrowRight } from 'react-icons/fa6'

const Charge = async () => {
    const token:string = headers().get("x-digital-access-token") ?? "";
    const {alias, cvu} : {alias:string, cvu:string} = await getUserAccount(token);
    return (
        <main className='bg-lightGray'>
            <section>
                <Menu />
            </section>
            <section id="charge-methods">
                <div id="current-page" className='flex items-center'>
                    <FaArrowRight id="current-page-arrow"/>
                    <p className='underline text-[16px]'>Cargar dinero</p>
                </div>
                <ChargeMethodsContainer cvu={cvu} alias={alias}/>
            </section>
        </main>
    )
}

export default Charge