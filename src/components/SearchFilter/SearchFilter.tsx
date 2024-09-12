"use client"
import React, { useContext, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import "./searchFilter.css"
import { TfiAngleRight } from 'react-icons/tfi'
const SearchFilter = ({setVisible}: {setVisible: (value:any) => void}) => {

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
                        <input type="radio" name="filter" value={"today"}/>
                    </label>
                    <label>
                        <span>Ayer</span>
                        <input type="radio" name="filter" value={"yesterday"}/>
                    </label>
                    <label>
                        <span>Última semana</span>
                        <input type="radio" name="filter" value={"1-week"}/>
                    </label>
                    <label>
                        <span>Últimos 15 días</span>
                        <input type="radio" name="filter" value={"2-week"}/>
                    </label>
                    <label>
                        <span>Último mes</span>
                        <input type="radio" name="filter" value={"1-month"}/>
                    </label>
                    <label>
                        <span>Último año</span>
                        <input type="radio" name="filter" value={"1-month"}/>
                    </label>
                    <label>
                        <span>Otro período</span>
                        <TfiAngleRight />
                    </label>
                    <button onClick={()=>setVisible}>Aplicar</button>
                </div>
            </article>
        </form>
    )
}

export default SearchFilter