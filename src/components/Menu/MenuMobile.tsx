'use client'
import React, { useEffect, useState } from 'react'
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
  const [currentPath, setCurrentPath] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname)
    }
  }, [])

  const handleLogout = async () => {
    const logout = await logoutSession();
    if (logout) {
      deleteCookie("session")
      deleteCookie("token")
      deleteCookie("password")
      router.push("/")
      router.refresh();
    } else {
      alert("No se pudo lograr la acción, intentelo de nuevo")
    }
  }

  if (showMenu) {
    return (
      <>
        <div id="overlay-menu"></div>
      <div className="h-full" id="menu">
        <span className="relative bg-graySlate font-bold text-ylw px-2" id="menu-hi-message">
          <FaX className="relative mt-4 left-44" onClick={() => setShowMenu(!showMenu)} />
          <div className='ml-4 pb-4'>
            <h3 className='mt-4 text-[16px]'>Hola,</h3><h3>{firstname + " " + lastname}</h3>
          </div>
        </span>
        <Link
          className={`${currentPath.startsWith("/dashboard") && 'font-bold'}`}
          href="/dashboard"
          onClick={() => setShowMenu(!showMenu)}>Inicio
        </Link>
        <Link
          className={`${currentPath.startsWith("/activity") && 'font-bold'}`}
          href="/activity"
          onClick={() => setShowMenu(!showMenu)}>Actividad
        </Link>
        <Link
          className={`${currentPath.startsWith("/profile") && 'font-bold'}`}
          href="/profile"
          onClick={() => setShowMenu(!showMenu)}>Tu perfil
        </Link>
        <Link
          className={`${currentPath.startsWith("/charge") && 'font-bold'}`}
          href="/charge"
          onClick={() => setShowMenu(!showMenu)}>Cargar dinero
        </Link>
        <Link
          className={`${currentPath.startsWith("/pay") && 'font-bold'}`}
          href="/pay"
          onClick={() => setShowMenu(!showMenu)}>Pagar servicios</Link>
        <Link className={`${currentPath.startsWith("/cards") && 'font-bold'}`}
          href="/cards"
          onClick={() => setShowMenu(!showMenu)}>Tarjetas
        </Link>
        <p className='text-graySlate mt-4 text-sm cursor-pointer' onClick={handleLogout}>Cerrar sesión</p>
      </div>
      </>
    )
  }
}

export default Menu