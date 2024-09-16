import Menu from '@/components/Menu/Menu'
import React from 'react'
import PaymentForm from '../../../components/PaymentForm/PaymentForm';
import './page.css'
import { getAllServices } from '@/services/company/company.service';
import { headers } from 'next/headers';
import { getUserAccount } from '@/services/account/account.service';
import { getAllCards } from '@/services/cards/cards.service';
import { FaArrowRight } from 'react-icons/fa6';
const Pay = async () => {

    const services = await getAllServices();
    const token = headers().get("x-digital-access-token")?? "";
    const {id} = await getUserAccount(token);
    const cards = await getAllCards(String(id), token);
    return (
        <main className='bg-lightGray'>
            <section>
                <Menu />
            </section>
            <div id="current-page">
                    <FaArrowRight />
                    <h3>Tarjetas</h3>
                </div>
            <section id="container">
                <PaymentForm services={services} cards={cards}/>
            </section>
        </main>
    )
}

export default Pay