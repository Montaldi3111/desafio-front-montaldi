import React from 'react'
import MovementCard from '../MovementCard/MovementCard'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { useSearch } from '@/hooks/useSearch'

type MovementCardList = {
    transactions: TransactionType[],
}

const MovementCardList = ({transactions}:MovementCardList) => {
    const {inputValue} = useSearch();
    const filteredTransactions = transactions.filter((transaction: TransactionType) => 
        transaction.description.toLowerCase().includes(inputValue.toLowerCase())
      );
  return (
    <>
        <p id="movements-header" className='font-bold text-black'>Tu actividad</p>
                <div></div>
                {
                    (transactions && transactions.length > 0) ? filteredTransactions.map((transaction: TransactionType, index: number) => {
                        return <Link href={`/activity/${transaction.id}`} key={index}><MovementCard movement={transaction} /></Link>
                    }) : <p className='text-center font-lg font-bold my-4'>No hay registro de tu actividad</p>
                }
                { // no tendría sentido mostrar esta parte si no hay movimientos en la cuenta
                    transactions.length > 0 && <div  id="activity-anchor" className='w-[100%] flex flex-row justify-between items-center text-black font-bold'>
                        <Link href="/activity" className='mt-2'>Ver toda tu actividad</Link>
                        <Link href="/activity" className='text-xl p-2 cursor-pointer'>
                            <FaArrowRight className="mt-2" />
                        </Link>
                    </div>
                }
    </>
  )
}

export default MovementCardList