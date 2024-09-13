import React from 'react'
import Link from 'next/link'
import "./homeButtons.css"
const HomeButtons = () => {
    return (
        <article id="home-buttons" className='bg-lightGray'>
            <Link href="/charge" id="charge-money">Cargar dinero</Link>
            <Link href="#" id="payments">Pago de servicios</Link>
        </article>
    )
}

export default HomeButtons