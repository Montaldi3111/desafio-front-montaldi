"use client"
import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa6';

const LoginForm = () => {
  const [foward, setFoward] = useState(false); // false => Solo muestra el input de email. true => muestra el input de password
  const [visible, setVisible] = useState(false); // false => no muestra el boton de ingresando. true => muestra el boton de ingresando
  const handleChange = () => {
    setFoward(!foward);
    setVisible(false); // en caso de que se haya ingresado incorrectamente el email lo vuelve a esconder
  }

  const handleLoader = () => {
    setVisible(!visible);
  }

  return (
    <form id="form" className='font-body w-full'>
      {!foward &&
        <section id="fieldset-container">
          <h1 className='font-bold text-lg'>¡Hola! Ingresá tu e-mail</h1>
          <div id="email-container">
            <input type="email" name="email" id="email" placeholder='Correo electrónico' className='my-5 p-4 border-2 border-skyBlue rounded-sm shadow-md' />
          </div>
          <button className='bg-ylw text-blck my-5 py-4 rounded-sm shadow-md font-bold' id="login-btn" onClick={handleChange}>Continuar</button>
        </section>
      }
      {foward && <section id="fieldset-container">
        <h1 className='font-bold text-lg'>Ingresa tu contraseña</h1>
        <div id="password-container">
          <input type="password" name="password" id="password" placeholder='Contraseña' className='my-5 p-4 border-2 border-skyBlue rounded-sm shadow-md' />
          <p id="error-msg" className='text-red-500 flex text-sm items-center justify-center'><i className='mr-4'>Contraseña incorrecta</i><FaArrowLeft className="hover:cursor-pointer" onClick={handleChange} /></p>
        </div>
        <div className='flex flex-col items-center'>
          {!visible ?
            <button className='bg-ylw text-blck my-5 py-4 rounded-sm shadow-md font-bold' id="login-btn" onClick={handleLoader}>Ingresar</button>
            :
            <div className='rounded-sm' id="loader">
              <button className='text-blck py-4 rounded-sm shadow-md font-bold' disabled>Ingresando...</button>
            </div>
          }
        </div>
      </section>
      }
      <a href="/register" className='bg-blck border-2 border-ylw text-ylw my-5 py-4 rounded-sm shadow-md font-bold' id="register-btn">Crear Cuenta</a>
    </form>
  )
}

export default LoginForm