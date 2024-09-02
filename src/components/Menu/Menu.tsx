'use client'
import React from 'react'
import "./menu.css"
import Link from 'next/link'
import { logoutSession } from '@/services/auth/auth.service'
import { useRouter } from 'next/navigation'
import { deleteCookie } from 'cookies-next'
const Menu = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const logout = await logoutSession();
    if (logout) {
      deleteCookie("session")
      deleteCookie("token")
    } else {
      alert("No se pudo lograr la acción, intentelo de nuevo")
    }
  }
  return (
    <div id="menu" className="bg-ylw">
      <Link className='font-bold' href="/dashboard">Inicio</Link>
      <Link href="/activity">Actividad</Link>
      <Link href="/profile">Tu perfil</Link>
      <Link href="/charge">Cargar dinero</Link>
      <Link href="/pay">Pagar servicios</Link>
      <Link href="/cards">Tarjetas</Link>
      <p className='text-graySlate mt-4 text-sm' onClick={handleLogout}>Cerrar sesión</p>
    </div>
  )
}

export default Menu