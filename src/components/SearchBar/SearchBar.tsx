"use client"
import { FaMagnifyingGlass } from 'react-icons/fa6'
import "./searchBar.css"
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { SearchContext } from '@/context/searchContext';
import { useSearch } from '@/hooks/useSearch';

const SearchBar = ({placeholder} : {placeholder: string}) => {
  const {inputValue, setInputValue} = useSearch();

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toLowerCase());
  } 

  return (
    <span id="searchBar-container" className='bg-white w-full'>
        <FaMagnifyingGlass />
        <input type="text" name="search" id="search" value={inputValue} onChange={handleInputChange} placeholder={placeholder}/>
    </span>
  )
}

export default SearchBar