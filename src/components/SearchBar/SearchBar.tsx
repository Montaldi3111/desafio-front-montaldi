"use client"
import { FaMagnifyingGlass } from 'react-icons/fa6'
import "./searchBar.css"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = ({placeholder} : {placeholder: string}) => {
  return (
    <span id="searchBar-container" className='bg-white w-full'>
        <FaMagnifyingGlass />
        <input type="text" name="search" id="search" placeholder={placeholder}/>
    </span>
  )
}

export default SearchBar