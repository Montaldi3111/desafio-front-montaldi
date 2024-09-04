"use client"
import { loginRequest } from '@/services/auth/auth.service';
import { yupResolver } from '@hookform/resolvers/yup';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from 'react-icons/fa6';
import * as yup from 'yup';

type FormLoginData = {
  email: string;
  password: string;
}

function maskPassword (pass:string):string {
  if(!pass) return "";
  return '*'.repeat(pass.length);
  
}

const LoginForm = () => {

  const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  }).required()

  const { register, handleSubmit, formState: { errors } } = useForm<FormLoginData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const [foward, setFoward] = useState<boolean>(false); // false => Solo muestra el input de email. true => muestra el input de password
  const router = useRouter();

  const handleChange = ():void => {
    setFoward(!foward);
  }

  const onSubmit = (data: FormLoginData) => {
    loginRequest(data).then((response:string) => {
      const maskedpassword:string = maskPassword(data.password);
      setCookie("password", maskedpassword, {
        expires: new Date(Date.now() + 1000 * 3600),
      })
      setCookie("token", response, {
        expires: new Date(Date.now() + 1000 * 3600),
      })
      setCookie("session", "true", {
        expires: new Date(Date.now() + 1000 * 3600),  
      })
    }).then(() => {
      router.push("/dashboard")
    }).catch(err => {
      throw new Error(err.message)
    })
  }

  return (
    <form id="form" className='font-body w-full' onSubmit={handleSubmit(onSubmit)}>
      {!foward &&
        <section id="fieldset-container">
          <h1 className='font-bold text-lg'>¡Hola! Ingresá tu e-mail</h1>
          <div id="email-container">
            <input type="email" id="email" placeholder='Correo electrónico' className='my-5 p-4 border-2 border-skyBlue rounded-sm shadow-md' {...register("email")} />
          </div>
          <button className='bg-ylw text-blck my-5 py-4 rounded-sm shadow-md font-bold' id="login-btn" onClick={handleChange}>Continuar</button>
        </section>
      }
      {foward && <section id="fieldset-container">
        <h1 className='font-bold text-lg'>Ingresa tu contraseña</h1>
        <div id="password-container">
          <input type="password" id="password" placeholder='Contraseña' className='my-5 p-4 border-2 border-skyBlue rounded-sm shadow-md' {...register("password")} />
          {errors.email?.type === "required" && <p id="error-msg" className='text-red-500 flex text-sm items-center justify-center'><i className='mr-2'>Debes ingresar un email.</i><FaArrowLeft className="hover:cursor-pointer" onClick={handleChange} /></p>}
          {errors?.email?.type === "email" && <p id="error-msg" className='text-red-500 flex text-sm items-center justify-center'><i className='mr-2'>Email inválido.</i><FaArrowLeft className="hover:cursor-pointer" onClick={handleChange} /></p>}
          {errors?.password && <p id="error-msg" className='text-red-500 flex text-sm items-center justify-center'><i>Debes ingresar una contraseña</i></p>}
        </div>
        <div className='flex flex-col items-center'>
          <button className='bg-ylw text-blck my-5 py-4 rounded-sm shadow-md font-bold' id="login-btn" onClick={handleSubmit(onSubmit)}>Ingresar</button>
        </div>
      </section>
      }
      <a href="/register" className='bg-blck border-2 border-ylw text-ylw my-5 py-4 rounded-sm shadow-md font-bold' id="register-btn">Crear Cuenta</a>
    </form>
  )
}

export default LoginForm