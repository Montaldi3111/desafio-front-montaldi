"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import "./success.css"
import { useRouter } from 'next/navigation'
import { deleteCookie, getCookie, getCookies } from 'cookies-next'

const RegisterSuccess = () => {
  const router = useRouter();
  // useEffect(() => {
  //   deleteCookie("userRegistered")
  // },[])
  return (
    <main id="register-success" className='h-screen'>
        <h1>Registro Exitoso</h1>
        <Image src="/tick-icon.png" alt="register successful" width={200} height={100}/>
        <p>Hemos enviado un correo de confirmación para válidar tu email, por favor revisalo para iniciar sesión.</p>
        <button className='hover:cursor-pointer' onClick={() => router.push("/login")}>Continuar</button>

    </main>
  )
}

export default RegisterSuccess