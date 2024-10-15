"use client"
import { FaAngleDown } from 'react-icons/fa6'
import "./searchFilter.css"
import { TfiAngleRight } from 'react-icons/tfi'
import { useEffect, useState } from 'react'

const SearchFilter = ({setVisible}: {setVisible: (value:any) => void}) => {
    const [currentFilter, setCurrentFilter] = useState<string | null>(null);
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        if(typeof window !== "undefined" && window){
            const URLParams = new URLSearchParams(window.location.search) // Obtengo el filtro que viene en la URL.
            const filterParam = URLParams.get("filter")
            setWidth(window.innerWidth);
            setCurrentFilter(filterParam);
        }
    },[])
    const visible = width >= 768 && width < 1024;

    // Esto me sirve para que React no me cambie los inputs a readOnly si contienen el atributo checked.
    const handleOptionChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setCurrentFilter(e.target.value);
    }
    return (
        <form className='flex flex-col' id="search-filter-container">
            <article id="title">
                <div id="period-container">
                    <h3 className='font-bold'>Periodo</h3>
                    <FaAngleDown />
                </div>
                <div id="erase-filters">
                    <h3><button>Borrar filtros</button></h3>
                </div>
            </article>
            <article id="filters">
                <div id="filter-list">
                    <label>
                        <span>Hoy</span>
                        <input type="radio" name="filter" onChange={handleOptionChange} checked={currentFilter === "today"} value={"today"} />
                    </label>
                    <label>
                        <span>Ayer</span>
                        <input type="radio" name="filter" onChange={handleOptionChange} checked={currentFilter === "yesterday"} value={"yesterday"}/>
                    </label>
                    <label>
                        <span>Última semana</span>
                        <input type="radio" name="filter" onChange={handleOptionChange} checked={currentFilter === "1-week"} value={"1-week"}/>
                    </label>
                    <label>
                        <span>Últimos 15 días</span>
                        <input type="radio" name="filter" onChange={handleOptionChange} checked={currentFilter === "2-week"} value={"2-week"}/>
                    </label>
                    <label>
                        <span>Último mes</span>
                        <input type="radio" name="filter" onChange={handleOptionChange} checked={currentFilter === "1-month"} value={"1-month"}/>
                    </label>
                    <label>
                        <span>Último año</span>
                        <input type="radio" name="filter" onChange={handleOptionChange} checked={currentFilter === "1-year"} value={"1-year"}/>
                    </label>
                    <label>
                        <span>Otro período</span>
                        <TfiAngleRight />
                    </label>
                    <div className="flex justify-between">
                    {visible && <h4></h4>}
                    <button onClick={()=>setVisible}>Aplicar</button>
                    </div>
                </div>
            </article>
        </form>
    )
}

export default SearchFilter