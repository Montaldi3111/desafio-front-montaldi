import React from 'react'
import "./login.css"
import LoginFormContainer from '@/app/components/containers/LoginFormContainer';
const Login = () => {
  return (
    <section className='bg-lightGray text-center items-center py-10 font-body relative h-3/4'>
    <LoginFormContainer />
    </section>
  )
}

export default Login;