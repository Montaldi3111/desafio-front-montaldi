"use client"
import React, { useState } from 'react'
import SearchFilter from '../SearchFilter/SearchFilter'
import { FaSliders } from 'react-icons/fa6'

const SearchFilterContainer = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const toggleFilterVisibility = () => {
        setVisible(!visible);
    }
    return (
        <>
        <div id="overlay" className={`${!visible ? 'hidden' : undefined}`} onClick={toggleFilterVisibility}>

        </div>
            <div id="filter-menu-container">
                <span id="filter-container" className='bg-ylw' onClick={toggleFilterVisibility}>
                    <h3 className='font-bold'>Filtrar</h3>
                    <FaSliders />
                </span>
                <span className={`${!visible ? "hidden" : undefined}`}>
                <SearchFilter setVisible={setVisible}/>
                </span>
            </div>
        </>
    )
}

export default SearchFilterContainer