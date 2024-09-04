import Image from "next/image"
import Link from "next/link"
const Header = () => {
    return (
      <header className="bg-graySlate p-2">
          <nav className="flex flex-row justify-between items-center">
              <Image src="/logo-2.png" alt="logo" width={100} height={100} className="w-[75px]"/>
              <Link href="/login" className="border-2 border-ylw text-ylw font-bold p-2 rounded text-sm">Iniciar Sesión</Link>
          </nav>
      </header>
    )
  }
  
  export default Header