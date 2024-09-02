"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

type LoginRegisterHeaderParams = {
  session?: string,
  user?: UserType
}

const HeaderContainer = ({session, user}:LoginRegisterHeaderParams) => {
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  useEffect(() => {
    if(user) {
      setFirstName(user.firstname);
      setLastName(user.lastname);
    }
  },[user])
  const initials:string = firstname.toUpperCase()[0] + lastname.toUpperCase()[0];
  return (
    <>
    {session === "true" ?
        <span>
          <Link href={"/profile"} id="profile-link"><b id="user-initials">{initials}</b><b id="user-hi-message">Hola, {firstname + " " + lastname}</b></Link>
        </span>
        :
        <span className="flex justify-evenly">
          <a href="/login" id="login" className="bg-blck rounded border-2 border-ylw font-bold text-ylw">Ingresar</a>
          <a href="/register" id="register" className="bg-ylw rounded text-blck font-bold">Crear Cuenta</a>
        </span>
      }
    </>
  )
}

export default HeaderContainer