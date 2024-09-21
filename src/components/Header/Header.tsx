import Image from "next/image";
import LoginRegisterHeader from "../LoginRegisterHeader/LoginRegisterHeader";
import "./header.css"
import { cookies } from "next/headers";
import Link from "next/link";

const Header = () => {
  const cookiesSotre = cookies();
  const session:string = cookiesSotre.get("session")?.value?? "";
  return (
    <header className="bg-blck">
      <nav className="flex flex-row justify-between items-center">
        <Link href="/" id="logo">
          <Image src="/logo-1.png" alt="logo" width={100} height={10} />
        </Link>
        { session  == "true" ?
         <LoginRegisterHeader/>
         :
         <span className="flex">
          <Link href="/login" id="login" className="bg-blck rounded border-2 border-ylw font-bold text-ylw">Ingresar</Link>
          <Link href="/register" id="register" className="bg-ylw rounded text-blck font-bold">Crear Cuenta</Link>
        </span>}
      </nav>
    </header>
  )
}

export default Header