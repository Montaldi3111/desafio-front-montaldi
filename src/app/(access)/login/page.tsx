import React from 'react'
import "./login.css"
import LoginForm from '@/components/Forms/LoginForm';
const Login = () => {
  return (
    <main className='bg-lightGray w-full text-center font-body relative'>
    <LoginForm />
    </main>
  )
}

export default Login;