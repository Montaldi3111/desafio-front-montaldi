import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
const Login = () => {
  return (
    <section className='bg-lightGray text-center font-body py-20 relative h-full'>
    <form>
      <h1 className='pb-0.5 font-bold text-lg'>Iniciar Sesion</h1>
      <div className='my-8'>
        <input type="email" name="email" id="email" placeholder='Correo electrónico' className='p-4 rounded-sm border-2 shadow w-1/4 text-lg'/>
      </div>
      <div className='mb-3.5'>
        <input type="password" name="password" id="password" placeholder='Contraseña' className='p-4 rounded-sm border-2 shadow w-1/4 text-lg'/>
      </div>
      <div className='flex flex-col py-6 mx-auto w-2/4 text-center items-center'>
        <button className='bg-ylw my-6 py-4 w-2/4 font-bold rounded-sm shadow-md'>Ingresar</button>
        <div className='flex flex-row justify-center text-center mb-3.5 rounded-sm text-ylw w-2/4 font-bold border-2 py-4 border-ylw bg-graySlate w-2/4 my-3 text-center shadow-md'>
        <button className='mb-0.5'>Continuar con Google</button>
        <FaArrowRight className='relative items-center top-1.5 left-20'/>
        </div>
      </div>
    </form>
    </section>
  )
}

export default Login;