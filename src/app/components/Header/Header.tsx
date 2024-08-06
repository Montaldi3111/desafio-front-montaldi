const Header = () => {
  return (
    <header className="bg-black p-4">
        <nav className="flex flex-row justify-between items-center">
            <p className="text-ylw text-xl">DMH</p>
            <span>
                <button className="text-sm font-bold border-2 rounded py-2 px-4 border-ylw text-ylw mr-4">Ingresar</button>
                <button className="text-sm font-bold bg-[#FAE208] rounded py-2 px-4 text-black">Crear Cuenta</button>
            </span>
        </nav>
    </header>
  )
}

export default Header