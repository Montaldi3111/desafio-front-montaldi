"use client"
import React from 'react'
import Menu from '@/components/Menu/Menu'
import CvuAliasCard from '@/components/CVU-Alias-Card/CvuAliasCard'
import UserDetails from '@/components/UserDetails/UserDetails'
import "./page.css"
import { FaArrowRight } from 'react-icons/fa6'
import { useStore } from 'react-redux'
const Profile = () => {
  const store = useStore();
  const state:any = store.getState();
  const userData:UserDataType = state.userState
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
            <UserDetails token={userData.token} user_id={userData.user_id}/>
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