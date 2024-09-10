import React from 'react'
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6'
import "./searchFilter.css"
import { TfiAngleRight } from 'react-icons/tfi'
const SearchFilter = () => {
    return (
        <section className='flex flex-col' id="search-filter-container">
            <article id="title">
                <div id="period-container">
                    <h3 className='font-bold'>Periodo</h3>
                    <FaAngleDown />
                </div>
                <div id="erase-filters">
                    <h3>Borrar filtros</h3>
                </div>
            </article>
            <article id="filters">
                <div id="filter-list">
                    <label>
                        <span>Hoy</span>
                        <input type="radio"  name="filter"/>
                    </label>
                    <label>
                        <span>Ayer</span>
                        <input type="radio"  name="filter"/>
                    </label>
                    <label>
                        <span>Última semana</span>
                        <input type="radio"  name="filter"/>
                    </label>
                    <label>
                        <span>Últimos 15 días</span>
                        <input type="radio" name="filter"/>
                    </label>
                    <label>
                        <span>Último mes</span>
                        <input type="radio"  name="filter"/>
                    </label>
                    <label>
                        <span>Último año</span>
                        <input type="radio"  name="filter"/>
                    </label>
                    <label>
                        <span>Otro período</span>
                        <TfiAngleRight />
                    </label>
                    <button>Aplicar</button>
                </div>
            </article>
        </section>
    )
}

export default SearchFilter