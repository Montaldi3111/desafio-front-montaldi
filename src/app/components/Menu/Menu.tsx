import React from 'react'
import "./menu.css"
const Menu = () => {
  return (
    <section id="menu" className="bg-ylw">
    <a href="#" className='font-bold'>Inicio</a>
    <a href="#">Actividad</a>
    <a href="#">Tu perfil</a>
    <a href="#">Cargar dinero</a>
    <a href="#">Pagar servicios</a>
    <a href="#">Tarjetas</a>
    <a href="#" className='text-graySlate'>Cerrar Sesión</a>
    </section>
  )
}

export default Menu