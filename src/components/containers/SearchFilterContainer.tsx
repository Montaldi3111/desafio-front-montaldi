"use client"
import React, { useState } from 'react'
import SearchFilter from '../SearchFilter/SearchFilter'
import { FaSliders } from 'react-icons/fa6'

const SearchFilterContainer = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const toggleFilterVisibility = () => {
        setVisible(!visible);
    }
        // El div overlay sirve para que cuando se le haga click al botón de filtrar
    // el resto de la página quede inhabilitado y el menú del filtro resalte
    // la atención del usuario. Cualquier click fuera del menú de filtro desactiva
    // el overlay y cierra el menú de filtro.
    return (
        <>
        <div id="overlay" className={`${!visible ? 'hidden' : undefined}`} onClick={toggleFilterVisibility}>

        </div>
            <div id="filter-menu-container">
                <span id="filter-container" className='bg-ylw' onClick={toggleFilterVisibility}>
                    <h3 className='font-bold'>Filtrar</h3>
                    <FaSliders onClick={toggleFilterVisibility}/>
                </span>
                <span className={`${!visible ? "hidden" : undefined}`}>
                <SearchFilter setVisible={setVisible}/>
                </span>
            </div>
        </>
    )
}

export default SearchFilterContainer