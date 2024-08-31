import Image from "next/image";
import "./header.css"
import { headers } from "next/headers";
import Link from "next/link";
import { getUserData } from "@/services/user/user.service";
import { getUserAccount } from "@/services/account/account.service";
const Header = async () => {
  const session = headers().get("x-digital-session") ?? "";
  const token = headers().get("x-digital-access-token") ?? "";
  const userAccount:UserAccountType = await getUserAccount(token) ?? "";
  const user:UserType = await getUserData(userAccount.user_id, token) ?? "";
  const inititals = user.firstname[0] + user.lastname[0];
  return (
    <header className="bg-blck">
      <nav className="flex flex-row justify-between items-center">
        <a href="/" id="logo">
          <Image src="/logo-1.png" alt="logo" width={100} height={10} />
        </a>
        {session === "true" ?
          <Link href={"/profile"}><b>{inititals.toUpperCase()}</b> Hola, <b>{user.firstname + " " + user.lastname}</b></Link>
          :
          <span className="flex justify-evenly">
            <a href="/login" id="login" className="bg-blck rounded border-2 border-ylw font-bold text-ylw">Ingresar</a>
            <a href="/register" id="register" className="bg-ylw rounded text-blck font-bold">Crear Cuenta</a>
          </span>

        }
      </nav>
    </header>
  )
}

export default Header