"use client"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import React from 'react'
import { useForm } from 'react-hook-form';

type FormData = {
  dni: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeat_password: string;
  phone: string;
}

const schema = yup.object({
  dni: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  repeat_password: yup.string().required(),
  phone: yup.string().required()
}).required();

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <>
      <form id="form" className='flex flex-col justify-center items-center' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-lg font-bold font-head text-center'>Crear Cuenta</h1>
        <section id="top-input-container">
          <div className='flex flex-col mr-4'>
            <input type="text" id={errors?.firstName && "input-error"} placeholder='Nombre*' {...register("firstName")} />
            {errors?.firstName && <p id="error-msg"><i>Este campo es obligatorio</i></p>}
          </div>
          <div className='flex flex-col ml-4'>
            <input type="text" id={errors?.lastName && "input-error"} placeholder='Apellido*' {...register("lastName")} />
            {errors.lastName && <p id="error-msg"><i>Este campo es obligatorio</i></p>}
          </div>
          <div className='flex flex-col mr-4'>
            <input type="text" id={errors?.dni && "input-error"} placeholder='DNI*' {...register("dni", {
              pattern: /^[0-9]{6,9}$/
            })} />
            {errors?.dni && <p id="error-msg"><i>Este campo es obligatorio</i></p>}
            {errors.dni?.type === "pattern" && <p id="error-msg"><i>Solo se aceptan números</i></p>}
          </div>
          <div className='flex flex-col ml-4'>
            <input type="email" id={errors?.email && "input-error"} placeholder='Correo electrónico*'{...register("email")} />
            {errors?.email && <p id="error-msg"><i>Este campo es obligatorio</i></p>}
          </div>
        </section>
        <p id="separator" className='w-fit text-center'>Usa entre 6 y 12 carácteres (debe contener al menos 1 carácter especial, una mayúscula y un número)</p>
        <section id="bottom-input-container">
          <div className='flex flex-col  mr-4'>
            <input type="password" id={errors?.password && "input-error"} placeholder='Contraseña*'{...register("password", {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/
            })} />
            {errors?.password && <p id="error-msg"><i>Este campo es obligatorio</i></p>}
            {errors.password?.type == "pattern" && <p id="error-msg"><i>Contraseña no válida</i></p>}
          </div>
          <div className='flex flex-col ml-4'>
            <input type="password" id={errors?.repeat_password && "input-error"} placeholder='Confimar contraseña*' {...register("repeat_password")} />
            {errors?.repeat_password && <p id="error-msg"><i>Este campo es obligatorio</i></p>}
          </div>
          <div className='flex flex-col mr-4'>
            <input type="text" id={errors?.phone && "input-error"} placeholder='Teléfono*' {...register("phone", {
              pattern: /^[0-9]$/
            })} />
            {errors?.phone && <p id="error-msg"><i>Este campo es obligatorio</i></p>}
            {errors.phone?.type === "pattern" && <p id="error-msg"><i>Solo se aceptan números</i></p>}
          </div>
          <div id="button-container" className='flex flex-col'>
          <button className='max-w-[300px] bg-ylw font-bold rounded-sm shadow-md' onClick={handleSubmit(onSubmit)}>Crear Cuenta</button>
          {errors?.password && <p id="form-error"><i>Revisar los campos</i></p>}
          </div>
        </section>
      </form>
    </>
  )
}

export default RegisterForm