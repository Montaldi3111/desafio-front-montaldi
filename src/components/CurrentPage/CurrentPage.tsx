"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import './currentPage.css'
import { translateCurrentPage } from '@/utils/translateCurrentPage'

const CurrentPage = () => {
    const [currentPath, setCurrentPath] = useState<string>("");
    useEffect(() => {
        if(typeof window !== "undefined") {
            setCurrentPath(window.location.pathname.split('/')[1])
        }
    },[])
    const page = translateCurrentPage(currentPath);
  return (
    <div id="current-page">
    <FaArrowRight />
    <p className='underline'>{page}</p>
  </div>
  )
}

export default CurrentPage