import React from 'react'
import "./page.css"
import ResumeCard from '@/app/components/ResumeCard/ResumeCard'
import HomeButtons from '@/app/components/Buttons/HomeButtons'
import MovementList from '@/app/components/MovementList/MovementList'
const Home = () => {
  return (
    <main className='bg-lightGray h-screen flex flex-row py-10'>
        <section className='w-[30vw]'>
            Menu
        </section>
        <section className='w-[70vw]'>
            <ResumeCard />
            <HomeButtons />
            <MovementList />
        </section>
    </main>
  )
}

export default Home