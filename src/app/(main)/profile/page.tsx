import React from 'react'
import Menu from '@/components/Menu/Menu'
import CvuAliasCard from '@/components/CVU-Alias-Card/CvuAliasCard'
import UserDetails from '@/components/UserDetails/UserDetails'
import "./page.css"
import { FaArrowRight } from 'react-icons/fa6'
import { headers } from 'next/headers'
import { getUserData } from '@/services/user/user.service'
const Profile = async () => {
  const token = headers().get("x-digital-access-token") ?? "";
  const user_id = Number(headers().get("x-digital-user-id")) ?? 0;
  const userData:UserType = await getUserData(user_id,token)
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
            <UserDetails userData={userData}/>
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