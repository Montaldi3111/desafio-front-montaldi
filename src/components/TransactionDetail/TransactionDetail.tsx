import React from 'react'
import { FaRegCircleCheck } from 'react-icons/fa6'
import './transactionDetail.css'

type TransactionDetailParams = {
    transaction: TransactionType;
}

const TransactionDetail = ({transaction} : TransactionDetailParams) => {
  return (
    <article className='bg-blck' id="details-container">
                <span  id="transaction-date">
                    <div>
                        <FaRegCircleCheck />
                        <h1 className='font-bold text-ylw'>Aprobada</h1>
                    </div>
                    <p>Creada el {String(transaction.dated)}</p>
                </span>
                <div id="transaction-type">
                    <p className='font-bold text-white'>{transaction.type === "Deposit" ? "Deposito de dinero" : "Transferencia de dinero"}</p>
                    <h2 className='font-bold text-ylw'>${transaction.amount}</h2>
                </div>
                <div  id="transaction-destination">
                    <p>{transaction.type === "Deposit" ? 'Le depositaste a' : 'Le transferiste a'}</p>
                    <h2 className='font-bold text-ylw'>{transaction.destination}</h2>
                </div>
                <div  id="transaction-id">
                    <p id="operation-number" className='text-white'>Número de operación</p>
                    <p className='text-ylw'>{transaction.id}</p>
                </div>
    </article>
  )
}

export default TransactionDetail