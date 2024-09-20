import Menu from '@/components/Menu/Menu'
import React from 'react'
import ServiceList from '../../../components/ServiceList/ServiceList';
import { getAllServices } from '@/services/company/company.service';
import { FaArrowRight } from 'react-icons/fa6';
import './page.css'
import CurrentPage from '@/components/CurrentPage/CurrentPage';
const Pay = async () => {
    const services = await getAllServices();
    return (
        <main className='bg-lightGray'>
            <section>
                <Menu />
            </section>
            <CurrentPage />
            <section id="container">
                <ServiceList services={services}/>
            </section>
        </main>
    )
}

export default Pay