import RegisterSuccess from '@/app/components/ActionSuccessful/RegisterSuccess';
import './register.css';
const Register = () => {
  return (
    <main className='bg-lightGray h-screen'>
    <h1 className='text-lg font-bold font-head text-center'>Crear Cuenta</h1>
    <form className='flex flex-col justify-center items-center'>
        <div id="top-input-container">
            <input type="text" name="name" id="name" placeholder='Nombre*' className='border-2 rounded-sm border-skyBlue'/>
            <input type="text" name="surname" id="surname" placeholder='Apellido*' className='border-2 rounded-sm border-skyBlue'/>
            <input type="text" name="dni" id="dni" placeholder='DNI*'  className='border-2 rounded-sm border-skyBlue'/>
            <input type="email" name="email" id="email"  placeholder='Correo electrónico*' className='border-2 rounded-sm border-skyBlue'/>
        </div>
        <p className='w-fit text-center'>Usa entre 6 y 12 carácteres (debe contener al menos 1 carácter especial, una mayúscula y un número)</p>
        <div id="bottom-input-container">
        <input type="password" name="password" id="password"  placeholder='Contraseña*' className='border-2 rounded-sm border-skyBlue'/>
        <input type="password" name="repeat-pass" id="repeat-pass"  placeholder='Confimar contraseña*' className='border-2 rounded-sm border-skyBlue'/>
        <input type="tel" name="phone" id="phone"  placeholder='Teléfono*' className='border-2 rounded-sm border-skyBlue'/>
        <button className='max-w-[300px] bg-ylw font-bold rounded-sm'>Crear Cuenta</button>
        </div>
    </form>
    {/* <RegisterSuccess /> */}
    </main>
  )
}

export default Register