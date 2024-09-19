import Menu from '@/components/Menu/Menu'
import React from 'react'
import ServiceList from '../../../components/ServiceList/ServiceList';
import { getAllServices } from '@/services/company/company.service';
import { FaArrowRight } from 'react-icons/fa6';
import './page.css'
const Pay = async () => {
    const services = await getAllServices();
    return (
        <main className='bg-lightGray'>
            <section>
                <Menu />
            </section>
            <div id="current-page">
                    <FaArrowRight />
                    <h3>Servicios</h3>
                </div>
            <section id="container">
                <ServiceList services={services}/>
            </section>
        </main>
    )
}

export default Pay