import Image from "next/image";
import "./header.css"
const Header = () => {
  return (
    <header className="bg-blck">
        <nav className="flex flex-row justify-between items-center">
            <a href="/" id="logo">
                <Image src="/logo-1.png" alt="logo" width={100} height={10} />
            </a>
            <span className="flex justify-evenly">
                <a href="/login" id="login" className="bg-blck rounded border-2 border-ylw font-bold text-ylw">Ingresar</a>
                <a href="/register" id="register" className="bg-ylw rounded text-blck font-bold">Crear Cuenta</a>
            </span>
        </nav>
    </header>
  )
}

export default Header