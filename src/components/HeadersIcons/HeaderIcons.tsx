"use client"
import React, { useState } from 'react'
import { FaBars, FaX } from 'react-icons/fa6'
import Menu from '../Menu/MenuMobile'
import Link from 'next/link'

type HeaderIconsProps = {
  userFirstname: string,
  userLastname: string,
}

const HeaderIcons = ({ userFirstname, userLastname }: HeaderIconsProps) => {
  const initials = userFirstname[0].toUpperCase() + userLastname[0].toUpperCase();
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);

  }
  return (
    <>
      {!showMenu ? <>
        <Link href={"/profile"} id="profile-link"><b id="user-initials">{initials}</b><b id="user-hi-message">Hola, {userFirstname + " " + userLastname}</b></Link>
        <FaBars id="burguer-menu" onClick={handleMenu} />
      </>

        :
        <Menu showMenu={showMenu} firstname={userFirstname} lastname={userLastname} setShowMenu={setShowMenu} />
      }
    </>
  )
}

export default HeaderIcons