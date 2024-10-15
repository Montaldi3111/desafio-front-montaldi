import React from 'react'
import "./login.css"
import LoginForm from '@/components/Forms/LoginForm';
import { Toaster } from 'sonner';
const Login = () => {
  return (
    <main className='bg-lightGray w-full text-center font-body relative'>
      <Toaster richColors visibleToasts={1}/>
    <LoginForm />
    </main>
  )
}

export default Login;