'use client'
import React, { useEffect } from 'react'
import "./menu.css"
import Link from 'next/link'
import { logoutSession } from '@/services/auth/auth.service'
import { useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next'
import { FaX } from 'react-icons/fa6'

type MenuProps = {
  showMenu?: boolean;
  firstname?: string;
  lastname?: string;
  setShowMenu: (showMenu: boolean) => void;
}

const Menu = ({ showMenu, setShowMenu, firstname, lastname }: MenuProps) => {
  const router = useRouter();
  const handleLogout = async () => {
    const logout = await logoutSession();
    if (logout) {
      deleteCookie("session")
      deleteCookie("token")
      deleteCookie("password")
      router.push("/login")
    } else {
      alert("No se pudo lograr la acción, intentelo de nuevo")
    }
  }

  return (
    <div id={showMenu ? "menu" : "hidden"}>
      <span className="relative bg-graySlate font-bold text-ylw px-2" id="menu-hi-message">
        <FaX className="relative mt-4 left-44" onClick={() => setShowMenu(!showMenu)} />
        <div className='ml-4 pb-4'>
          <h3 className='mt-4 text-[16px]'>Hola,</h3><h3>{firstname + " " + lastname}</h3>
        </div>
      </span>
      <Link className='font-bold' href="/dashboard">Inicio</Link>
      <Link href="/activity">Actividad</Link>
      <Link href="/profile">Tu perfil</Link>
      <Link href="/charge">Cargar dinero</Link>
      <Link href="/pay">Pagar servicios</Link>
      <Link href="/cards">Tarjetas</Link>
      <p className='text-graySlate mt-4 text-sm cursor-pointer' onClick={handleLogout}>Cerrar sesión</p>
    </div>
  )
}

export default Menu