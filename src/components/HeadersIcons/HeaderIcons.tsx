"use client"
import React, { useState } from 'react'
import { FaBars, FaX } from 'react-icons/fa6'
import Menu from '../Menu/MenuMobile'

type HeaderIconsProps = {
    userFirstname: string,
    userLastname: string,
}

const HeaderIcons = ({userFirstname, userLastname}:HeaderIconsProps) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const handleMenu = () => {
        setShowMenu(!showMenu);
  
    }
  return (
    <>
    {!showMenu ?
    <FaBars id="burguer-menu" onClick={handleMenu}/>
    :
    <Menu showMenu={showMenu} firstname={userFirstname} lastname={userLastname} setShowMenu={setShowMenu}/>
    }
    </>
  )
}

export default HeaderIcons