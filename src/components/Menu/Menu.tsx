import React from 'react'
import "./menu.css"
import Link from 'next/link'
const Menu = () => {
  return (
    <div id="menu" className="bg-ylw">
      <Link className='font-bold' href="/dashboard">Inicio</Link>
      <Link href="/activity">Actividad</Link>
      <Link href="/profile">Tu perfil</Link>
      <Link href="/charge">Cargar dinero</Link>
      <Link href="/pay">Pagar servicios</Link>
      <Link href="/cards">Tarjetas</Link>
      <Link className='text-graySlate' href="/logout">Cerrar sesión</Link>
    </div>
  )
}

export default Menu