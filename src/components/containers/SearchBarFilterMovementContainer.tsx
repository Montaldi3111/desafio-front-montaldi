"use client"
import React, { useContext } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { FilterProvider } from '@/context/filterContext'
import ActivityList from '../ActivityList/ActivityList'
import SearchFilterContainer from './SearchFilterContainer'
import { useSearchParams } from 'next/navigation'

const SearchBarFilterContainer = ({transactions} : {transactions: TransactionType[]}) => {
  const searchParams = useSearchParams();
  const filterValue = searchParams.get('filter') ?? "desc-date";
  return (
    <>
      <article id="search-bar-container">
        <SearchBar />
        <SearchFilterContainer />
      </article>
      <article className='bg-white' id="activities-list">
        <ActivityList filterValue={filterValue} transactions={transactions} />
      </article>
    </>
  )
}

export default SearchBarFilterContainer