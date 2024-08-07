import React from 'react'
import "./login.css"
const Login = () => {
  return (
    <section className='bg-lightGray text-center items-center py-10 font-body relative h-3/4'>
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
    </section>
  )
}

export default Login;

/* 
Desktop 

<h1 className='pb-0.5 font-bold text-lg'>¡Hola! Ingresá tu e-mail</h1>
      <div className='my-8' id="email-container">
        <input type="email" name="email" id="email" placeholder='Correo electrónico' className='p-4 rounded-sm border-2 shadow w-1/4 text-lg'/>
      </div>
      <div className='mb-3.5' id="password-container">
        <input type="password" name="password" id="password" placeholder='Contraseña' className='p-4 rounded-sm border-2 shadow w-1/4 text-lg'/>
      </div>
      <div className='flex flex-col py-6 mx-auto w-2/4 text-center items-center'>
        <button className='bg-ylw my-6 py-4 w-2/4 font-bold rounded-sm shadow-md'>Ingresar</button>
        <div className='flex flex-row justify-center text-center mb-3.5 rounded-sm text-ylw w-2/4 font-bold border-2 py-4 border-ylw bg-graySlate w-2/4 my-3 text-center shadow-md'>
        <button className='mb-0.5'>Continuar con Google</button>
        <FaArrowRight className='relative items-center top-1.5 left-20'/>
        </div>
      </div>

*/