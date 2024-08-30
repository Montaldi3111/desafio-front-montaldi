import Image from 'next/image'
import React from 'react'
import "./success.css"

const RegisterSuccess = () => {
  return (
    <main id="register-success" className='h-full'>
        <h1>Registro Exitoso</h1>
        <Image src="/tick-icon.png" alt="register successful" width={200} height={100}/>
        <p>Hemos enviado un correo de confirmación para válidar tu email, por favor revisalo para iniciar sesión.</p>
        <a href="/login" className='hover:cursor-pointer'>Continuar</a>

    </main>
  )
}

export default RegisterSuccess