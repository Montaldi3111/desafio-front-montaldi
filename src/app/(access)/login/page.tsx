import React from 'react'
import "./login.css"
import LoginFormContainer from '@/app/components/containers/LoginFormContainer';
const Login = () => {
  return (
    <main className='bg-lightGray text-center font-body relative'>
    <LoginFormContainer />
    </main>
  )
}

export default Login;