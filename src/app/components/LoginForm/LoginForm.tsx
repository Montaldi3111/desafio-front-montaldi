"use client"
import React from 'react'

const LoginForm = () => {
  return (
    <form id="form" className='font-body w-full h-[75vh]'>
      <h1 className='font-bold text-lg'>¡Hola! Ingresá tu e-mail</h1>
      <div className='' id="email-container">
        <input type="email" name="email" id="email" placeholder='Correo electrónico' className='my-5 p-4 border-2 border-gray-200 rounded-sm shadow-md'/>
      </div>
      <div className='' id="password-container">
        <input type="password" name="password" id="password" placeholder='Contraseña' className='my-5 p-4 border-2 border-gray-200 rounded-sm shadow-md'/>
      </div>
      <div className='flex flex-col items-center'>
        <button className='bg-ylw text-blck my-5 py-4 rounded-sm shadow-md font-bold' id="login-btn">Ingresar</button>
        <button className='bg-blck border-2 border-ylw text-ylw my-5 py-4 rounded-sm shadow-md font-bold' id="register-btn">Crear Cuenta</button>
      </div>
    </form>
  )
}

export default LoginForm