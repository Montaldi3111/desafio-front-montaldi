import Image from "next/image";
import Card from "./components/HomeCard/Card";
export default function Home() {

  const card1 = {
    head: "Tranferí dinero",
    content: "Desde Digital Money House vas a poder transferir dinero a otras cuentas, así como también recibir transferencias y nuclear tu capital en nuestra billetera virtual"
  }

  const card2 = {
    head: "Pago de servicios",
    content: "Pagá mensualmente los servicios en 3 simples clicks. Fácil, rápido y conveniente. Olvidate de las facturas en papel"
  }

  return (
    <main className="relative">
      <Image src="/home-img.png" alt="home-img" width={500} height={10} className="w-full" />
      <div className="absolute w-80 top-20 left-20">
        <h1 className="text-white text-4xl">De ahora en adelante, hacés más con tu dinero</h1>
        <h1 className="text-ylw text-2xl mt-3">Tu nueva <b>billetera</b> virtual</h1>
      </div>
      <section className="w-full bg-ylw rounded-t-xl absolute bottom-0">
      <div className="flex flex-row justify-around w-3/4 m-auto relative -top-20">
        <Card message={card1}/>
        <Card message={card2}/>
      </div>
      </section>
    </main>
  );
}
