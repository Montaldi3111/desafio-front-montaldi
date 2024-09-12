"use client"
import { useEffect, useState } from 'react'
import MovementCard from '../Cards/MovementCard/MovementCard'
import './activityList.css'
import SearchFilter from '../SearchFilter/SearchFilter'
import { FaSliders } from 'react-icons/fa6'
import { filterAndSortTransactions, filterTransactions } from '@/utils/dateFunctions'


const ActivityList = ({ filterValue, transactions }: { filterValue: string, transactions: TransactionType[] }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [copyTransaction, setCopyTransaction] = useState<TransactionType[]>(transactions);
    // seteo de valores para la paginación
    
    const itemsPerPage = 10; // cant. de items por página
    const totalPages = Math.ceil(copyTransaction.length / itemsPerPage) // número de páginas totales (me devuelve un entero)
    const lastItem = itemsPerPage * currentPage; // índice del ultimo elemento del arreglo
    const firstItem = lastItem - itemsPerPage; // índice del primer elemento de arreglo
    const currentTransactions = copyTransaction.slice(firstItem, lastItem); // genero un sub-array según los índices
    
    // scroll al principio al cambiar de página
    useEffect(()=> {
        window.scrollTo({ top: 0, behavior:'smooth'});
    },[currentPage, setCurrentPage])
    
    
    useEffect(()=> {
        setCopyTransaction(filterAndSortTransactions(copyTransaction, filterValue));
    },[transactions])

    const handlePage = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <>
            <div id="header-list">
                <h3 className='font-bold'>Tu actividad</h3>
                <div id="filter-mobile-container" className='tablet:hidden desktop:hidden'>
                <SearchFilter />
                    <span id="filter-container">
                        <h3>Filtrar</h3>
                        <FaSliders />
                    </span>
                </div>
            </div>
            <div id="movement-list">
                {
                    (transactions && transactions.length > 0) ? currentTransactions.map((transaction: any, index: number) => (
                        <MovementCard key={index} movement={transaction} />
                    )) : <p className='text-[16px] font-bold text-center mt-4'>No hay registros de tu actividad</p>
                }
            </div>
            <span id="page-btn-container" >
                {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            id="page-btn"
                            onClick={() => handlePage(index + 1)}
                            disabled={currentPage === index + 1}
                            style={{
                                backgroundColor: currentPage === index + 1 ? '#DCDCDC' : undefined,
                            }}
                        >
                            {index + 1}
                        </button>
                ))}
                </span>
        </>
    )
}

export default ActivityList