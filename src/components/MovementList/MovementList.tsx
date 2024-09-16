import { getAllTransactions } from '@/services/transactions/transactions.service'
import { FaArrowRight } from 'react-icons/fa6'
import SearchBar from '../SearchBar/SearchBar'
import MovementCard from '../Cards/MovementCard/MovementCard'
import "./movementList.css"
import Link from 'next/link'

type MovementCardParams = {
    accountId: number,
    token: string,

}
const MovementList = async ({ accountId, token }: MovementCardParams) => {
    const transactions: TransactionType[] = await getAllTransactions(accountId, token)
    const first10Transactions = transactions.slice(0,10);
    return (
        <article id="movement-list" className=''>
            <SearchBar placeholder='Buscar en tu actividad'/>
            <div id="movements" className='bg-white'>
                <p className='font-bold text-black'>Tu actividad</p>
                <div></div>
                {
                    (transactions && transactions.length > 0) ? first10Transactions.map((transaction: TransactionType, index: number) => {
                        return <Link href={`/activity/${transaction.id}`} key={index}><MovementCard movement={transaction} /></Link>
                    }) : <p className='text-center font-lg font-bold my-4'>No hay registro de tu actividad</p>
                }
                { // no tendría sentido mostrar esta parte si no hay movimientos en la cuenta
                    transactions.length > 0 && <div className='w-[100%] flex flex-row justify-between items-center text-black font-bold'>
                        <Link href="/activity" className='mt-2'>Ver toda tu actividad</Link>
                        <Link href="/activity" className='text-xl p-2 cursor-pointer'>
                            <FaArrowRight className="mt-2" />
                        </Link>
                    </div>
                }
            </div>
        </article>
    )
}

export default MovementList