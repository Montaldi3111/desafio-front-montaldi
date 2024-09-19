"use client"
import { FaArrowRight } from 'react-icons/fa6'
import SearchBar from '../SearchBar/SearchBar'
import MovementCard from '../Cards/MovementCard/MovementCard'
import "./movementList.css"
import Link from 'next/link'
import { SearchProvider } from '@/context/searchContext'
import MovementCardList from '../Cards/MovementCardList/MovementCardList'

type MovementCardParams = {
    transactions: TransactionType[],

}
const MovementList = ({ transactions }: MovementCardParams) => {
    const first10Transactions = transactions.slice(0,10);
    return (
        <SearchProvider>
        <article id="movement-list" className=''>
            <SearchBar placeholder='Buscar en tu actividad'/>
            <div id="movements" className='bg-white'>
                <MovementCardList transactions={first10Transactions}/>
            </div>
        </article>
        </SearchProvider>
    )
}

export default MovementList