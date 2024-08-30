import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { FaArrowRight } from 'react-icons/fa6'
import MovementCard from '../MovementCard/MovementCard'
import { getAllTransactions } from '@/services/transactions/transactions.service'
import "./movementList.css"

type MovementCardParams = {
    accountId: number,
    token: string,
 
}
const MovementList = async ({accountId, token}:MovementCardParams) => {
    const transactions = await getAllTransactions(accountId, token)
    return (
        <article id="movement-list" className=''>
            <SearchBar/>
            <div id="movements" className='bg-white'>
            <p className='font-bold text-black'>Tu actividad</p>
            <div></div>
            {
                (transactions && transactions.length > 0) ? transactions.map((transaction, index) => {
                return <MovementCard key={index} movement={transaction} />
          }) : <p className='text-center font-lg font-bold my-4'>No hay registro de tu actividad</p>
      }
            {transactions.length > 0 && <div className='w-[100%] flex flex-row justify-between items-center border-t-[1px] border-black text-black font-bold'>
                <p className='mt-2'>Ver toda tu actividad</p>
                <button className='text-xl p-2 cursor-pointer'>
                <FaArrowRight className="mt-2"/>
                </button>
            </div>}
            </div>
        </article>
    )
}

export default MovementList