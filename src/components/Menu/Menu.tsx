"use client"
import React, { useEffect, useState } from 'react'
import "./menu.css"
import Link from 'next/link'
import { logoutSession } from '@/services/auth/auth.service'
import { useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next'

const Menu = () => {
    const [currentPath, setCurrentPath] = useState<string>("");
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
                
                useEffect(() => {
                    if(typeof window !== 'undefined'){
                        setCurrentPath(window.location.pathname)
                    }
                },[])
  return (
    <div id="menu-home" className='bg-ylw h-full'>
      <Link className={`${currentPath.startsWith("/dashboard") && "font-bold"}`} href="/dashboard">Inicio</Link>
      <Link className={`${currentPath.startsWith("/activity") && "font-bold"}`} href="/activity">Actividad</Link>
      <Link className={`${currentPath.startsWith("/profile") && "font-bold"}`} href="/profile">Tu perfil</Link>
      <Link className={`${currentPath.startsWith("/charge") && "font-bold"}`} href="/charge">Cargar dinero</Link>
      <Link className={`${currentPath.startsWith("/pay") && "font-bold"}`} href="/pay">Pagar servicios</Link>
      <Link className={`${currentPath.startsWith("/cards") && "font-bold"}`} href="/cards">Tarjetas</Link>
      <p className='text-graySlate mt-4 text-sm cursor-pointer' onClick={handleLogout}>Cerrar sesión</p>
    </div>
  )
}

export default Menu