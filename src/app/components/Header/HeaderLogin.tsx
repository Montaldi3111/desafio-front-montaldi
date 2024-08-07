import Image from "next/image"
const Header = () => {
    return (
      <header className="bg-graySlate p-2">
          <nav className="flex flex-row justify-between items-center">
              <Image src="/logo-2.png" alt="logo" width={100} height={100} className="w-[75px]"/>
          </nav>
      </header>
    )
  }
  
  export default Header