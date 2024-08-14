import React from 'react'
import ResumeCard from '@/app/components/ResumeCard/ResumeCard'
import HomeButtons from '@/app/components/Buttons/HomeButtons'
import MovementList from '@/app/components/MovementList/MovementList'
import Menu from '@/app/components/Menu/Menu'
import { FaArrowRight } from 'react-icons/fa6'
import "./page.css"
const Home = () => {
  return (
    <main className='bg-lightGray h-full'>
      <Menu />
      <div id="home-shortcut">
        <FaArrowRight />
        <p className='underline'>Inicio</p>
      </div>
      <section id="account-details" className='py-10'>
        <ResumeCard />
        <HomeButtons />
        <MovementList />
      </section>
    </main>
  )
}

export default Home