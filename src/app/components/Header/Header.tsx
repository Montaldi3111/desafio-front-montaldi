import Image from "next/image";
import "./header.css"
const Header = () => {
  return (
    <header className="bg-blck">
        <nav className="flex flex-row justify-between items-center">
            <div id="logo">
                <Image src="/logo-1.png" alt="logo" width={100} height={10} />
            </div>
            <span className="flex justify-evenly">
                <button id="login" className="bg-blck rounded border-2 border-ylw font-bold text-ylw">Ingresar</button>
                <button id="register" className="bg-ylw rounded text-blck font-bold">Crear Cuenta</button>
            </span>
        </nav>
    </header>
  )
}

export default Header

/* Desktop
<div>
                <Image src="/logo-1.png" alt="logo" width={100} height={10} />
            </div>

text-sm font-bold border-2 rounded py-2 px-4 border-ylw text-ylw mr-4 Ingresar

text-sm font-bold bg-[#FAE208] rounded py-2 px-4 text-black Crear Cuenta

  Mobile

  <nav className="flex flex-row justify-between items-center">
            <div>
                <Image src="/logo-1.png" alt="logo" width={100} height={10} />
            </div>
            <span className="phone:flex phone:justify-evenly phone:w-3/4">
                <button className="phone:w-2/3 phone:max-w-40 phone:p-1 phone:text-ylw phone:mr-2 phone:rounded phone:text-sm phone:font-bold phone:border-2 phone:border-ylw">Ingresar</button>
                <button className="phone:w-2/3 phone:max-w-40 phone:p-1 phone:bg-ylw phone:text-black phone:rounded phone:font-bold phone:bg-white phone:text-sm">Crear Cuenta</button>
            </span>
        </nav>

*/

