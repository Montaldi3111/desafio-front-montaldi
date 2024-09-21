"use client"
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { createUser } from '@/services/user/user.service';
import { useRouter } from 'next/navigation';
import * as yup from 'yup'
import RegisterSchema from '@/schemes/register.schemes';
import { useState } from 'react';
import { RegisterError } from '@/types/errors.types';
import { FaSpinner } from 'react-icons/fa6';
import { setCookie } from 'cookies-next';

type FormRegisterData = {
  dni: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeat_password: string;
  phone: string;
}

const RegisterForm = () => {

  const router = useRouter()
  const [serverError, setServerError] = useState<string|null>(null)
  const [spinner, setSpinner] = useState<boolean>(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormRegisterData>({
    resolver: yupResolver(RegisterSchema),
    defaultValues: {
      dni: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeat_password: '',
      phone: ''
    }
  });

  const onSubmit = (data : FormRegisterData) => {
    setSpinner(true);
    setServerError(null);
    createUser(data).then(() => {
      setSpinner(false);
      setCookie("userRegistered", "true" , {
        expires: new Date(Date.now() + 1000 * 60 * 300),
        path: "/",
      })
      router.push("/register/success")
    }).catch(error => {
      if(error instanceof RegisterError) {
        setSpinner(false);
        setServerError("Ya existe un usuario con este mail");
      } else {
        setSpinner(false);
        setServerError("Ha ocurrido un error inesperado");
      }
    })
  }

  return (
    <>
      <form id="form" className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-lg font-bold font-head text-center'>Crear Cuenta</h1>
        {serverError && <i id="form-error">Email ya registrado</i>}

        <section id="top-input-container">
          <div className='flex flex-col mr-4'>
            <input type="text" id={errors?.firstName && "input-error"} placeholder='Nombre*' {...register("firstName")} />
            {errors?.firstName && <p id="error-msg"><i>{errors.firstName.message}</i></p>}
          </div>
          <div className='flex flex-col ml-4'>
            <input type="text" id={errors?.lastName && "input-error"} placeholder='Apellido*' {...register("lastName")} />
            {errors.lastName && <p id="error-msg"><i>{errors.lastName.message}</i></p>}
          </div>
          <div className='flex flex-col mr-4'>
            <input type="text" id={errors?.dni && "input-error"} placeholder='DNI*' {...register("dni", {
              pattern: /^[0-9]{6,9}$/
            })} />
            {errors?.dni && <p id="error-msg"><i>{errors.dni.message}</i></p>}
          </div>
          <div className='flex flex-col ml-4'>
            <input type="email" id={errors?.email && "input-error"} placeholder='Correo electrónico*'{...register("email")} />
            {errors?.email && <p id="error-msg"><i>{errors.email.message}</i></p>}
          </div>
        </section>
        <p id="separator" className='w-fit text-center'>Usa entre 6 y 12 carácteres (debe contener al menos 1 carácter especial, una mayúscula y un número)</p>
        <section id="bottom-input-container">
          <div className='flex flex-col  mr-4'>
            <input type="password" id={errors?.password && "input-error"} placeholder='Contraseña*'{...register("password")} />
            {errors?.password && <p id="error-msg"><i>{errors.password.message}</i></p>}
          </div>
          <div className='flex flex-col ml-4'>
            <input type="password" id={errors?.repeat_password && "input-error"} placeholder='Confimar contraseña*' {...register("repeat_password")} />
            {errors?.repeat_password && <p id="error-msg"><i>{errors.repeat_password.message}</i></p>}
          </div>
          <div className='flex flex-col mr-4'>
            <input type="text" id={errors?.phone && "input-error"} placeholder='Teléfono*' {...register("phone")} />
            {errors?.phone && <p id="error-msg"><i>{errors.phone.message}</i></p>}
          </div>
          <div id="button-container" className='flex flex-col'>
            { !spinner ?
              <button className='max-w-[300px] bg-ylw font-bold rounded-sm shadow-md' onClick={handleSubmit(onSubmit)}>Crear Cuenta</button>
              :
            <button className='max-w-[300px] bg-ylwBlck font-bold rounded-sm shadow-md' disabled><FaSpinner className='mx-auto animate-spin text-xl'/></button>
            }
            {errors?.password && <p id="form-error"><i>{serverError}</i></p>}
          </div>
        </section>
      </form>
    </>
  )
}

export default RegisterForm