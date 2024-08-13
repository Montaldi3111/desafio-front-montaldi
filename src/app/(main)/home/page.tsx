import React from 'react'
import "./page.css"
import ResumeCard from '@/app/components/ResumeCard/ResumeCard'
import HomeButtons from '@/app/components/Buttons/HomeButtons'
import MovementList from '@/app/components/MovementList/MovementList'
import Menu from '@/app/components/Menu/Menu'
const Home = () => {
  return (
    <main className='bg-lightGray h-full flex flex-row'>
            <Menu />
        <section id="account-details" className='py-10'>
            <ResumeCard />
            <HomeButtons />
            <MovementList />
        </section>
    </main>
  )
}

export default Home