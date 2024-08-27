"use client"
import { useEffect } from 'react'
import ResumeCard from '@/components/ResumeCard/ResumeCard'
import HomeButtons from '@/components/Buttons/HomeButtons'
import MovementList from '@/components/MovementList/MovementList'
import Menu from '@/components/Menu/Menu'
import { FaArrowRight } from 'react-icons/fa6'
import "./page.css"
import { useStore } from 'react-redux'
const Home = () => {

  const store = useStore();
  const state:any = store.getState();
  const userState:UserDataType = state.userState;

  return (
    <main className='bg-lightGray h-full'>
      <section>
        <Menu />
      </section>
      <div id="home-shortcut" className='hidden'>
        <FaArrowRight />
        <p className='underline'>Inicio</p>
      </div>
      <section id="account-details" className='h-full py-10'>
        <ResumeCard token={userState.token}/>
        <HomeButtons />
        <MovementList accountId={userState.accountId} token={userState.token}/>
      </section>
    </main>
  )
}

export default Home