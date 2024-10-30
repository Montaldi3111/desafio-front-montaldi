"use client"
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { useRouter } from 'next/navigation';
import { useSearch } from '@/hooks/useSearch';
import "./searchBar.css"
import { useEffect } from 'react';

const SearchBar = ({placeholder} : {placeholder: string}) => {
  const {inputValue, setInputValue} = useSearch();
  const router = useRouter()
 
  useEffect(() => {
    setInputValue("");
  })

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toLowerCase());
  }

  const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      router.push(`/activity?filter=${inputValue}`)
      setInputValue("");
    }
  }

  return (
    <span id="searchBar-container" className='bg-white w-full'>
        <FaMagnifyingGlass />
        <input type="text" name="search" id="search" value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyDown} placeholder={placeholder}/>
    </span>
  )
}

export default SearchBar