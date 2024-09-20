import SearchBar from '../SearchBar/SearchBar'
import SearchFilterContainer from './SearchFilterContainer'

const SearchBarFilterContainer = () => {
  return (
    <>
      <SearchBar placeholder={"Buscar en tu actividad"} />
      <SearchFilterContainer />
    </>
  )
}

export default SearchBarFilterContainer