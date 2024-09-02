import Image from "next/image";
import { headers } from "next/headers";
import { getUserData } from "@/services/user/user.service";
import { getUserAccount } from "@/services/account/account.service";
import LoginRegisterHeader from "../containers/LoginRegisterHeader";
import "./header.css"
const Header = async () => {
  const session = headers().get("x-digital-session") ?? "";
  const token = headers().get("x-digital-access-token") ?? "";
  const userAccount:UserAccountType = await getUserAccount(token) ?? "";
  const user:UserType = await getUserData(userAccount.user_id, token) ?? "";
  return (
    <header className="bg-blck">
      <nav className="flex flex-row justify-between items-center">
        <a href="/" id="logo">
          <Image src="/logo-1.png" alt="logo" width={100} height={10} />
        </a>
        <LoginRegisterHeader session={session} user={user}/>
      </nav>
    </header>
  )
}

export default Header