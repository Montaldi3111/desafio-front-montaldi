import React from 'react'
import Menu from '@/components/Menu/Menu'
import CvuAliasCard from '@/components/CVU-Alias-Card/CvuAliasCard'
import UserDetails from '@/components/UserDetails/UserDetails'
import "./page.css"
import { FaArrowRight } from 'react-icons/fa6'
const Profile = () => {
  return (
    <main className='bg-lightGray h-full flex flex-row'>
        <section>
            <Menu />
        </section>
        <section id="info" className='my-4 w-full'>
        <div id="actual-page">
            <FaArrowRight />
            <p>Perfil</p>
        </div>
            <UserDetails />
            <div id="manage-payments">
            <p className='font-bold'>Gestioná los medios de pago</p>
            <FaArrowRight />
            </div>
            <CvuAliasCard />
        </section>
    </main>
  )
}

export default Profile