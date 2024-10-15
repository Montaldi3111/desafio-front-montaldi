"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
const Header = () => {
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    if(typeof window !== "undefined" && window)
    setCurrentPath(window.location.pathname);
  }, []);
    return (
      <header className="bg-graySlate p-2">
          <nav className="flex flex-row justify-between items-center">
            <Link href="/">
              <Image src="/logo-2.png" alt="logo" width={100} height={100} className="w-[75px]"/>
            </Link>
              {!currentPath.startsWith("/login") &&
              <Link href="/login" className="border-2 border-ylw text-ylw font-bold p-2 rounded text-sm">Iniciar Sesión</Link>
              }
          </nav>
      </header>
    )
  }
  
  export default Header