import { FaMagnifyingGlass } from 'react-icons/fa6'
import "./searchBar.css"

const SearchBar = () => {
  return (
    <span id="searchBar-container" className='bg-white'>
        <FaMagnifyingGlass />
        <input type="text" name="search" id="search" placeholder='Buscar en tu actividad'/>
    </span>
  )
}

export default SearchBar