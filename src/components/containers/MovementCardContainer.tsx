"use server"
import React from 'react'
import MovementCard from '../MovementCard/MovementCard'
import { getAllTransactions } from '@/services/transactions/transactions.service';

type CardContainerParams = {
  token: string,
  accountId: number
}

const MovementCardContainer = async ({token, accountId}:CardContainerParams) => {
  
  return (
      <>
      {
          transactions && transactions.map((transaction, index) => {
              return <MovementCard key={index} movement={transaction} />
          })
      }
    </>
  )
}

export default MovementCardContainer