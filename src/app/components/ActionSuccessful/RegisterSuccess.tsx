import Image from 'next/image'
import React from 'react'
import "./registerSuccess.css"

const RegisterSuccess = () => {
  return (
    <section id="register-success" className=''>
        <h1>Registro Exitoso</h1>
        <Image src="/tick-icon.png" alt="register successful" width={200} height={100}/>
        <p>Hemos enviado un correo de confirmación para válidar tu email, por favor revisalo para iniciar sesión.</p>
        <button>Continuar</button>

    </section>
  )
}

export default RegisterSuccess