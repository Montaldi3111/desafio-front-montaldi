import React from 'react'
import "./login.css"
import LoginFormContainer from '@/components/containers/LoginFormContainer';
import LoginForm from '@/components/Forms/LoginForm';
const Login = () => {
  return (
    <main className='bg-lightGray text-center font-body relative'>
    <LoginForm />
    </main>
  )
}

export default Login;