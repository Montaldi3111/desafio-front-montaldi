"use client"
import React from 'react'
import SearchBarFilterMovementContainer from './SearchBarFilterMovementContainer'
import ActivityList from '../ActivityList/ActivityList'
import { SearchProvider } from '@/context/searchContext'

type ActivityListContainerParams = {
    transactions: TransactionType[],
}

const ActivityPageContainer = ({ transactions }: ActivityListContainerParams) => {
    return (
        <>
            <SearchProvider>
                <article id="search-bar-container">
                    <SearchBarFilterMovementContainer />
                </article>
                <article className='bg-white' id="activities-list">
                    <ActivityList transactions={transactions} />
                </article>
            </SearchProvider>
        </>
    )
}

export default ActivityPageContainer